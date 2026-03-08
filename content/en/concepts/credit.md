---
title: Credit System
description: Behavioral credit, Trust Score from repayment, and Blend integration — repayment tracking, pilot micro-loans, and yield
---

# Credit System

Sozu’s credit approach is **behavioral**: repayment behavior and tracking feed a **Trust Score**, which forms the foundation for future credit (including pilot micro-loans via Blend). There are no traditional credit checks; trust is built through use and repayment on the same rail. Yield on idle USDC (e.g. via Blend/Defindex) supports sustainability and collateral for the system.

## Overview

- **Repayment & tracking** — NGOs and recipients log repayments, mora, and credit state in the SozuPay dashboard. Full audit trail and transparency.
- **Trust Score** — Derived from repayment behavior; determines borrowing caps and eligibility for pilot micro-loans.
- **Behavioral credit layer** — Months 4–8 in Year 1: Trust Score, borrowing caps, pilot micro-loans via Blend pools.
- **Yield in the stack** — Idle USDC (org and optionally user) can earn yield (Defindex/Blend); 90% to vault, 10% hot for liquidity. Yield supports sustainability and future credit.

For full roadmap and phase details, see [Overview](/concepts/overview).

---

## How It Fits the Roadmap

| Phase   | Credit focus |
|--------|----------------|
| **Year 1** | Repayment tracking, Trust Score, behavioral credit layer, pilot micro-loans via Blend. First repayment cycle with NGO partner (MUJERES 2000). |
| **Year 2+** | Revenue-based credit for merchants using wallet payment history; same stack, expanded to business users. |

---

## NGO Dashboard: Repayment & Credit Tools

- **Repayment confirmation** — Staff and recipients log repayments and mora.
- **Credit simulator** — TNA, cuotas, mora; renewal; indicators (optional Salesforce sync).
- **Audit trail** — All repayments and credit state changes traceable; Stellar Explorer links where applicable.
- **Trust Score** — Built from repayment behavior; feeds into borrowing caps and pilot micro-loans.

---

## Blend Protocol Integration

[Blend Protocol](https://docs.blend.capital/) on Stellar is used for:

- **Yield on idle USDC** — Org and user USDC can be routed to Blend/Defindex strategies for auto-compounding yield.
- **Pilot micro-loans** — Year 1 roadmap includes pilot micro-loans via Blend pools, gated by Trust Score and repayment history.
- **Overcollateralized lending** — Blend’s model provides institutional-grade yield and lending infrastructure; Sozu layers behavioral trust on top.

Yield and credit share the same rail: repayment behavior improves Trust Score, which unlocks access to pilot credit; idle funds earn yield to support sustainability and future credit capacity.

---

## Technical References

- **Architecture:** [Architecture](/concepts/architecture) — NGO smart accounts, yield router, Defindex/Blend.
- **Planning:** [SozuPay MVP docs — planning](https://github.com/blessedux/sozupay_mvp/tree/main/docs/03-planning) — NGO disbursement dev plan, production disbursements.
- **Strategy and roadmap:** [Overview](/concepts/overview) — Year 1/2/4, Phase 1 pillars, development roadmap.
