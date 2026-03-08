# Sozu — Documentation

**Sozu** is financial infrastructure built on first principles: self-custody, transparency, and programmable money. This documentation covers the product, strategy, and technical design for the Sozu stack (NGO disbursement, Sozu Wallet, merchant settlement, and rails).

---

## What the docs cover

The documentation is ali gned with the [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs). It is grouped by purpose:

| Section | Contents |
|--------|----------|
| **Overview** | What Sozu is, strategy (Year 1 / Year 2 / Year 4), why Stellar & Latam, Phase 1 pillars, technical summary, roadmap. |
| **How it works** | Donor → vault → trust-based credit → proof of allocation; NGO dashboard (SozuPay), wallet, offramp, repayment. |
| **Architecture** | System design: microcredit disbursement E2E, self-custodial auth, org wallet, smart accounts (G vs C), login flow. |
| **Contracts** | Soroban: disbursement wallet contract, yield router spec, testnet contract addresses (USDC, Blend, factory). |
| **Planning** | 30-day sprint, NGO disbursement dev plan (MUJERES 2000), production-disbursements tasks, todo. |
| **Integrations** | E-commerce widget/API, E2E payout test (recipients persistence, multi-recipient, Classic vs Soroban). |
| **Requirements** | Non-functional requirements (performance, availability, compliance), partner requirements (e.g. MUJERES 2000). |
| **Operations** | Runbooks: local dev, env vars, health check, plug-in points. |
| **Reference** | Schema (Supabase users, organizations, recipients), phase spec (Privy + wallet + KYC), codebase notes. |

Product-focused concept docs (Credit System, Sozu Wallet, For Entrepreneurs) sit alongside the above and tie into the same stack.

---

## Strategy (summary)

- **Year 1** — Public good as distribution: NGO microcredit disbursement in Argentina (partner: MUJERES 2000) on **Stellar + Soroban + USDC**. SozuPay dashboard (beneficiary management, batch USDC payouts, repayment tracking), Sozu Wallet (non-custodial, SDP-enabled), offramping (e.g. MoneyGram ARS), repayment & credit tracking.
- **Year 2+** — Merchant settlement: same wallet and rail for merchant settlement; fiat bridge aggregator; anchor preparation.
- **Year 4** — Own the rail: proprietary NFC, programmable debit, direct fiat on/off ramp where regulation allows.

*Sequence matters:* distribution comes from NGOs and recipients first; merchants and rails follow.

---

## Suggested reading order

1. **Overview** — What Sozu is, strategy (Year 1/2/4), why Stellar/Latam, Phase 1 pillars, roadmap.
2. **How it works** — Flow from donor to vault to credit to proof of allocation; NGO dashboard, wallet, offramp.
3. **Technical spec** (in Overview or linked from sozupay_mvp) — Stack, user flows, dashboard capabilities.
4. **Planning** — Current sprint, NGO dev plan, production-disbursements tasks.
5. **Operations** — Local run, env vars, health check.

For architecture, contracts, integrations, or requirements, use the sections above or the [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs) directly.

---

## Key references (source repo)

- **SozuPay MVP docs (canonical):** [blessedux/sozupay_mvp/docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs)
- **NGO dev plan and milestones:** [ngo-disbursement-wallet-dev-plan.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/ngo-disbursement-wallet-dev-plan.md)
- **Batch disbursement and persistence:** [production-disbursements-tasks.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/production-disbursements-tasks.md)
- **E2E architecture:** [architecture-microcredit-disbursement.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/01-architecture/architecture-microcredit-disbursement.md)

---

## About this repo (docs site)

This repository is the **documentation site** for Sozu (e.g. [docs.sozu.capital](https://docs.sozu.capital)): a Next.js app that renders the concepts above with multi-language support (EN, ES, FR), search, and a simple reading experience.

| What | Tech |
|------|------|
| **Framework** | Next.js 15 (App Router), TypeScript |
| **Content** | Markdown under `content/{locale}/concepts/` |
| **i18n** | next-intl (en, es, fr) |
| **UI** | Tailwind CSS, Radix UI, Framer Motion |

**Run locally:** `pnpm install` → `pnpm dev` → open [http://localhost:3000](http://localhost:3000).

**Related:** [SozuPay MVP](https://github.com/blessedux/sozupay_mvp) (NGO dashboard) · [Sozu Credit](https://github.com/blessedux/SozuCredit) · [Sozu Capital](https://sozu.capital)
