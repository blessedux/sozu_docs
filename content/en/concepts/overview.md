---
title: Overview
description: What Sozu is, strategy (Year 1/2/4), why Stellar & Latam, Phase 1 pillars, and roadmap
---

# Sozu: First-Principles Finance for the Next Billion

## What Sozu Is

Sozu is a **financial infrastructure company** built on cryptopunk first principles: self-custody, transparency, and programmable money—applied for **maximum convenience and economic benefit** for users and merchants. We are not a wallet vendor or a payment method; we are the stack that turns stablecoins and open rails into distribution, yield, and settlement. Our thesis: align with real demand (public good first), earn trust at low CAC, then own the rail. **Stellar + Soroban + USDC** is our base layer; the first deployment is NGO microcredit and offramping, the end state is merchant settlement and proprietary rails across Latam.

---

## Strategy: Public Good First, Then the Rails

We don't buy distribution. We **earn it** through a public-good engine that lowers CAC and builds trust before we ever ask a merchant to switch.

1. **Year 1 — Public good as distribution.** We start with **NGO microcredit disbursement** in Argentina: NGOs disburse USDC to beneficiaries via our dashboard; recipients hold and use USDC in **Sozu Wallet** (non-custodial, SDP-enabled). We add **offramping** (e.g. MoneyGram ARS cash-out) and **repayment and credit-tracking tools**. No anchor licensing, no card issuance—just a working financial OS for the first NGO partners and thousands of wallet users. **Outcome:** Real volume, behavioral data, and trust. Low CAC because the product _is_ the distribution channel.
2. **Year 2+ — Merchants and monetization.** That same wallet and rail become the basis for **merchant settlement**: customers pay in fiat, merchants receive USDC in Sozu, with yield and revenue-based credit. We aggregate fiat bridges and move toward anchor readiness.
3. **Year 4 — Owning the rail.** We deepen the stack: proprietary NFC, programmable debit, direct fiat on/off ramp where regulation allows. **We own the rails** because we started where the need and the trust already were—public good first.

**Sequence matters.** Distribution comes from NGOs and recipients first; merchants and rails follow.

---

## Why Stellar, Why Latam

- **For Stellar:** Sozu demonstrates a full lifecycle on one chain—disbursement, wallet, offramp, repayment, and (later) yield and credit—all on Stellar + Soroban. We drive **real usage**, **USDC velocity**, and **SDP adoption** (Sozu Wallet as provider). We show that Stellar can power both public-good flows and merchant-grade settlement in a single ecosystem.
- **For Latam:** Argentina and the region need dollar-denominated savings, low-friction payouts, and a path from cash/cards to stablecoins without complexity. Sozu Wallet gives recipients a **single place** to receive microcredit, hold USDC, see ARS, and offramp to cash. That same stack later serves merchants who want instant settlement and yield. **Mass use in Latam** means starting with the users who already need the rails—NGO beneficiaries—and expanding from there.

---

## SozuPay Architecture

SozuPay is the **dashboard layer** for managing stablecoin payments with DeFi baked in. It has two faces:

### NGO Dashboard

- **Beneficiary management** — Import and manage recipients; program-based fund allocation.
- **Disbursement schedules** — Single and batch USDC payouts to recipient Stellar addresses.
- **Repayment & tracking** — Log repayments, mora, and credit state; audit trail and reports.
- **DeFi in the stack** — Org wallet can hold USDC in yield (e.g. Blend/Defindex); 90% to vault, 10% hot for liquidity. Yield supports sustainability and future credit.

Staff log in (e.g. Privy), pick an organization, and run disbursements. The org has an on-chain wallet (classic Stellar or Soroban contract) that holds USDC; payouts go straight to recipient wallets.

### Business Dashboard

- **Merchant settlement** — Receive payments in USDC; one balance, one transaction list.
- **Revenue tracking** — See inflows, categorize, export for accounting.
- **Payouts** — Pay providers, employees, or vendors from the same USDC wallet.
- **DeFi yield** — Idle balance earns yield in a high-yield liquid vault; Sozu earns a share of yield, not rent on transactions.

Same stack as NGO: programmable dollar payments, transparency on-chain, and yield by default.

### Sozu Wallet (Recipient Side)

- **Non-custodial USDC wallet** — For recipients (and later merchants). SDP-enabled so any SDP sender can disburse to Sozu.
- **Auto-compounding yield** — Idle USDC in the wallet can earn DeFi yield (e.g. Blend/Defindex); auto-compounding, no lockup.
- **Passkey/MPC** — No seed phrases for everyday users; ARS display; one place to receive, hold, and move USDC.

### Flow: NGO → Wallets

1. Donors/NGOs allocate USDC to a program; funds sit in the org wallet (or yield vault).
2. Staff use the **NGO Dashboard** to schedule and execute payouts to beneficiary Stellar addresses.
3. Recipients receive USDC in **Sozu Wallet**; they hold, spend, or offramp to local currency.
4. Repayments and behavior are tracked in the dashboard and feed into trust score and future credit.

### Offramping: Today and Tomorrow

- **Today / near term:** **MoneyGram** (e.g. USDC → ARS cash-out) so recipients can get local currency when they need it. First deployment targets Argentina.
- **Future:** **Sozu Anchor** — Proprietary offramping service: direct fiat on/off ramp where regulation allows, local liquidity (e.g. ARS), and full control of the rail. Sozu Anchor is the long-term destination for cashing in and out of the Sozu stack.

---

## Phase 1: What We're Building Now

We are focused on **one NGO**, **one country**, and **one stack**:

| Pillar | What we ship |
|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| **NGO Dashboard (SozuPay)** | Beneficiary management, disbursement schedules, single and batch USDC payouts, repayment confirmation, credit simulator, audit trail. |
| **Sozu Wallet** | Non-custodial USDC wallet for recipients; SDP-enabled; auto-compounding DeFi yield; ARS display; passkey/MPC. |
| **Offramping** | USDC → fiat (e.g. MoneyGram ARS cash-out); future Sozu Anchor for proprietary offramp. |
| **Repayment & tracking** | Tools for NGOs and recipients to log repayments, mora, and credit state; foundation for behavioral credit and trust score. |

**First partner:** MUJERES 2000 (Argentina). **Target:** 500–2k recipients in Year 1, live offramp, full repayment visibility. No scope creep—this is the foundation everything else builds on.

---

## Philosophy in Practice

- **Non-custodial:** Users and NGOs keep control; we never custody principal.
- **Transparent:** On-chain USDC, Stellar Explorer links, clear audit.
- **Yield and credit in the stack:** Idle USDC can earn (Defindex/Blend); repayment behavior feeds trust and future credit—all on the same rail.
- **Merchant-centric later:** Every design choice (wallet, dashboard, APIs) is built so that when we onboard merchants, they get a **complete** stack: receive, hold, yield, offramp, and (later) pay and get paid—with Sozu earning only on value-add (e.g. yield share), not on rent.

---

## Development Roadmap (Year 1 / 2 / 4)

| Phase | Focus | Outcome |
|-------|--------|---------|
| **Year 1** | Build trust + data + wallet distribution | NGO Financial OS (Foundation) |
| **Year 2** | Monetize flow (merchant settlement + credit) | Merchant Acceptance + Anchor Path |
| **Year 4** | Own the rail (anchor + hardware) | Full Payment Rail + Proprietary NFC Cards |

### Year 1 — NGO Disbursement Financial OS

- **Months 0–3:** Core infrastructure (Sozu Wallet, USDC on Stellar, Soroban contracts, Defindex/Blend yield).
- **Months 2–6:** NGO Admin Dashboard (SozuPay Phase 1 — bulk beneficiaries, disbursement schedules, repayment tracking, transparency).
- **Months 4–8:** Behavioral Credit Layer (Trust Score, borrowing caps, pilot micro-loans via Blend).
- **Months 6–12:** Onboarding (first Argentine NGO, 500–2k recipients, MoneyGram offramp live).

**Key milestone at 12 months:** Fully operational NGO disbursement OS; recipients using Sozu wallet; repayment tracking; yield auto-compounding; first behavioral credit cycle.

### Year 2 — Merchant Acceptance + Anchor Path

- Sozu Business Wallet, revenue analytics, auto yield, revenue-based credit.
- Fiat Bridge Aggregator; Sozu as routing layer (T+1/T+2).
- Anchor preparation (compliance, KYC, fiat liquidity relationships).

### Year 4 — Full Payment Rail + Proprietary NFC

- Sozu Merchant Network (QR + NFC, stablecoin-native settlement).
- Halo Burner Smart Contract Cards (NFC, session-based spending, programmable debit).
- Anchor status (direct fiat on/off ramp, local ARS liquidity).

---

## Technical Summary (SozuPay Dashboard)

- **Chain & settlement:** Stellar (USDC, fast finality, low cost).
- **Custody:** Non-custodial; merchant/org holds keys.
- **Dashboard:** Web app (React/Next.js); balance, transactions, vault/yield, payment walls, payouts, bank accounts.
- **Auth:** Fast onboarding (magic link / email OTP); optional 2FA for sensitive actions.
- **Yield:** Idle balance in high-yield liquid vault; Sozu earns 10% of yield generated.
- **Audit:** Stellar Expert / block explorer links for every relevant transaction.

Full technical spec, architecture, contracts, and runbooks live in the [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs).

---

## One-Line Summary

**Sozu starts with NGO microcredit and offramping on Stellar so we earn distribution and trust at low CAC; then we onboard merchants and own the rails—first-principles finance for Latam and for the ecosystem.**
