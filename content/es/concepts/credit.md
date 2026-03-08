---
title: Sistema de Crédito
description: Crédito conductual, Trust Score por reembolso e integración Blend — seguimiento de reembolsos, micropréstamos piloto y yield
---

# Sistema de Crédito

El enfoque de crédito de Sozu es **conductual**: el comportamiento de reembolso y el seguimiento alimentan un **Trust Score**, que es la base del crédito futuro (incluidos micropréstamos piloto vía Blend). No hay verificaciones de crédito tradicionales; la confianza se construye con el uso y el reembolso en el mismo rail. El yield sobre USDC inactivo (ej. vía Blend/Defindex) apoya la sostenibilidad y el colateral del sistema.

## Resumen

- **Reembolso y seguimiento** — Las ONG y los receptores registran reembolsos, mora y estado de crédito en el panel SozuPay. Trazabilidad y transparencia completas.
- **Trust Score** — Derivado del comportamiento de reembolso; determina límites de préstamo y elegibilidad para micropréstamos piloto.
- **Capa de crédito conductual** — Meses 4–8 en Año 1: Trust Score, límites de préstamo, micropréstamos piloto vía pools Blend.
- **Yield en el stack** — El USDC inactivo (org y opcionalmente usuario) puede generar yield (Defindex/Blend); 90% a bóveda, 10% en caliente para liquidez. El yield apoya sostenibilidad y crédito futuro.

Para el roadmap y los detalles por fase, ver [Resumen](/concepts/overview).

---

## Cómo encaja en el roadmap

| Fase   | Enfoque de crédito |
|--------|---------------------|
| **Año 1** | Seguimiento de reembolsos, Trust Score, capa de crédito conductual, micropréstamos piloto vía Blend. Primer ciclo de reembolso con socio NGO (MUJERES 2000). |
| **Año 2+** | Crédito basado en ingresos para comercios usando historial de pagos en wallet; mismo stack, ampliado a usuarios business. |

---

## Integración con el protocolo Blend

[Blend Protocol](https://docs.blend.capital/) en Stellar se usa para:

- **Yield sobre USDC inactivo** — El USDC de la org y del usuario puede dirigirse a estrategias Blend/Defindex para yield auto-compuesto.
- **Micropréstamos piloto** — El roadmap del Año 1 incluye micropréstamos piloto vía pools Blend, condicionados por Trust Score e historial de reembolsos.
- **Préstamo sobrecolateralizado** — El modelo de Blend proporciona infraestructura de yield y préstamo de grado institucional; Sozu añade la confianza conductual encima.

Yield y crédito comparten el mismo rail: el comportamiento de reembolso mejora el Trust Score, que desbloquea acceso al crédito piloto; los fondos inactivos generan yield para sostener la capacidad crediticia futura.

---

## Referencias técnicas

- **Arquitectura:** [Arquitectura](/concepts/architecture) — Cuentas inteligentes NGO, yield router, Defindex/Blend.
- **Planificación:** [SozuPay MVP docs — planificación](https://github.com/blessedux/sozupay_mvp/tree/main/docs/03-planning)
- **Estrategia y roadmap:** [Resumen](/concepts/overview) — Año 1/2/4, pilares Fase 1, roadmap de desarrollo.
