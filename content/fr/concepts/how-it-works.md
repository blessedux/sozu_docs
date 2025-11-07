---
title: Comment ça marche
description: De don à autonomisation - Découvrez comment fonctionne le système de crédit décentralisé de Sozu Capital
---

# Comment ça marche

Le système de crédit décentralisé de Sozu Capital transforme les dons en autonomisation grâce à un écosystème financier transparent basé sur la confiance construit sur la technologie blockchain.

## Aperçu

Sozu Credit permet l'accès au crédit grâce au parrainage communautaire, à l'éducation et à l'intégration DeFi. Les donateurs financent des lots de micro-crédit qui affluent vers les Coffres Sozu en chaîne générant des rendements DeFi (10-20% APY). Le rendement soutient des lignes de crédit basées sur la confiance pour les entrepreneurs vérifiés qui complètent les exigences éducatives. Chaque transaction est visible en chaîne grâce au suivi transparent de l'allocation.

## Le Flux

### 1. Financement des Donateurs

**Les donateurs contribuent des fonds** à des lots de micro-crédit qui soutiennent les entrepreneurs dans les communautés mal desservies.

**Comment ça marche :**

- Les donateurs envoient de l'USDC à Sozu Capital
- Les fonds sont regroupés en lots de micro-crédit
- Chaque lot cible des communautés ou régions spécifiques
- Tous les dons sont transparents et traçables en chaîne
- Suivi de l'impact en temps réel via les enregistrements blockchain

### 2. Allocation des Coffres

**Les fonds affluent vers les Coffres Sozu en chaîne** qui génèrent automatiquement des rendements DeFi grâce à l'intégration avec Blend Protocol et Stellar AMM.

**Génération de Rendement :**

- Dépôts automatiques dans les coffres de rendement (10-20% APY)
- 90% des fonds automatiquement déposés dans les coffres de rendement Blend
- 10% maintenus dans le portefeuille chaud pour un accès immédiat au crédit
- Suivi du rendement et agrégation du solde en temps réel
- Rééquilibrage automatique pour des rendements optimaux
- Retraits faciles à tout moment

**Protocoles Supportés :**

- **Blend Protocol** — Prêts basés sur Stellar
- **Stellar AMM** — Pools de teneurs de marché automatisés
- Intégrations futures avec des protocoles DeFi supplémentaires

### 3. Crédit Basé sur la Confiance

**Le rendement soutient des lignes de crédit basées sur la confiance** pour les entrepreneurs vérifiés qui complètent les exigences éducatives et construisent des scores de confiance grâce au parrainage communautaire.

**Éligibilité au Crédit :**

- Compléter les cours d'éducation financière
- Construire un score de confiance grâce au parrainage communautaire
- Recevoir du crédit basé sur le score de confiance et la position du coffre
- Conditions transparentes sans vérifications de crédit traditionnelles
- Pas de KYC requis pour le crédit basé sur le parrainage

**Système de Score de Confiance :**

- Commencez avec 5 points de confiance
- Gagnez des points grâce aux bonus quotidiens
- Invitez de nouveaux utilisateurs pour développer votre réseau
- Recevez des parrainages de membres de la communauté
- Scores de confiance plus élevés = meilleures conditions de crédit

### 4. Preuve d'Allocation

**Chaque transaction visible** via les enregistrements en chaîne, assurant une transparence et une responsabilité complètes.

**Caractéristiques de Transparence :**

- Enregistrements de transactions en chaîne sur la blockchain Stellar
- Suivi du solde en temps réel via l'API Stellar Horizon
- Visibilité de la distribution des rendements
- Transparence de l'allocation du crédit
- Changements de score de confiance suivis en chaîne
- Piste d'audit complète pour toutes les opérations

## L'Écosystème

### Donateurs

**Rôle :** Financer des lots de micro-crédit et soutenir l'inclusion financière

**Avantages :**

- Suivi de l'impact transparent en chaîne
- Génération de rendement durable (10-20% APY)
- Autonomisation communautaire
- Dons déductibles d'impôts (le cas échéant)
- Visibilité en temps réel de l'allocation des fonds

### Entrepreneurs

**Rôle :** Recevoir du crédit et construire des entreprises

**Avantages :**

- Accès au crédit sans banques traditionnelles
- Construire un score de confiance au fil du temps grâce au parrainage communautaire
- Pas de KYC requis pour le crédit basé sur le parrainage
- Contrôle financier auto-custodial
- Compléter l'éducation pour débloquer l'éligibilité au crédit
- Conditions et taux transparents

### Communauté

**Rôle :** Parrainer des entrepreneurs et construire un réseau de confiance

**Avantages :**

- Renforcer l'économie locale
- Construire un système de réputation grâce au parrainage
- Soutenir l'inclusion financière
- Gouvernance transparente
- Gagner des points de confiance pour la participation active

## Architecture Technique

### Architecture du Système

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

### Stack Technologique

**Frontend :**

- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS
- WebAuthn/Passkeys pour l'authentification
- Support PWA (offline-first)

**Backend :**

- Next.js API Routes (Edge Runtime)
- Supabase (PostgreSQL + Auth)
- Stellar SDK pour les opérations blockchain
- SDKs de Protocoles DeFi (Blend/Stellar AMM)

**Blockchain :**

- Stellar Network (transactions rapides et peu coûteuses)
- Soroban Smart Contracts (futur)
- USDC sur Stellar
- API Stellar Horizon pour les données en temps réel

### Infrastructure en Chaîne

**Blockchain Stellar :**

- Transactions rapides et peu coûteuses
- Interopérabilité mondiale
- Grand livre transparent
- Intégration avec le réseau d'ancres
- Suivi du solde en temps réel

**Protocoles DeFi :**

- **Blend Protocol** — Génération de rendement de niveau institutionnel
- **Stellar AMM** — Tenue de marché automatisée
- Prêts surcollatéralisés
- Protection contre la perte impermanente

### Contrats Intelligents et Coffres

**Coffres Sozu :**

- Allocation automatique des dépôts
- Génération et distribution des rendements (10-20% APY)
- Gestion des lignes de crédit
- Intégration du score de confiance
- Agrégation du solde en temps réel

**Système de Crédit :**

- Score de crédit basé sur la confiance
- Mécanisme de parrainage communautaire
- Vérification de l'éducation
- Suivi des remboursements
- Conditions et taux transparents

## Parcours Utilisateur

### Nouvel Utilisateur

1. **S'inscrire** → Toucher empreinte/visage (Passkeys) → Portefeuille créé instantanément via Turnkey SDK
2. **Obtenir le Lien d'Invitation** → Partager avec d'autres → Recevoir des points de confiance
3. **Recevoir de l'USDC** → Fonds auto-déposés dans le coffre de rendement → Gagner 10-20% APY
4. **Compléter l'Éducation** → Apprendre les bases du DeFi → Débloquer l'éligibilité au crédit
5. **Être Parrainé** → Construire un score de confiance → Accéder aux pools de crédit
6. **Demander du Crédit** → Le parrainage communautaire détermine les conditions → Recevoir des fonds

### Flux Utilisateur Existant

- Voir le solde (portefeuille + coffre combinés)
- Suivre les gains de rendement en temps réel
- Parrainer d'autres utilisateurs
- Envoyer/recevoir de l'USDC instantanément
- Gérer le crédit et les remboursements
- Compléter des modules éducatifs supplémentaires

### Pour les Donateurs

1. **Donner de l'USDC** à Sozu Capital
2. **Suivre l'Impact** via l'allocation transparente en chaîne
3. **Voir le Rendement** généré des positions de coffre (10-20% APY)
4. **Surveiller le Crédit** distribué aux entrepreneurs
5. **Voir les Rapports** sur les métriques d'impact et les résultats

### Pour les Entrepreneurs

1. **Créer un Portefeuille** avec authentification passkey (biométrique)
2. **Compléter l'Éducation** cours pour débloquer le crédit
3. **Construire un Score de Confiance** grâce au parrainage communautaire
4. **Recevoir du Crédit** basé sur la confiance et la position du coffre
5. **Rembourser le Crédit** et construire un historique de crédit
6. **Suivre le Progrès** via le tableau de bord transparent

## Sécurité et Confidentialité

### Authentification

- **Passkeys Uniquement** — Aucun mot de passe stocké, authentification biométrique uniquement
- **Standard WebAuthn** — Authentification sécurisée standard de l'industrie
- **Turnkey SDK** — Gestion sécurisée des clés pour la création de portefeuille

### Protection des Données

- **Clés Chiffrées** — Clés de portefeuille Stellar chiffrées au repos
- **Auto-Custodie** — Les utilisateurs contrôlent leurs fonds
- **UX Zéro Connaissance** — Collecte de données minimale, confidentialité maximale
- **Basé sur la Communauté** — Pas de KYC requis pour le crédit basé sur le parrainage

### Sécurité Blockchain

- **Transparence en Chaîne** — Toutes les transactions visibles sur la blockchain Stellar
- **Enregistrements Immutables** — Piste d'audit complète
- **Sécurité des Contrats Intelligents** — Protocoles audités (Blend, Stellar AMM)

## Système d'Éducation

### Modules de Cours

Complétez les cours pour débloquer les opportunités de crédit :

- ✅ **Introduction au Micro-Crédit** — Bases du prêt décentralisé
- ✅ **Responsabilité Financière** — Remboursement et planification des prêts
- ✅ **Planification d'Entreprise** — Créer des plans d'entreprise solides
- ✅ **Communauté et Confiance** — Comprendre le système de parrainage
- ✅ **Gérer vos Fonds** — Meilleures pratiques pour les fonds DeFi

**Progrès = Éligibilité au Crédit** — Complétez tous les cours pour débloquer les limites de crédit complètes.

### Avantages de l'Éducation

- Débloquer l'éligibilité au crédit
- Meilleures conditions de crédit avec la complétion
- Construire l'éducation financière
- Obtenir des certifications
- Accéder aux fonctionnalités avancées

## Parrainage Communautaire

### Comment ça marche

1. **Gagner des Points de Confiance** — Commencez avec 5 points, gagnez plus grâce à :

   - Bonus quotidiens
   - Inviter de nouveaux utilisateurs
   - Recevoir des parrainages d'autres

2. **Parrainer d'Autres** — Donnez des points de confiance aux utilisateurs en qui vous croyez :

   - Chaque parrainage augmente leur score de confiance
   - Vos parrainages construisent votre réputation
   - Graphique de confiance transparent visible par tous

3. **Débloquer le Crédit** — Scores de confiance plus élevés = meilleures conditions de crédit :
   - Le parrainage communautaire remplace les vérifications de crédit traditionnelles
   - Graphique de confiance transparent
   - Pas de KYC requis

### Système d'Invitation

- **Partager votre Lien d'Invitation** — Obtenir une URL unique à partager
- **Nouveaux Utilisateurs Rejoignent** — Ils peuvent vous parrainer ou vous pouvez les parrainer
- **Construire votre Réseau** — Réseau plus fort = plus d'opportunités de crédit

### Avantages du Score de Confiance

- Accès aux pools de crédit
- Meilleurs taux d'intérêt
- Limites de crédit plus élevées
- Support prioritaire
- Participation à la gouvernance

## Intégration DeFi

### Coffres de Rendement (10-20% APY)

**Dépôts Automatiques :**

- L'USDC entrant va automatiquement au coffre
- Aucune intervention manuelle requise
- Expérience utilisateur fluide

**Rendement Élevé :**

- Gagner 10-20% APY sur les fonds inactifs
- Suivi du rendement en temps réel
- Mises à jour quotidiennes des gains

**Retraits Faciles :**

- Accéder à vos fonds à tout moment
- Règlement rapide sur Stellar
- Faibles frais de transaction

**Suivi en Temps Réel :**

- Voir vos gains croître quotidiennement
- Solde combiné portefeuille + coffre
- Distribution de rendement transparente

### Protocoles Supportés

- **Blend Protocol** — Prêts basés sur Stellar
- **Stellar AMM** — Pools de teneurs de marché automatisés
- **Intégrations Futures** — Protocoles supplémentaires à venir

## Transparence et Responsabilité

### Transparence en Chaîne

**Transparence Complète :**

- Toutes les transactions sur la blockchain Stellar
- Suivi du solde en temps réel via l'API Stellar Horizon
- Enregistrements de distribution des rendements
- Historique d'allocation du crédit
- Changements de score de confiance suivis

### Piste d'Audit

**Chaque Action Enregistrée :**

- Contributions des donateurs
- Dépôts et retraits de coffre
- Génération et distribution des rendements
- Émission de crédit et remboursements
- Changements de score de confiance
- Progrès éducatif
- Activités de parrainage

### Preuve d'Allocation

- **TRUFA Proof of Allocation** — Visibilité complète des transactions
- **Suivi en Temps Réel** — Mises à jour en direct de toutes les opérations
- **Grand Livre Public** — Tous les enregistrements sur la blockchain Stellar
- **Impact Vérifiable** — Métriques et résultats transparents

## Métriques d'Impact

**Résultats Traçables :**

- Nombre d'entrepreneurs financés
- Crédit total distribué
- Taux de remboursement
- Améliorations du score de confiance
- Croissance communautaire
- Taux de complétion de l'éducation
- Rendement généré pour la durabilité
- Distribution géographique de l'impact

## Roadmap

### ✅ Phase 1 : Fondation (Terminée)

- Authentification Passkeys
- Création de portefeuille Stellar
- Points de confiance et parrainage
- UI/UX de base

### 🚧 Phase 2 : Intégration DeFi (En Cours)

- Configuration de l'actif USDC
- Intégration du coffre de rendement
- Logique de auto-dépôt
- Agrégation du solde

### 📅 Phase 3 : Portail d'Éducation

- Modules de cours
- Suivi des progrès
- Système de certification
- Déblocage du crédit

### 📅 Phase 4 : Pools de Crédit

- Contrats de crédit décentralisés
- Système de décaissement
- Suivi des remboursements
- Intégration du score de confiance

### 📅 Phase 5 : Fonctionnalités Avancées

- Support multi-actifs
- Liens de paiement
- OCR de reçus
- Assistant financier IA

---

**Prêt à faire partie de la solution ?** Rejoignez Sozu Capital et aidez à transformer les dons en autonomisation grâce à la technologie blockchain, la confiance communautaire et l'inclusion financière.
