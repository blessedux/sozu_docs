---
title: How It Works
description: SozuPay architecture, NGO to wallet flow, DeFi yield, and offramping — from donor to Sozu Wallet to cash
---

# How It Works

This page describes the **SozuPay architecture** and the **end-to-end flow**: NGO and Business dashboards for stablecoin payments (with DeFi baked in), Sozu Wallet with auto-compounding yield, the path from NGO to wallets, and offramping (MoneyGram today, **Sozu Anchor** tomorrow). For strategy and roadmap, see [Overview](/concepts/overview). Full technical docs: [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs).

---

## SozuPay Architecture at a Glance

### Two dashboards, one stack

- **NGO Dashboard (SozuPay)** — Manage beneficiaries, disbursement schedules, and batch USDC payouts. Repayment confirmation and audit trail. Org wallet can hold USDC in yield (Blend/Defindex); 90% to vault, 10% hot for liquidity. Staff log in, pick an organization, run payouts to recipient Stellar addresses.
- **Business Dashboard (SozuPay)** — Receive payments in USDC, track revenue, manage payouts to providers or employees. Same DeFi yield on idle balance; one dashboard for programmable dollar payments.

### Sozu Wallet

- **Recipient (and later merchant) wallet** — Non-custodial USDC on Stellar; SDP-enabled so any SDP sender can disburse to Sozu. Passkey/MPC; ARS display.
- **Auto-compounding DeFi yield** — Idle USDC in the wallet earns yield (e.g. Blend/Defindex); no lockup, yield compounds in the background.

### Flow: NGO → Wallets

1. Donors/NGOs allocate USDC; funds sit in the org wallet or yield vault.
2. Staff use the **NGO Dashboard** to send USDC to beneficiary addresses.
3. Recipients receive funds in **Sozu Wallet**; they hold, spend, or offramp to local currency.
4. Repayments and behavior are tracked and feed trust score and future credit.

### Offramping: MoneyGram and Sozu Anchor

- **Today / near term:** **MoneyGram** — USDC → fiat (e.g. ARS cash-out) so recipients get local currency. First deployment targets Argentina.
- **Future:** **Sozu Anchor** — Proprietary offramping service: direct fiat on/off ramp where regulation allows, local liquidity, and full control of the rail. The long-term way to cash in and out of the Sozu stack.

---

## Overview (Summary)

- **NGO Dashboard (SozuPay):** Beneficiaries, disbursement schedules, single and batch USDC payouts, repayment confirmation, reports. First deployment: Year 1 NGO microcredit in Argentina (partner: MUJERES 2000) on **Stellar + Soroban + USDC**. DeFi yield on org balance.
- **Sozu Wallet:** Non-custodial USDC wallet; SDP-enabled; auto-compounding yield; ARS display; passkey/MPC.
- **Offramping:** MoneyGram (live path); Sozu Anchor (future proprietary offramp).
- **Repayment & tracking:** Tools for NGOs and recipients; foundation for behavioral credit and trust score.

**Technical flow:** Staff log in (Privy), pick an organization, use the dashboard. The org has a wallet (classic G or Soroban contract C) that holds USDC; payouts go to recipient Stellar addresses.

---

## The Flow

### 1. Donor / NGO Funding

**Donors and NGOs contribute funds** to micro-credit batches that support beneficiaries in target communities.

- Donors/NGOs send or allocate USDC to the program.
- Funds are pooled and managed via the **SozuPay dashboard** (beneficiary management, disbursement schedules).
- All donations and disbursements are transparent and trackable on-chain (Stellar).
- First partner: MUJERES 2000 (Argentina). Target: 500–2k recipients in Year 1.

### 2. Vault Allocation

**Funds sit in on-chain wallets/vaults** (org wallet; optional yield via Blend/Defindex).

- Org wallet holds USDC (classic Stellar account G or Soroban contract C).
- Optional: idle USDC can earn yield (e.g. Blend, Defindex); 90% to vault, 10% hot for liquidity.
- Real-time balance and transaction visibility via Stellar Horizon / dashboard.
- Payouts from the same wallet to recipient Stellar addresses.

### 3. Trust-Based Credit (Behavioral Layer)

**Repayment behavior and tracking** feed into trust and future credit.

- NGOs and recipients log repayments and mora in the dashboard.
- Credit state and repayment history form the basis for **behavioral credit** and trust score (pilot micro-loans via Blend in Year 1 roadmap).
- No traditional credit checks; trust is built through use and repayment.

### 4. Proof of Allocation

**Every transaction is visible** on Stellar.

- On-chain transaction records (Stellar Explorer / Stellar Expert links).
- Real-time balance and payout status in the dashboard.
- Audit trail for disbursements, repayments, and (where applicable) yield.
- Full transparency for donors, NGOs, and recipients.

---

## The Ecosystem

| Actor | Role |
|-------|------|
| **NGOs** | Distribution channel, trust validator, volume generator; use SozuPay dashboard for beneficiaries and payouts. |
| **Recipients / wallet users** | Receive USDC in Sozu Wallet; hold, spend, or offramp to fiat; repay and build credit behavior. |
| **Donors** | Fund micro-credit batches; track impact and allocation on-chain. |

**Sequence:** Distribution comes from NGOs and recipients first; merchants and rails (Year 2+) follow. See [Overview](/concepts/overview) for Year 1 / 2 / 4 strategy.

---

## Key References

- **Strategy and product:** [Overview](/concepts/overview)
- **Technical spec and architecture:** [SozuPay MVP docs — 00-overview, 01-architecture](https://github.com/blessedux/sozupay_mvp/tree/main/docs)
- **NGO dev plan:** [ngo-disbursement-wallet-dev-plan.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/ngo-disbursement-wallet-dev-plan.md)
- **Production disbursements:** [production-disbursements-tasks.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/production-disbursements-tasks.md)
