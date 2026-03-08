---
title: Overview
description: What Sozu is, strategy (Year 1/2/4), why Stellar & Latam, Phase 1 pillars, and roadmap
---

# Sozu — First-Principles Finance for the Next Billion

## What Sozu Is

Sozu is a financial operating system that enables organizations and individuals to send, receive, manage, and settle stablecoin payments through simple, programmable infrastructure.

At its core, Sozu provides two connected products:

• **Sozu Wallet** — a non-custodial stablecoin wallet for recipients, enabling secure self-custody, payments, savings, and cash access.  
• **SozuPay** — an operations dashboard for NGOs and organizations to distribute funds, track repayments, and manage financial programs in stablecoins.

Together, these tools transform stablecoins from a speculative asset into **usable financial infrastructure**.

Funds can be disbursed globally, managed transparently, and accessed locally through off-ramps and merchant payments — all powered by **USDC on Stellar and Soroban smart contracts**.

The result is a programmable financial layer that allows organizations to move money faster, recipients to control their funds directly, and new financial services to be built on top of open rails.

### The Problem

In much of Latin America, organizations distributing financial aid and microcredit rely on slow, expensive banking infrastructure. Recipients often lack reliable access to dollarized savings or modern financial tools, while stablecoins — despite their potential — remain difficult to distribute and use in everyday life.

Sozu solves this by turning stablecoins into a **complete financial workflow**, connecting organizations that distribute capital with the people and businesses that use it.

---

## Strategy: Public Good First, Then the Rails

We don't buy distribution. We **earn it** through a public-good engine that lowers CAC and builds trust before we ever ask a merchant to switch.

1. **Year 1 — Public good as distribution.** We start with **NGO microcredit disbursement** in Argentina: NGOs disburse USDC to beneficiaries via our dashboard; recipients hold and use USDC in **Sozu Wallet** (non-custodial, SDP-enabled). We add **offramping** (e.g. MoneyGram ARS cash-out) and **repayment and credit-tracking tools**. No anchor licensing, no card issuance—just a working financial OS for the first NGO partners and thousands of wallet users. **Outcome:** Real volume, behavioral data, and trust. Low CAC because the product _is_ the distribution channel.
2. **Year 2+ — Merchants and monetization.** That same wallet and rail become the basis for **merchant settlement**: customers pay in fiat, merchants receive USDC in Sozu, with yield and revenue-based credit. We aggregate fiat bridges and move toward anchor readiness.

3. ### Year 4 — Physical Payment Rail

By year four, Sozu expands beyond mobile wallets and web dashboards into a physical payment network powered by NFC.

Sozu introduces **HaLo Cards** — secure NFC-enabled payment cards connected directly to a user’s Sozu wallet.

These cards allow users to send and receive stablecoin payments simply by tapping the card on any NFC-enabled terminal or compatible device.

The interaction is simple:

• The user taps their **HaLo Card**  
• The terminal reads the NFC signature  
• The transaction is executed between Sozu wallets

No phone is required.  
No app needs to be opened.  
No internet connection on the user side is necessary.

Funds move directly between wallets while the receiving terminal completes settlement through the Sozu network.

This creates a new type of payment experience:

• A physical card that controls a self-custodial wallet  
• Offline-capable payments for users without smartphones or battery  
• Instant stablecoin settlement between participants

Merchants, NGOs, and individuals can all participate using standard NFC-enabled devices or Sozu-compatible terminals.

At this stage, Sozu is no longer only a financial application.

It becomes a **physical stablecoin payment rail**, enabling everyday transactions across Latin America through open infrastructure.

**Sequence matters.** Distribution comes from NGOs and recipients first; merchants and rails follow.

### Distributed Cash Access

As Sozu adoption grows, the same network that enables wallet payments and NFC transactions can also unlock a new form of decentralized cash access.

Merchants and trusted participants in the Sozu network will be able to provide **peer-to-peer fiat offramping**, allowing users to exchange USDC for local currency directly through the Sozu app or HaLo card. A user initiates the exchange in the app, transfers USDC to the liquidity provider, and receives cash in person.

By standardizing this interaction through Sozu’s interface and settlement rails on Stellar, cash liquidity can emerge organically across the network without relying solely on centralized exchanges or banking integrations.

Over time, this creates a distributed offramping layer where merchants, small businesses, and local operators act as liquidity providers — enabling stablecoins to move fluidly between the digital and physical economy across Latin America.

---

### Why Stellar

Sozu is built on Stellar because Stellar was designed for exactly the kind of financial system we are trying to build.

From the beginning, Stellar focused on fast settlement, low fees, and open financial access — not speculation or isolated smart contract ecosystems. Its architecture was created to move real money between real people across borders.

For Sozu, this matters.

Our product depends on reliable, low-cost transactions, simple account models, and native support for stable assets like USDC. Stellar allows us to move funds instantly, settle transactions transparently, and build programmable financial workflows through Soroban without sacrificing efficiency.

Just as important is the philosophy behind the network. Stellar has always prioritized **practical financial infrastructure**: payments, remittances, aid distribution, and global access to stable value. This aligns directly with Sozu’s mission to turn stablecoins into everyday financial tools rather than speculative instruments.

By building on Stellar, Sozu can demonstrate a complete financial lifecycle on a single open network: disbursement, self-custodial wallets, cash access, repayment, merchant payments, and eventually credit and yield systems — all powered by USDC and Soroban smart contracts.

In doing so, we help show what Stellar was designed for: a global financial network where digital dollars move as easily as information.

### Why Latin America

Latin America already lives closer to the stablecoin future than most of the world.

Across the region, people regularly navigate currency volatility, capital controls, and limited access to reliable dollar savings. As a result, millions have already turned to stablecoins as a practical financial tool rather than a speculative asset.

Argentina in particular has become one of the most active stablecoin markets in the world.

But while demand exists, the infrastructure to use stablecoins in everyday life is still fragmented. Receiving funds, storing value, paying locally, and converting to cash often requires navigating multiple apps, exchanges, and complicated workflows.

Sozu simplifies this experience.

With Sozu Wallet, a recipient can receive microcredit, hold USDC, view local currency value, and access cash liquidity from a single interface. The same infrastructure later enables merchants to accept stablecoin payments and settle instantly.

By starting with the users who already need these tools — NGO recipients and communities navigating unstable financial systems — Sozu builds adoption from the ground up.

Latin America is not just a market for this technology.

It is the place where stablecoin infrastructure can become part of everyday economic life.

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

- **Non-custodial USDC wallet** — Designed for recipients (and later merchants). SDP-enabled so any Stellar Disbursement Platform can send funds directly to a Sozu wallet.

- **Instant cash access** — Built-in offramping designed for speed and simplicity. Users can convert USDC to local cash through integrated partners (starting with MoneyGram) and later through Sozu’s own distributed merchant liquidity network.

- **Minimal UX for real-world payments** — ARS/local currency display, clear balances, and simple send/receive flows designed for people who may be using stablecoins for the first time.

- **Secure key recovery (SEP-30)** — Wallet recovery powered by Stellar’s SEP-30 standard ensures users can regain access even if they lose their device or password, eliminating the risk of permanently lost funds.

- **Passkeys + MPC security** — No seed phrases for everyday users. Passkey authentication and MPC signing provide strong self-custody while keeping the experience simple and familiar.

- **Auto-compounding yield** — Idle USDC can be allocated to integrated DeFi strategies (e.g., Blend/Defindex) where funds earn yield automatically without locking user liquidity.

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

| Pillar                      | What we ship                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **NGO Dashboard (SozuPay)** | Beneficiary management, disbursement schedules, single and batch USDC payouts, repayment confirmation, credit simulator, audit trail. |
| **Sozu Wallet**             | Non-custodial USDC wallet for recipients; SDP-enabled; auto-compounding DeFi yield; ARS display; passkey/MPC.                         |
| **Offramping**              | USDC → fiat (e.g. MoneyGram ARS cash-out); future Sozu Anchor for proprietary offramp.                                                |
| **Repayment & tracking**    | Tools for NGOs and recipients to log repayments, mora, and credit state; foundation for behavioral credit and trust score.            |

**First partner:** MUJERES 2000 (Argentina). **Target:** 500–2k recipients in Year 1, live offramp, full repayment visibility. No scope creep—this is the foundation everything else builds on.

---

## Philosophy in Practice

- **Non-custodial:** Users and NGOs keep control; we never custody principal.
- **Transparent:** On-chain USDC, Stellar Explorer links, clear audit.
- **Yield and credit in the stack:** Idle USDC can earn (Defindex/Blend); repayment behavior feeds trust and future credit—all on the same rail.
- **Merchant-centric later:** Every design choice (wallet, dashboard, APIs) is built so that when we onboard merchants, they get a **complete** stack: receive, hold, yield, offramp, and (later) pay and get paid—with Sozu earning only on value-add (e.g. yield share), not on rent.

---

## Development Roadmap

| Phase  | Focus                                    | Outcome                                                         |
| ------ | ---------------------------------------- | --------------------------------------------------------------- |
| Year 1 | Launch core wallet + NGO financial OS    | Real disbursements, recipients onboarded, first repayment cycle |
| Year 2 | Expand into merchant payments and credit | Merchant settlement + revenue-based credit                      |
| Year 4 | Extend into physical payments            | NFC payment rail + distributed cash liquidity                   |

---

## Year 1 — NGO Financial OS

**Goal:** Ship a complete workflow for NGO disbursement and microcredit.

**Months 0–3**

- Sozu Wallet MVP (non-custodial USDC wallet on Stellar)
- Passkeys + MPC signing
- SEP-30 recovery
- Soroban contracts for disbursement and yield routing

**Months 2–6**

- SozuPay NGO Dashboard
- Bulk beneficiary onboarding
- Scheduled disbursements
- Repayment tracking and transparency

**Months 4–8**

- Behavioral credit layer
- Trust Score based on repayment behavior
- Pilot micro-loans via Blend pools

**Months 6–12**

- First Argentine NGO partner
- 500–2,000 recipients onboarded
- MoneyGram offramp integrated
- First microcredit repayment cycle completed

**12-Month Milestone**

- Operational NGO disbursement OS
- Active Sozu Wallet users
- Cash offramping live
- On-chain repayment tracking
- Auto-compounding yield enabled

---

## Year 2 — Merchant Payments

**Goal:** Expand from aid distribution into local commerce.

- Sozu Business Wallet for merchants
- USDC payment acceptance and instant settlement
- Revenue analytics and cashflow dashboards
- Revenue-based credit using wallet payment history
- Fiat bridge aggregator for off-ramping

**Outcome:**  
Sozu evolves from a **distribution tool into a local payment network**.

---

## Year 4 — Physical Payment Rail

**Goal:** Extend the network into physical payments and distributed liquidity.

- Sozu Merchant Network (QR + NFC payments)
- HaLo NFC Cards linked to Sozu wallets
- Phone-free tap payments on NFC terminals
- Merchant liquidity providers enabling USDC ↔ cash exchanges

**Outcome:**  
Sozu becomes a **stablecoin-native payment rail across digital and physical commerce**.

| Phase      | Focus                                        | Outcome                                   |
| ---------- | -------------------------------------------- | ----------------------------------------- |
| **Year 1** | Build trust + data + wallet distribution     | NGO Financial OS (Foundation)             |
| **Year 2** | Monetize flow (merchant settlement + credit) | Merchant Acceptance + Anchor Path         |
| **Year 4** | Own the rail (anchor + hardware)             | Full Payment Rail + Proprietary NFC Cards |

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
