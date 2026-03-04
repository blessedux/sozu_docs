---
title: Architecture
description: SozuPay NGO + Business dashboards, Sozu Wallet, org wallet, auth, and end-to-end secure microcredit disbursement
---

# Architecture

This page explains how the Sozu stack coordinates between the **NGO Dashboard (SozuPay)** and **Sozu Wallet** to achieve end-to-end secure, auditable, and scalable disbursement of microcredits (USDC on Stellar). Scope: Year 1 NGO disbursement (Argentina, USDC on Stellar). First NGO partner: MUJERES 2000. The canonical document with full diagrams and sequences is linked at the bottom: [architecture-microcredit-disbursement.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/architecture-microcredit-disbursement.md).

---

## 1. High-Level System Context

**Key idea:** The **dashboard** is the control plane (who gets what, when, audit). The **org wallet** is the single source of funds for payouts. **Sozu Wallet** (per recipient) is the destination; it can be reached via direct Stellar payment or, when Sozu Wallet is registered as an SDP provider, via the Stellar SDP ecosystem.

- **NGO Staff** — Use the dashboard to approve beneficiaries, create batches, and confirm payments. No direct access to signing keys.
- **Recipient (Emprendedora)** — Uses Sozu Wallet to receive USDC, view balance/history, pay, and offramp (e.g. MoneyGram ARS).
- **Backend/API** — Persists beneficiaries, batches, and payout lines; builds and signs Stellar payments from the org wallet to recipient addresses; enforces idempotency and audit.
- **Stellar + Soroban + SDP** — Horizon for submission and queries; org wallet (G or Soroban C) holds USDC; optional SDP for third-party senders to send to Sozu Wallet.

Sozu Wallet is non-custodial (USDC on Stellar, ARS display, Passkey/MPC, SDP receiver). The dashboard never holds recipient keys; it only triggers payouts to their Stellar addresses.

---

## 2. SozuPay: Two Dashboards, One Stack

SozuPay is the **dashboard layer** for stablecoin payments with DeFi baked in.

### NGO Dashboard (Control Plane)

- **Beneficiary list & application workflow** — Approve/reject; store Stellar address per beneficiary.
- **Disbursement schedules & batch creation** — CSV or form: list of destination addresses and amounts.
- **Single payout & batch execution** — Trigger payouts (2FA for large/batch); backend builds and submits Stellar tx from org wallet → recipient.
- **Payment management** — Confirm payment, mora, history, ranking, reports.
- **Credit simulator** — TNA, cuotas, mora; renewal; indicators; optional Salesforce sync.
- **Org wallet display** — Show public key: “Fund this address with XLM and USDC.”

Staff log in (Privy), pick an organization, use the dashboard for that org. The org wallet (G or C) holds USDC; idle USDC can be routed to yield (Defindex/Blend) via a yield router in production.

### Business Dashboard

- Same stack for merchants: receive USDC, track revenue, manage payouts. One balance, one transaction list; DeFi yield on idle balance.

---

## 3. Component Diagram — Where Each Piece Lives

- **NGO Dashboard (SozuPay)** — UI only; calls Backend over HTTPS/API. No signing keys.
- **Backend (Next.js API + DB)** — Persistence: payouts, disbursement_batch, disbursement_line, audit, beneficiaries. Idempotency keys for single-payout and batch-create. Builds/signs USDC payment (org wallet → recipient); submits to Horizon. Optional: invoke Soroban disbursement contract when org has soroban_contract_id. Concurrency: bounded parallel submissions (queue or semaphore). **ORG_DISBURSEMENT_SECRET** in env; never exposed to frontend.
- **Stellar Horizon** — Submit payment tx; query balance and history; map errors to status.
- **Soroban (optional)** — NGO vault, disbursement/repayment tracking, trust score; yield router for Defindex.
- **SDP (optional)** — Sozu Wallet as provider; receiver onboarding; senders can pick Sozu.
- **Stellar Ledger** — Org wallet (G or C) holds USDC and signs payout tx; recipient accounts (G) receive USDC.
- **Sozu Wallet (per recipient)** — Non-custodial; USDC on Stellar; ARS display; Passkey/MPC; receives disbursements (from dashboard-initiated Stellar payment or via SDP); history; offramp (MoneyGram); credit state/calendar from dashboard/backend.

---

## 4. End-to-End Disbursement Flow

### Single Payout (MVP — 30-day scope)

1. NGO staff clicks “Pay” in the dashboard (recipient, amount).
2. Dashboard sends `POST /payout` with an idempotency key.
3. Backend checks idempotency; rejects duplicate. Creates payout row (pending). Builds Stellar payment (org wallet → recipient G...). Signs with org secret. Submits to Horizon.
4. Tx is on-chain; USDC lands in Sozu Wallet. Backend receives txHash; updates payout row and audit log; returns 200 + txHash to dashboard.
5. Staff sees success or failure; recipient sees balance in Sozu Wallet.

### Batch Disbursement (Production)

1. Staff create batch (CSV/form: list of destination, amount). Dashboard sends `POST /batch` with idempotency key.
2. Backend validates org balance; creates batch + lines (pending); returns 201 batchId.
3. Staff submit batch (2FA if required). Dashboard calls `POST batch/execute`.
4. Backend runs with bounded concurrency: for each line, build tx → sign → submit to Horizon; update line (txHash or failed). When all done, batch status updated.
5. Dashboard can poll progress; list and detail show success/fail per line.

Idempotency on single and batch create prevents double-sends. All payout/batch events are persisted and linked to Stellar Explorer by txHash.

---

## 5. Data Flow: From Application to On-Chain Payout

1. **Emprendedora application** (form/PDF) → **Beneficiary record** in DB (with Stellar address).
2. Beneficiary → **Schedule / Batch** (DB) with lines.
3. Batch → **Disbursement line** (destination, amount, status).
4. Backend **executes** (bounded concurrency): build payment(org_wallet → dest), sign with ORG_DISBURSEMENT_SECRET, submit to Horizon.
5. **Stellar:** USDC transfer org wallet (G...) → Recipient (G...). txHash stored on disbursement_line.
6. **Sozu Wallet** (recipient G...) holds USDC; balance and history in wallet UI.

---

## 6. Security Boundaries

- **NGO Staff** — Dashboard only; auth and 2FA for payout/batch. Audit records who triggered what. No direct access to signing key.
- **Backend** — Holds ORG_DISBURSEMENT_SECRET only in env/secrets manager; never logged or sent to frontend. Phase 2: optional multisig or Soroban (admin key signs).
- **Stellar** — On-chain only the org wallet (or contract) signs; recipient receives USDC. Immutable txHash for every payout.
- **Sozu Wallet** — Non-custodial; recipient controls keys (Passkey/MPC). No Sozu custody of recipient funds.
- **Idempotency** — Single and batch create accept keys; duplicate requests rejected → no double-send.
- **Audit** — All payout/batch events in DB; link to Stellar Explorer by txHash.
- **Rate limits** — Concurrency cap on Horizon submissions; optional daily/per-batch limits.

---

## 7. Org Wallet & Signing (Phases)

- **Phase 1 (current):** One Stellar account (G...) per org; secret in env (ORG_DISBURSEMENT_SECRET). Backend builds payment(org → recipient), signs with org key, submits. Audit: super-admin authorized in app; Stellar tx signed only by org wallet.
- **Phase 2 (future):** Option A — Multisig: org key + super-admin key, threshold 2. Option B — Soroban: smart contract holds USDC; payout(caller, recipient, amount); require_auth(caller); backend builds invoke, admin signs.

See [org-wallet-design.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/org-wallet-design.md) and Soroban disbursement contract in the repo.

---

## 8. NGO Smart Accounts & Yield (Production)

- NGO org deposits use **smart accounts (C)** with logic to target Defindex (and optionally Blend). Idle USDC is routed via a **yield router contract**; a **strategic DeFi planner** runs in the background — no per-action user signing for the yield leg.
- **Yield router (C):** Channels org (and optionally user) USDC to Defindex strategies; tracks per-depositor principal; redeems on withdraw.
- **Strategic DeFi planner:** Allocates/rebalances by policy and risk; runs as keeper or authorized contract so NGOs earn yield by default without extra UX.

---

## 9. Sozu Wallet (Recipient Side)

- **Role:** Non-custodial USDC wallet for recipients (and later merchants). SDP-enabled so any SDP sender can disburse to Sozu.
- **Auth:** Passkey/MPC; no seed phrases for everyday users. ARS (or local fiat) display.
- **Auto-compounding yield:** Idle USDC can earn DeFi yield (e.g. Blend/Defindex); yield compounds in the background, no lockup.
- **Offramp:** MoneyGram (e.g. ARS cash-out) today; **Sozu Anchor** (proprietary offramp) in the future.

---

## 10. Scalability & Production Readiness

| Concern | Approach |
|--------|----------|
| **Many recipients** | Batch model: create batch with N lines; execute with bounded concurrency; queue or semaphore to avoid rate limits and sequence issues. |
| **Persistence** | All payout records, batch/line, audit in DB (e.g. Postgres); no in-memory state for critical data. |
| **Idempotency** | Single-payout and batch-create APIs accept idempotency keys; store and reject duplicates. |
| **Balance** | Check org wallet balance before/during batch; fail fast or pause if insufficient. |
| **Limits** | Per-batch max recipients and max amount; optional daily/rolling caps. |
| **Observability** | Log outcomes; metrics (batch completed, partial failure, latency); alerts on high failure rate or balance issues. |
| **SDP path** | When Sozu Wallet is registered as SDP provider, senders can select Sozu; recipients receive via same Stellar address. |

---

## 11. How Dashboard and Wallets Coordinate — Summary

1. **Dashboard** defines who gets paid (beneficiaries, schedules, batches) and triggers payouts; it never holds recipient keys.
2. **Backend** holds the org wallet secret (or coordinates multisig/Soroban); builds and submits Stellar payments to **recipient Stellar addresses**.
3. **Recipient address** is the same as the **Sozu Wallet** account for that beneficiary; disbursement lands in their non-custodial wallet.
4. **Sozu Wallet** shows balance (USDC/ARS), history, and offramp; optional SDP path for third-party senders.
5. **Soroban** (optional) adds on-chain vault, disbursement/repayment tracking, and trust score; Defindex/Blend add yield on idle USDC.
6. **Yield router & NGO auto-yield:** Org smart accounts (C) route idle USDC to Defindex via the yield router; strategic DeFi planner runs in the background so NGOs earn yield without signing each allocation.
7. **E2E:** Application → Beneficiary (with Stellar address) → Batch/line → Backend signs and submits → Horizon → USDC in Sozu Wallet → Audit and txHash stored.

---

## Reference

The full architecture document with ASCII diagrams, sequence diagrams, and detailed references is:

**[architecture-microcredit-disbursement.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/architecture-microcredit-disbursement.md)** — E2E secure & scalable microcredit disbursement (system context, components, single & batch flows, data flow, security, org wallet phases, NGO smart accounts & yield, scalability, document references).

Other architecture docs in the SozuPay MVP repo:

| Document | Description |
|----------|-------------|
| [self-custodial-auth-design.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/self-custodial-auth-design.md) | Self-custodial auth design |
| [org-wallet-design.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/org-wallet-design.md) | Organization wallet design |
| [smart-accounts.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/smart-accounts.md) | Smart accounts (G vs C) |
| [login-flow.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/login-flow.md) | Login flow |

**Folder:** [docs/01-architecture](https://github.com/blessedux/sozupay_mvp/tree/main/docs/01-architecture)
