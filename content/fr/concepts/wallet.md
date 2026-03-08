---
title: Sozu Wallet
description: Portefeuille USDC non-custodial pour bénéficiaires et marchands — SDP, passkey/MPC, récupération SEP-30, offramping, yield auto-composé
---

# Sozu Wallet

Sozu Wallet est le **portefeuille de stablecoins non-custodial** pour les bénéficiaires (et plus tard les marchands) dans le stack Sozu. Il permet une auto-custodie sécurisée, des paiements, de l'épargne et l'accès au cash — le tout avec **USDC sur Stellar** et conçu pour un usage réel en Amérique latine.

## Aperçu

Sozu Wallet transforme les stablecoins en **infrastructure financière utilisable**. Les bénéficiaires reçoivent l'USDC des ONG via le tableau de bord SozuPay (ou de toute Stellar Disbursement Platform lorsque Sozu est enregistré comme fournisseur SDP). Ils détiennent, dépensent ou convertissent en monnaie locale via des offramps intégrés — sans seed phrases, sans risque custodial et avec un minimum de friction.

**Fonctionnalités clés :**

- **USDC non-custodial sur Stellar** — Vos clés, vos fonds. Le portefeuille ne détient jamais le principal de l'utilisateur.
- **Compatible SDP** — Tout émetteur SDP peut décaisser directement vers une adresse Sozu wallet.
- **Passkey + signature MPC** — Auth biométrique et MPC pour signer ; pas de seed phrases pour les utilisateurs quotidiens.
- **Récupération SEP-30** — Récupération de portefeuille via le standard SEP-30 de Stellar pour retrouver l'accès en cas de perte d'appareil ou de mot de passe.
- **Affichage ARS / monnaie locale** — Soldes et flux en monnaie locale pour les paiements réels.
- **Accès cash instantané** — Offramping (ex. MoneyGram USDC → ARS) pour obtenir du cash local ; futur **Sozu Anchor** pour ramp on/off propriétaire.
- **Yield auto-composé** — L'USDC inactif peut générer du yield via le DeFi intégré (ex. Blend/Defindex) sans bloquer la liquidité.

## Pour qui

- **Année 1 :** **Bénéficiaires** de microcrédit ONG (ex. MUJERES 2000 en Argentine). Ils reçoivent les décaissements dans Sozu Wallet, détiennent ou dépensent l'USDC et offrampent en ARS.
- **Année 2+ :** Les **marchands** utilisent le même portefeuille (ou Business Wallet) pour recevoir des paiements USDC, suivre les revenus et accéder au yield et au crédit basé sur les revenus.

Pour la stratégie et le roadmap complets, voir [Aperçu](/concepts/overview). Pour l'architecture technique, voir [Architecture](/concepts/architecture) et [Comment ça marche](/concepts/how-it-works).
