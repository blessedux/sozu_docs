---
title: How It Works
description: From donation to empowerment - Learn how Sozu Capital's decentralized credit system works
---

# How It Works

Sozu Capital's decentralized credit system transforms donations into empowerment through a transparent, trust-based financial ecosystem built on blockchain technology.

## Overview

Sozu Credit enables accessible credit through community vouching, education, and DeFi integration. Donors fund micro-credit batches that flow into on-chain Sozu Vaults generating DeFi yield (10-20% APY). Yield supports trust-based credit lines for verified entrepreneurs who complete education requirements. Every transaction is visible on-chain through transparent allocation tracking.

## The Flow

### 1. Donor Funding

**Donors contribute funds** to micro-credit batches that support entrepreneurs in underserved communities.

**How It Works:**

- Donors send USDC to Sozu Capital
- Funds are pooled into micro-credit batches
- Each batch targets specific communities or regions
- All donations are transparent and trackable on-chain
- Real-time impact tracking through blockchain records

### 2. Vault Allocation

**Funds flow into on-chain Sozu Vaults** that automatically generate DeFi yield through Blend Protocol and Stellar AMM integration.

**Yield Generation:**

- Automatic deposits to yield vaults (10-20% APY)
- 90% of funds automatically deposited to Blend yield vaults
- 10% maintained in hot wallet for immediate credit access
- Real-time yield tracking and balance aggregation
- Automatic rebalancing for optimal returns
- Easy withdrawals anytime

**Supported Protocols:**

- **Blend Protocol** — Stellar-based lending
- **Stellar AMM** — Automated market maker pools
- Future integrations with additional DeFi protocols

### 3. Trust-Based Credit

**Yield supports trust-based credit lines** for verified entrepreneurs who complete education requirements and build trust scores through community vouching.

**Credit Eligibility:**

- Complete financial literacy courses
- Build trust score through community vouching
- Receive credit based on trust score and vault position
- Transparent terms with no traditional credit checks
- No KYC required for vouching-based credit

**Trust Score System:**

- Start with 5 trust points
- Earn points through daily bonuses
- Invite new users to grow your network
- Receive vouches from community members
- Higher trust scores = better credit terms

### 4. Proof of Allocation

**Every transaction visible** through on-chain records, ensuring complete transparency and accountability.

**Transparency Features:**

- On-chain transaction records on Stellar blockchain
- Real-time balance tracking via Stellar Horizon API
- Yield distribution visibility
- Credit allocation transparency
- Trust score changes tracked on-chain
- Complete audit trail for all operations

## The Ecosystem

### Donors

**Role:** Fund micro-credit batches and support financial inclusion

**Benefits:**

- Transparent impact tracking on-chain
- Sustainable yield generation (10-20% APY)
- Community empowerment
- Tax-deductible donations (where applicable)
- Real-time visibility into fund allocation

### Entrepreneurs

**Role:** Receive credit and build businesses

**Benefits:**

- Access credit without traditional banks
- Build trust score over time through community vouching
- No KYC required for vouching-based credit
- Self-custodial financial control
- Complete education to unlock credit eligibility
- Transparent terms and rates

### Community

**Role:** Vouch for entrepreneurs and build trust network

**Benefits:**

- Strengthen local economy
- Build reputation system through vouching
- Support financial inclusion
- Transparent governance
- Earn trust points for active participation

## Technical Architecture

### System Architecture

```
┌─────────────────────────────────────┐
│         Frontend (Next.js PWA)      │
│  ┌──────────────────────────────┐  │
│  │  Passkeys Auth (WebAuthn)    │  │
│  │  Stellar Wallet UI           │  │
│  │  DeFi Vault Dashboard        │  │
│  │  Trust Points & Vouching     │  │
│  │  Education Portal            │  │
│  └──────────────────────────────┘  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      API Layer (Next.js Edge)        │
│  • Wallet Management                │
│  • Vault Operations                 │
│  • Trust Points API                 │
│  • Education Progress               │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Stellar Blockchain              │
│  • Smart Wallets                     │
│  • USDC Asset Management            │
│  • DeFi Vault Integration           │
│  • Transaction Settlement           │
└──────────────────────────────────────┘
```

### Tech Stack

**Frontend:**

- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS
- WebAuthn/Passkeys for authentication
- PWA support (offline-first)

**Backend:**

- Next.js API Routes (Edge Runtime)
- Supabase (PostgreSQL + Auth)
- Stellar SDK for blockchain operations
- DeFi Protocol SDKs (Blend/Stellar AMM)

**Blockchain:**

- Stellar Network (fast, low-cost transactions)
- Soroban Smart Contracts (future)
- USDC on Stellar
- Stellar Horizon API for real-time data

### On-Chain Infrastructure

**Stellar Blockchain:**

- Fast, low-cost transactions
- Global interoperability
- Transparent ledger
- Anchor network integration
- Real-time balance tracking

**DeFi Protocols:**

- **Blend Protocol** — Institutional-grade yield generation
- **Stellar AMM** — Automated market making
- Overcollateralized lending
- Impermanent loss protection

### Smart Contracts & Vaults

**Sozu Vaults:**

- Automated deposit allocation
- Yield generation and distribution (10-20% APY)
- Credit line management
- Trust score integration
- Real-time balance aggregation

**Credit System:**

- Trust-based credit scoring
- Community vouching mechanism
- Education verification
- Repayment tracking
- Transparent terms and rates

## User Journey

### New User Journey

1. **Sign Up** → Tap fingerprint/face ID (Passkeys) → Wallet created instantly via Turnkey SDK
2. **Get Invite Link** → Share with others → Receive trust points
3. **Receive USDC** → Funds auto-deposit to yield vault → Earn 10-20% APY
4. **Complete Education** → Learn DeFi basics → Unlock credit eligibility
5. **Get Vouched** → Build trust score → Access credit pools
6. **Request Credit** → Community vouching determines terms → Receive funds

### Existing User Flow

- View balance (wallet + vault combined)
- Track yield earnings in real-time
- Vouch for other users
- Send/receive USDC instantly
- Manage credit and repayments
- Complete additional education modules

### For Donors

1. **Donate USDC** to Sozu Capital
2. **Track Impact** through transparent on-chain allocation
3. **See Yield** generated from vault positions (10-20% APY)
4. **Monitor Credit** distributed to entrepreneurs
5. **View Reports** on impact metrics and outcomes

### For Entrepreneurs

1. **Create Wallet** with passkey authentication (biometric)
2. **Complete Education** courses to unlock credit
3. **Build Trust Score** through community vouching
4. **Receive Credit** based on trust and vault position
5. **Repay Credit** and build credit history
6. **Track Progress** through transparent dashboard

## Security & Privacy

### Authentication

- **Passkeys Only** — No passwords stored, biometric authentication only
- **WebAuthn Standard** — Industry-standard secure authentication
- **Turnkey SDK** — Secure key management for wallet creation

### Data Protection

- **Encrypted Keys** — Stellar wallet keys encrypted at rest
- **Self-Custody** — Users control their funds
- **Zero-Knowledge UX** — Minimal data collection, maximum privacy
- **Community-Based** — No KYC required for vouching-based credit

### Blockchain Security

- **On-Chain Transparency** — All transactions visible on Stellar blockchain
- **Immutable Records** — Complete audit trail
- **Smart Contract Security** — Audited protocols (Blend, Stellar AMM)

## Education System

### Course Modules

Complete courses to unlock credit opportunities:

- ✅ **Introduction to Micro-Credit** — Basics of decentralized lending
- ✅ **Financial Responsibility** — Loan repayment and planning
- ✅ **Business Planning** — Create solid business plans
- ✅ **Community & Trust** — Understanding the vouching system
- ✅ **Managing Your Funds** — Best practices for DeFi funds

**Progress = Credit Eligibility** — Complete all courses to unlock full credit limits.

### Education Benefits

- Unlock credit eligibility
- Better credit terms with completion
- Build financial literacy
- Earn certifications
- Access advanced features

## Community Vouching

### How It Works

1. **Earn Trust Points** — Start with 5 points, earn more through:

   - Daily bonuses
   - Inviting new users
   - Receiving vouches from others

2. **Vouch for Others** — Give trust points to users you believe in:

   - Each vouch increases their trust score
   - Your vouches build your reputation
   - Transparent trust graph visible to all

3. **Unlock Credit** — Higher trust scores = better credit terms:
   - Community vouching replaces traditional credit checks
   - Transparent trust graph
   - No KYC required

### Invite System

- **Share Your Invite Link** — Get unique URL to share
- **New Users Join** — They can vouch for you or you can vouch for them
- **Build Your Network** — Stronger network = more credit opportunities

### Trust Score Benefits

- Access to credit pools
- Better interest rates
- Higher credit limits
- Priority support
- Governance participation

## DeFi Integration

### Yield Vaults (10-20% APY)

**Automatic Deposits:**

- Incoming USDC automatically goes to vault
- No manual intervention required
- Seamless user experience

**High Yield:**

- Earn 10-20% APY on idle funds
- Real-time yield tracking
- Daily earnings updates

**Easy Withdrawals:**

- Access your funds anytime
- Fast settlement on Stellar
- Low transaction fees

**Real-Time Tracking:**

- See your earnings grow daily
- Combined wallet + vault balance
- Transparent yield distribution

### Supported Protocols

- **Blend Protocol** — Stellar-based lending
- **Stellar AMM** — Automated market maker pools
- **Future Integrations** — Additional protocols coming soon

## Transparency & Accountability

### On-Chain Transparency

**Complete Transparency:**

- All transactions on Stellar blockchain
- Real-time balance tracking via Stellar Horizon API
- Yield distribution records
- Credit allocation history
- Trust score changes tracked

### Audit Trail

**Every Action Recorded:**

- Donor contributions
- Vault deposits and withdrawals
- Yield generation and distribution
- Credit issuance and repayments
- Trust score changes
- Education progress
- Vouching activities

### Proof of Allocation

- **TRUFA Proof of Allocation** — Complete transaction visibility
- **Real-Time Tracking** — Live updates on all operations
- **Public Ledger** — All records on Stellar blockchain
- **Verifiable Impact** — Transparent metrics and outcomes

## Impact Metrics

**Trackable Outcomes:**

- Number of entrepreneurs funded
- Total credit distributed
- Repayment rates
- Trust score improvements
- Community growth
- Education completion rates
- Yield generated for sustainability
- Geographic distribution of impact

## Roadmap

### ✅ Phase 1: Foundation (Completed)

- Passkeys authentication
- Stellar wallet creation
- Trust points & vouching
- Basic UI/UX

### 🚧 Phase 2: DeFi Integration (In Progress)

- USDC asset setup
- Yield vault integration
- Auto-deposit logic
- Balance aggregation

### 📅 Phase 3: Education Portal

- Course modules
- Progress tracking
- Certification system
- Credit unlocking

### 📅 Phase 4: Credit Pools

- Decentralized credit contracts
- Disbursement system
- Repayment tracking
- Trust score integration

### 📅 Phase 5: Advanced Features

- Multi-asset support
- Payment links
- Receipt OCR
- AI financial assistant

---

**Ready to be part of the solution?** Join Sozu Capital and help transform donations into empowerment through blockchain technology, community trust, and financial inclusion.
