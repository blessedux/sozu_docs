---
title: Cómo Funciona
description: Arquitectura SozuPay, flujo NGO a wallet, yield DeFi y offramping — de donante a Sozu Wallet a efectivo
---

# Cómo Funciona

Esta página describe la **arquitectura SozuPay** y el **flujo de punta a punta**: paneles NGO y Business para pagos en stablecoins (con DeFi integrado), Sozu Wallet con yield auto-compuesto, el camino de NGO a wallets y el offramping (MoneyGram hoy, **Sozu Anchor** mañana). Para estrategia y roadmap, ver [Resumen](/concepts/overview). Documentación técnica completa: [SozuPay MVP docs](https://github.com/blessedux/sozupay_mvp/tree/main/docs).

---

## Arquitectura SozuPay en resumen

### Dos paneles, un stack

- **Panel NGO (SozuPay)** — Gestionar beneficiarios, calendarios de desembolso y pagos USDC por lotes. Confirmación de reembolsos y trazabilidad. La wallet de la org puede mantener USDC en yield (Blend/Defindex); 90% a bóveda, 10% en caliente para liquidez. El personal inicia sesión, elige una organización y ejecuta pagos a direcciones Stellar de receptores.
- **Panel Business (SozuPay)** — Recibir pagos en USDC, seguir ingresos, gestionar pagos a proveedores o empleados. Mismo yield DeFi sobre balance inactivo; un panel para pagos en dólares programables.

### Sozu Wallet

- **Wallet para receptores (y luego comercios)** — USDC no custodial en Stellar; habilitada SDP para que cualquier emisor SDP pueda desembolsar a Sozu. Passkey/MPC; visualización ARS.
- **Yield DeFi auto-compuesto** — El USDC inactivo en la wallet genera yield (ej. Blend/Defindex); sin bloqueo, el yield se compone en segundo plano.

### Flujo: NGO → Wallets

1. Donantes/ONG asignan USDC; los fondos están en la wallet de la org o en la bóveda de yield.
2. El personal usa el **Panel NGO** para enviar USDC a direcciones de beneficiarios.
3. Los receptores reciben fondos en **Sozu Wallet**; mantienen, gastan u offrampean a moneda local.
4. Los reembolsos y el comportamiento se registran y alimentan el trust score y el crédito futuro.

### Offramping: MoneyGram y Sozu Anchor

- **Hoy / corto plazo:** **MoneyGram** — USDC → fiat (ej. retiro ARS) para que los receptores obtengan moneda local. Primer despliegue en Argentina.
- **Futuro:** **Sozu Anchor** — Servicio propio de offramping: ramp fiat on/off directo donde la regulación lo permita, liquidez local y control total del rail. La forma a largo plazo de entrar y salir en efectivo del stack Sozu.

---

## Resumen

- **Panel NGO (SozuPay):** Beneficiarios, calendarios de desembolso, pagos USDC únicos y por lotes, confirmación de reembolsos, reportes. Primer despliegue: microcrédito NGO Año 1 en Argentina (socio: MUJERES 2000) en **Stellar + Soroban + USDC**. Yield DeFi sobre el balance de la org.
- **Sozu Wallet:** Wallet USDC no custodial; habilitada SDP; yield auto-compuesto; visualización ARS; passkey/MPC.
- **Offramping:** MoneyGram (ruta en vivo); Sozu Anchor (offramp propio futuro).
- **Reembolso y seguimiento:** Herramientas para NGOs y receptores; base para crédito conductual y trust score.

**Flujo técnico:** El personal inicia sesión (Privy), elige una organización y usa el panel. La org tiene una wallet (Stellar clásica G o contrato Soroban C) que mantiene USDC; los pagos van a direcciones Stellar de receptores.

---

## El flujo

### 1. Financiamiento donante / NGO

**Donantes y ONG contribuyen fondos** a lotes de microcrédito que apoyan a beneficiarios en comunidades objetivo.

- Donantes/ONG envían o asignan USDC al programa.
- Los fondos se agrupan y gestionan vía el **panel SozuPay** (gestión de beneficiarios, calendarios de desembolso).
- Donaciones y desembolsos son transparentes y rastreables on-chain (Stellar).
- Primer socio: MUJERES 2000 (Argentina). Objetivo: 500–2k receptores en Año 1.

### 2. Asignación a bóveda

**Los fondos están en wallets/bóvedas on-chain** (wallet de la org; yield opcional vía Blend/Defindex).

- La wallet de la org mantiene USDC (cuenta Stellar clásica G o contrato Soroban C).
- Opcional: el USDC inactivo puede generar yield (ej. Blend, Defindex); 90% a bóveda, 10% en caliente para liquidez.
- Balance y visibilidad de transacciones en tiempo real vía Stellar Horizon / panel.
- Pagos desde la misma wallet a direcciones Stellar de receptores.

### 3. Crédito basado en confianza (capa conductual)

**El comportamiento de reembolso y el seguimiento** alimentan la confianza y el crédito futuro.

- Las ONG y los receptores registran reembolsos y mora en el panel.
- El estado de crédito y el historial de reembolsos son la base del **crédito conductual** y el trust score (micropréstamos piloto vía Blend en el roadmap del Año 1).
- Sin verificaciones de crédito tradicionales; la confianza se construye con el uso y el reembolso.

### 4. Prueba de asignación

**Cada transacción es visible** en Stellar.

- Registros de transacciones on-chain (enlaces Stellar Explorer / Stellar Expert).
- Balance y estado de pagos en tiempo real en el panel.
- Trazabilidad para desembolsos, reembolsos y (cuando aplique) yield.
- Transparencia completa para donantes, ONG y receptores.

---

## El ecosistema

| Actor | Rol |
|-------|-----|
| **ONG** | Canal de distribución, validador de confianza, generador de volumen; usan el panel SozuPay para beneficiarios y pagos. |
| **Receptores / usuarios de wallet** | Reciben USDC en Sozu Wallet; mantienen, gastan u offrampean a fiat; reembolsan y construyen comportamiento crediticio. |
| **Donantes** | Financian lotes de microcrédito; siguen impacto y asignación on-chain. |

**Secuencia:** La distribución viene primero de NGOs y receptores; comercios y rieles (Año 2+) siguen. Ver [Resumen](/concepts/overview) para la estrategia Año 1 / 2 / 4.

---

## Referencias clave

- **Estrategia y producto:** [Resumen](/concepts/overview)
- **Spec técnica y arquitectura:** [SozuPay MVP docs — 00-overview, 01-architecture](https://github.com/blessedux/sozupay_mvp/tree/main/docs)
- **Plan de desarrollo NGO:** [ngo-disbursement-wallet-dev-plan.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/ngo-disbursement-wallet-dev-plan.md)
- **Desembolsos en producción:** [production-disbursements-tasks.md](https://github.com/blessedux/sozupay_mvp/blob/main/docs/03-planning/production-disbursements-tasks.md)
