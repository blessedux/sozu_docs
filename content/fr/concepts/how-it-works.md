---
title: Comment ça marche
description: Architecture SozuPay, flux ONG vers portefeuille, yield DeFi et offramping — du donateur à Sozu Wallet au cash
---

# Comment ça marche

Cette page décrit l'**architecture SozuPay** et le **flux de bout en bout** : tableaux de bord ONG et Business pour les paiements en stablecoins (avec DeFi intégré), Sozu Wallet avec yield auto-composé, le chemin ONG vers portefeuilles et l'offramping (MoneyGram aujourd'hui, **Sozu Anchor** demain). Pour la stratégie et le roadmap, voir [Aperçu](/concepts/overview). Documentation technique complète : [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs).

---

## Architecture SozuPay en bref

### Deux tableaux de bord, un stack

- **Tableau de bord ONG (SozuPay)** — Gérer les bénéficiaires, les calendriers de décaissement et les paiements USDC par lots. Confirmation des remboursements et traçabilité. Le portefeuille de l'org peut détenir l'USDC en yield (Blend/Defindex) ; 90 % en vault, 10 % en hot pour la liquidité. Le personnel se connecte, choisit une organisation et exécute les paiements vers les adresses Stellar des destinataires.
- **Tableau de bord Business (SozuPay)** — Recevoir des paiements en USDC, suivre les revenus, gérer les paiements aux fournisseurs ou employés. Même yield DeFi sur le solde inactif ; un tableau de bord pour les paiements en dollars programmables.

### Sozu Wallet

- **Portefeuille pour bénéficiaires (et plus tard marchands)** — USDC non-custodial sur Stellar ; compatible SDP pour que tout émetteur SDP puisse décaisser vers Sozu. Passkey/MPC ; affichage ARS.
- **Yield DeFi auto-composé** — L'USDC inactif dans le portefeuille génère du yield (ex. Blend/Defindex) ; pas de blocage, le yield se compose en arrière-plan.

### Flux : ONG → Portefeuilles

1. Donateurs/ONG allouent l'USDC ; les fonds restent dans le portefeuille de l'org ou le vault yield.
2. Le personnel utilise le **tableau de bord ONG** pour envoyer l'USDC aux adresses des bénéficiaires.
3. Les destinataires reçoivent les fonds dans **Sozu Wallet** ; ils détiennent, dépensent ou offrampent en monnaie locale.
4. Les remboursements et le comportement sont suivis et alimentent le trust score et le crédit futur.

### Offramping : MoneyGram et Sozu Anchor

- **Aujourd'hui / court terme :** **MoneyGram** — USDC → fiat (ex. retrait ARS) pour que les bénéficiaires obtiennent la monnaie locale. Premier déploiement en Argentine.
- **Futur :** **Sozu Anchor** — Service d'offramping propriétaire : ramp fiat on/off direct où la régulation le permet, liquidité locale et contrôle total du rail. La voie long terme pour entrer et sortir en cash du stack Sozu.

---

## Aperçu (résumé)

- **Tableau de bord ONG (SozuPay) :** Bénéficiaires, calendriers de décaissement, paiements USDC unitaires et par lots, confirmation des remboursements, rapports. Premier déploiement : microcrédit ONG Année 1 en Argentine (partenaire : MUJERES 2000) sur **Stellar + Soroban + USDC**. Yield DeFi sur le solde de l'org.
- **Sozu Wallet :** Portefeuille USDC non-custodial ; compatible SDP ; yield auto-composé ; affichage ARS ; passkey/MPC.
- **Offramping :** MoneyGram (chemin en direct) ; Sozu Anchor (offramp propriétaire futur).
- **Remboursement et suivi :** Outils pour les ONG et les destinataires ; fondation pour le crédit comportemental et le trust score.

**Flux technique :** Le personnel se connecte (Privy), choisit une organisation, utilise le tableau de bord. L'org a un portefeuille (Stellar classique G ou contrat Soroban C) qui détient l'USDC ; les paiements vont aux adresses Stellar des destinataires.

---

## Le flux

### 1. Financement donateur / ONG

**Les donateurs et les ONG contribuent des fonds** à des lots de microcrédit qui soutiennent les bénéficiaires dans les communautés cibles.

- Donateurs/ONG envoient ou allouent l'USDC au programme.
- Les fonds sont regroupés et gérés via le **tableau de bord SozuPay** (gestion des bénéficiaires, calendriers de décaissement).
- Tous les dons et décaissements sont transparents et traçables on-chain (Stellar).
- Premier partenaire : MUJERES 2000 (Argentine). Cible : 500–2k destinataires en Année 1.

### 2. Allocation au vault

**Les fonds restent dans les portefeuilles/vaults on-chain** (portefeuille de l'org ; yield optionnel via Blend/Defindex).

- Le portefeuille de l'org détient l'USDC (compte Stellar classique G ou contrat Soroban C).
- Optionnel : l'USDC inactif peut générer du yield (ex. Blend, Defindex) ; 90 % en vault, 10 % en hot pour la liquidité.
- Solde et visibilité des transactions en temps réel via Stellar Horizon / tableau de bord.
- Paiements depuis le même portefeuille vers les adresses Stellar des destinataires.

### 3. Crédit basé sur la confiance (couche comportementale)

**Le comportement de remboursement et le suivi** alimentent la confiance et le crédit futur.

- Les ONG et les destinataires enregistrent les remboursements et la mora dans le tableau de bord.
- L'état du crédit et l'historique des remboursements forment la base du **crédit comportemental** et du trust score (micro-prêts pilotes via Blend dans le roadmap Année 1).
- Pas de vérifications de crédit traditionnelles ; la confiance se construit par l'usage et le remboursement.

### 4. Preuve d'allocation

**Chaque transaction est visible** sur Stellar.

- Enregistrements de transactions on-chain (liens Stellar Explorer / Stellar Expert).
- Solde et statut des paiements en temps réel dans le tableau de bord.
- Piste d'audit pour les décaissements, remboursements et (le cas échéant) le yield.
- Transparence complète pour les donateurs, les ONG et les destinataires.

---

## L'écosystème

| Acteur | Rôle |
|--------|------|
| **ONG** | Canal de distribution, validateur de confiance, générateur de volume ; utilisent le tableau de bord SozuPay pour les bénéficiaires et les paiements. |
| **Destinataires / utilisateurs de portefeuille** | Reçoivent l'USDC dans Sozu Wallet ; détiennent, dépensent ou offrampent en fiat ; remboursent et construisent le comportement crédit. |
| **Donateurs** | Financent les lots de microcrédit ; suivent l'impact et l'allocation on-chain. |

**Séquence :** La distribution vient d'abord des ONG et des destinataires ; les marchands et les rails (Année 2+) suivent. Voir [Aperçu](/concepts/overview) pour la stratégie Année 1 / 2 / 4.

---

## Références clés

- **Stratégie et produit :** [Aperçu](/concepts/overview)
- **Spec technique et architecture :** [SozuPay MVP docs — 00-overview, 01-architecture](https://github.com/blessedux/sozupay_mvp/tree/main/docs)
- **Plan de développement ONG :** [ngo-disbursement-wallet-dev-plan.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/ngo-disbursement-wallet-dev-plan.md)
- **Décaissements en production :** [production-disbursements-tasks.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/production-disbursements-tasks.md)
