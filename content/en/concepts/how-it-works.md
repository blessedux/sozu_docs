---
title: How It Works
description: From donation to empowerment - Learn how Sozu Capital's decentralized credit system works
---

# How It Works

Sozu Capital's decentralized credit system transforms donations into empowerment through a transparent, trust-based financial ecosystem built on blockchain technology.

## Overview

Sozu Credit enables accessible credit through community vouching, education, and DeFi integration. The system uses a trust-based credit model where entrepreneurs build trust scores through community vouching, complete financial education, and access credit without traditional banks. Funds flow into on-chain Sozu Vaults that automatically generate DeFi yield through DeFindex strategies. Every transaction is tracked on-chain with complete transparency and audit trails.

## The Flow

### 1. Donor Funding

**Donors contribute funds** to micro-credit batches that support entrepreneurs in underserved communities.

**How It Works:**

- Donors send USDC to Sozu Capital
- Funds are pooled into micro-credit batches
- Each batch targets specific communities or regions
- All donations are transparent and trackable on-chain
- Real-time impact tracking through blockchain records

### 2. Vault Allocation & DeFindex Integration

**Funds flow into on-chain Sozu Vaults** that automatically generate DeFi yield through DeFindex strategies on the Stellar network.

**Yield Generation:**

- Automatic deposits to DeFindex yield strategies
- Position tracking for user shares in each strategy
- Complete transaction history (deposits, withdrawals, harvests)
- Real-time balance aggregation (wallet + vault combined)
- Automatic position updates on every transaction
- Easy withdrawals anytime with fast settlement

**Position Tracking:**

- User shares tracked per DeFindex strategy
- Total deposited/withdrawn amounts recorded
- Transaction status tracking (pending, confirmed, failed)
- Complete audit trail for all vault operations
- Historical position data for analytics

**Supported Protocols:**

- **DeFindex** — Stellar-based yield strategies
- **Blend Protocol** — Stellar-based lending (future)
- **Stellar AMM** — Automated market maker pools (future)

### 3. Trust Points & Vouching System

**Trust-based credit system** where entrepreneurs build trust scores through community vouching, MaxFlow integration, and daily credits.

**Trust Points System:**

- **Initial Allocation**: New users start with 5 trust points (default)
- **MaxFlow Integration**: Users with linked EVM addresses can receive 5-15 additional points based on their MaxFlow ego score
  - Trust score 0-0.5: 5 points
  - Trust score 0.5-1.0: 7 points
  - Trust score 1.0-1.5: 10 points
  - Trust score 1.5+: 15 points
- **Daily Credits**: Users can claim 5 trust points daily
- **Vouching**: Users can transfer trust points to others (minimum 1 point required)
- **Referral System**: Users earn trust points for inviting new users

**Vouching Mechanism:**

- Users can vouch for others by transferring trust points
- Each vouch is recorded in the `user_vouches` table
- Automatic notifications when vouches are received
- Vouch statistics tracked (given/received counts)
- Self-vouching prevented

### 4. Credit Eligibility & Trustworthy Vouches

**Credit eligibility** is based on receiving trustworthy vouches from community members, not from referrals.

**Credit Eligibility Requirements:**

- **5+ Trustworthy Vouches**: Must receive 5 trust points from trustworthy users (not from referrals)
- **Trustworthiness Rules**:
  - Account must be at least 1 month old
  - User must have wallet balance > 0
  - If user has taken credit, must have at least one paid loan
- **Auto-Check**: Trustworthiness is automatically checked when vouches are received
- **Manual Review**: Reviewers can override auto-checks if needed

**Credit Request System:**

- **Minimum Requirements**:
  - Trust points: ≥ 10 points
  - Trustworthy vouches: ≥ 5 vouches
  - MaxFlow ego score: ≥ 1.0 (if EVM address linked)
  - Education: At least "Introduction to Micro-Credit" course completed
- **Credit Limits** (calculated with multipliers):
  - Base limit: $100
  - Trust points: +$10 per point above 10
  - Vouches: +$20 per vouch above 3
  - MaxFlow ego: +$50 per point above 1.0
  - Education: +$50 per completed course
- **Interest Rates**:
  - Base rate: 5% APR
  - Trust score discount: -0.1% per trust point above 10
  - Vouches discount: -0.2% per vouch above 3
  - Range: 2% - 10% APR

### 5. Proof of Allocation & Transparency

**Every transaction visible** through on-chain records and database tracking, ensuring complete transparency and accountability.

**Transparency Features:**

- **On-Chain Records**: All transactions on Stellar blockchain
- **Database Tracking**: Complete transaction history in database
  - Position tracking for DeFindex strategies
  - Transaction records (deposits, withdrawals, harvests)
  - Vouch history and trustworthiness checks
  - Credit requests and loan records
- **Real-Time Tracking**:
  - Balance aggregation via Stellar Horizon API
  - Position updates in real-time
  - Transaction status monitoring
- **Audit Trail**:
  - All vault operations tracked
  - Trust point transfers recorded
  - Credit eligibility checks logged
  - Complete user activity history

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

- **DeFindex** — Stellar-based yield strategies (active)
- **Blend Protocol** — Stellar-based lending (future)
- **Stellar AMM** — Automated market making (future)

### Database Schema

**Core Tables:**

- **`user_vouches`** — Tracks user-to-user vouches with trustworthiness checks
- **`notifications`** — System notifications (vouch_received, daily_credit_available, credit_eligible)
- **`defindex_positions`** — User positions (shares) in DeFindex strategies
- **`defindex_transactions`** — All vault transactions (deposits, withdrawals, harvests)
- **`credit_requests`** — Credit request applications
- **`loans`** — Active loans and repayment tracking
- **`loan_payments`** — Loan payment history
- **`credit_request_vouches`** — Vouches for credit requests

**Database Functions:**

- `is_user_trustworthy()` — Checks if user meets trustworthiness criteria
- `get_trustworthy_vouches_count()` — Returns count of trustworthy vouches
- `can_apply_for_credit()` — Checks credit eligibility
- `update_position_on_deposit()` — Updates position after deposit
- `update_position_on_withdrawal()` — Updates position after withdrawal

### API Endpoints

**Trust Points & Vouching:**

- `POST /api/wallet/vouch` — Transfer trust points (vouching)
- `GET /api/wallet/vouches/received` — Get vouches received
- `GET /api/wallet/vouches/pending-review` — Get vouches pending review
- `POST /api/wallet/vouches/review` — Review and mark vouches as trustworthy
- `GET /api/wallet/credit-eligibility` — Check credit eligibility
- `GET /api/wallet/trust-points` — Get trust points with statistics
- `POST /api/wallet/trust-points/initialize` — Initialize trust points from MaxFlow

**DeFindex Vault:**

- `POST /api/wallet/defindex/deposit` — Deposit to DeFindex strategy
- `GET /api/wallet/defindex/position` — Get user position
- `GET /api/wallet/defindex/transactions` — Get transaction history

**Credit System:**

- `POST /api/credit/request` — Create credit request
- `GET /api/credit/requests` — Get user's credit requests
- `POST /api/credit/requests/[id]/vouch` — Vouch for credit request
- `POST /api/credit/loans/[id]/pay` — Make loan payment

## User Journey

### New User Journey

1. **Sign Up** → Tap fingerprint/face ID (Passkeys) → Wallet created instantly via Turnkey SDK
2. **Initial Trust Points** → Receive 5 trust points (default) or 5-15 points if linking EVM address with MaxFlow ego score
3. **Get Invite Link** → Share with others → Earn trust points for referrals
4. **Claim Daily Credits** → Claim 5 trust points daily
5. **Receive USDC** → Funds auto-deposit to DeFindex strategies → Position tracked automatically
6. **Get Vouched** → Receive trust points from community members → Trustworthiness auto-checked
7. **Complete Education** → Learn DeFi basics → Unlock credit eligibility
8. **Check Eligibility** → System verifies 5+ trustworthy vouches
9. **Request Credit** → Submit credit request → Community can vouch for your request
10. **Receive Credit** → Approved request → Funds disbursed to Stellar wallet

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
2. **Initialize Trust Points** — Receive 5 points or 5-15 points if linking EVM address
3. **Build Trust Score** — Claim daily credits, get vouched, invite users
4. **Get Trustworthy Vouches** — Receive 5+ vouches from trustworthy users
5. **Complete Education** — At least "Introduction to Micro-Credit" course
6. **Check Eligibility** — System verifies 5+ trustworthy vouches
7. **Request Credit** — Submit credit request with amount and purpose
8. **Community Review** — Other users can vouch for your request
9. **Receive Credit** — Approved request → Funds disbursed to wallet
10. **Repay Credit** — Track payments and build credit history
11. **Track Progress** — View positions, transactions, and trust score

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

## Community Vouching System

### How It Works

1. **Earn Trust Points** — Multiple ways to build your trust score:

   - **Initial Allocation**: 5 points (default) or 5-15 points based on MaxFlow ego score
   - **Daily Credits**: Claim 5 points daily
   - **Referrals**: Earn points for inviting new users
   - **Vouches**: Receive trust points from community members

2. **Vouch for Others** — Transfer trust points to users you believe in:

   - Minimum 1 trust point required to vouch
   - Points transfer from sender to receiver
   - Each vouch recorded in database
   - Automatic notifications sent to receiver
   - Self-vouching prevented
   - Vouch statistics tracked (given/received)

3. **Trustworthiness Check** — Automatic verification when vouches are received:

   - **Account Age**: Voucher must be at least 1 month old
   - **Wallet Balance**: Voucher must have balance > 0
   - **Credit History**: If voucher has taken credit, must have paid back at least one loan
   - **Auto-Check**: Runs automatically via database trigger
   - **Manual Review**: Reviewers can override auto-checks

4. **Unlock Credit** — Credit eligibility based on trustworthy vouches:

   - Need 5+ trustworthy vouches (not from referrals)
   - Only vouches from trustworthy users count
   - Transparent trustworthiness verification
   - No KYC required for vouching-based credit

### Credit Request Flow

1. **Check Eligibility** → System verifies 5+ trustworthy vouches
2. **Submit Request** → Fill out credit request form with amount and purpose
3. **Community Review** → Other users can vouch for your request
4. **Approval** → Automated or manual approval based on criteria
5. **Disbursement** → Funds sent to your Stellar wallet
6. **Repayment** → Track payments and build credit history

### Trust Score Benefits

- **Credit Access**: Higher trust scores unlock credit eligibility
- **Better Terms**: Lower interest rates with more trust points
- **Higher Limits**: More credit available with better scores
- **Network Building**: Stronger network = more opportunities
- **Reputation**: Transparent trust graph visible to all

## DeFi Integration

### DeFindex Yield Strategies

**Automatic Deposits:**

- Incoming USDC automatically deposited to DeFindex strategies
- Position tracking for user shares in each strategy
- No manual intervention required
- Seamless user experience

**Position Management:**

- User shares tracked per DeFindex strategy
- Total deposited/withdrawn amounts recorded
- Transaction history (deposits, withdrawals, harvests)
- Transaction status tracking (pending, confirmed, failed)
- Real-time position updates

**Real-Time Tracking:**

- Combined wallet + vault balance aggregation
- Position updates on every transaction
- Historical position data for analytics
- Complete audit trail for all operations

**Easy Withdrawals:**

- Access your funds anytime
- Fast settlement on Stellar network
- Low transaction fees
- Position automatically updated on withdrawal

### Supported Protocols

- **DeFindex** — Stellar-based yield strategies (active)
- **Blend Protocol** — Stellar-based lending (future)
- **Stellar AMM** — Automated market maker pools (future)

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
