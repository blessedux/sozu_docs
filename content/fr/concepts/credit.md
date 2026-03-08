---
title: Système de Crédit
description: Crédit comportemental, Trust Score par remboursement et intégration Blend — suivi des remboursements, micro-prêts pilotes et yield
---

# Système de Crédit

L'approche crédit de Sozu est **comportementale** : le comportement de remboursement et le suivi alimentent un **Trust Score**, qui forme la base du crédit futur (y compris les micro-prêts pilotes via Blend). Pas de vérifications de crédit traditionnelles ; la confiance se construit par l'usage et le remboursement sur le même rail. Le yield sur l'USDC inactif (ex. via Blend/Defindex) soutient la durabilité et le collatéral du système.

## Aperçu

- **Remboursement et suivi** — Les ONG et les bénéficiaires enregistrent remboursements, mora et état du crédit dans le tableau de bord SozuPay. Traçabilité et transparence complètes.
- **Trust Score** — Dérivé du comportement de remboursement ; détermine les plafonds d'emprunt et l'éligibilité aux micro-prêts pilotes.
- **Couche de crédit comportemental** — Mois 4–8 en Année 1 : Trust Score, plafonds d'emprunt, micro-prêts pilotes via les pools Blend.
- **Yield dans le stack** — L'USDC inactif (org et optionnellement utilisateur) peut générer du yield (Defindex/Blend) ; 90 % en vault, 10 % en hot pour la liquidité. Le yield soutient la durabilité et le crédit futur.

Pour le roadmap et les détails par phase, voir [Aperçu](/concepts/overview).

---

## Comment ça s'inscrit dans le roadmap

| Phase   | Focus crédit |
|--------|---------------|
| **Année 1** | Suivi des remboursements, Trust Score, couche de crédit comportemental, micro-prêts pilotes via Blend. Premier cycle de remboursement avec partenaire ONG (MUJERES 2000). |
| **Année 2+** | Crédit basé sur les revenus pour les marchands utilisant l'historique des paiements portefeuille ; même stack, étendu aux utilisateurs business. |

---

## Intégration du protocole Blend

Le [Blend Protocol](https://docs.blend.capital/) sur Stellar est utilisé pour :

- **Yield sur l'USDC inactif** — L'USDC de l'org et de l'utilisateur peut être routé vers les stratégies Blend/Defindex pour un yield auto-composé.
- **Micro-prêts pilotes** — Le roadmap Année 1 inclut des micro-prêts pilotes via les pools Blend, conditionnés par le Trust Score et l'historique des remboursements.
- **Prêt surcollatéralisé** — Le modèle Blend fournit une infrastructure de yield et de prêt de niveau institutionnel ; Sozu ajoute la confiance comportementale par-dessus.

Yield et crédit partagent le même rail : le comportement de remboursement améliore le Trust Score, qui débloque l'accès au crédit pilote ; les fonds inactifs génèrent du yield pour soutenir la capacité de crédit future.

---

## Références techniques

- **Architecture :** [Architecture](/concepts/architecture) — Comptes intelligents ONG, yield router, Defindex/Blend.
- **Planification :** [SozuPay MVP docs — planification](https://github.com/blessedux/sozupay_mvp/tree/main/docs/03-planning)
- **Stratégie et roadmap :** [Aperçu](/concepts/overview) — Année 1/2/4, piliers Phase 1, roadmap de développement.
