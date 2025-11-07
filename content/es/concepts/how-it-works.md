---
title: Cómo Funciona
description: De donación a empoderamiento - Aprende cómo funciona el sistema de crédito descentralizado de Sozu Capital
---

# Cómo Funciona

El sistema de crédito descentralizado de Sozu Capital transforma las donaciones en empoderamiento a través de un ecosistema financiero transparente basado en confianza construido sobre tecnología blockchain.

## Resumen

Sozu Credit permite el acceso al crédito a través del aval comunitario, la educación y la integración DeFi. Los donantes financian lotes de micro-crédito que fluyen hacia las Bóvedas Sozu en cadena generando rendimiento DeFi (10-20% APY). El rendimiento apoya líneas de crédito basadas en confianza para emprendedores verificados que completan los requisitos educativos. Cada transacción es visible en cadena a través del seguimiento transparente de asignación.

## El Flujo

### 1. Financiamiento de Donantes

**Los donantes contribuyen fondos** a lotes de micro-crédito que apoyan a emprendedores en comunidades desatendidas.

**Cómo Funciona:**

- Los donantes envían USDC a Sozu Capital
- Los fondos se agrupan en lotes de micro-crédito
- Cada lote se dirige a comunidades o regiones específicas
- Todas las donaciones son transparentes y rastreables en cadena
- Seguimiento de impacto en tiempo real a través de registros blockchain

### 2. Asignación de Bóvedas

**Los fondos fluyen hacia las Bóvedas Sozu en cadena** que generan automáticamente rendimiento DeFi a través de la integración con Blend Protocol y Stellar AMM.

**Generación de Rendimiento:**

- Depósitos automáticos en bóvedas de rendimiento (10-20% APY)
- 90% de los fondos depositados automáticamente en bóvedas de rendimiento Blend
- 10% mantenido en billetera caliente para acceso inmediato al crédito
- Seguimiento de rendimiento y agregación de balance en tiempo real
- Rebalanceo automático para retornos óptimos
- Retiros fáciles en cualquier momento

**Protocolos Soportados:**

- **Blend Protocol** — Préstamos basados en Stellar
- **Stellar AMM** — Pools de creadores de mercado automatizados
- Integraciones futuras con protocolos DeFi adicionales

### 3. Crédito Basado en Confianza

**El rendimiento apoya líneas de crédito basadas en confianza** para emprendedores verificados que completan los requisitos educativos y construyen puntuaciones de confianza a través del aval comunitario.

**Elegibilidad de Crédito:**

- Completar cursos de educación financiera
- Construir puntuación de confianza a través del aval comunitario
- Recibir crédito basado en puntuación de confianza y posición de bóveda
- Términos transparentes sin verificaciones de crédito tradicionales
- No se requiere KYC para crédito basado en aval

**Sistema de Puntuación de Confianza:**

- Comienza con 5 puntos de confianza
- Gana puntos a través de bonos diarios
- Invita nuevos usuarios para hacer crecer tu red
- Recibe avales de miembros de la comunidad
- Puntuaciones de confianza más altas = mejores términos de crédito

### 4. Prueba de Asignación

**Cada transacción visible** a través de registros en cadena, asegurando transparencia y responsabilidad completas.

**Características de Transparencia:**

- Registros de transacciones en cadena en blockchain Stellar
- Seguimiento de balance en tiempo real vía API Stellar Horizon
- Visibilidad de distribución de rendimiento
- Transparencia de asignación de crédito
- Cambios de puntuación de confianza rastreados en cadena
- Rastro de auditoría completo para todas las operaciones

## El Ecosistema

### Donantes

**Rol:** Financiar lotes de micro-crédito y apoyar la inclusión financiera

**Beneficios:**

- Seguimiento de impacto transparente en cadena
- Generación de rendimiento sostenible (10-20% APY)
- Empoderamiento comunitario
- Donaciones deducibles de impuestos (donde aplique)
- Visibilidad en tiempo real de la asignación de fondos

### Emprendedores

**Rol:** Recibir crédito y construir negocios

**Beneficios:**

- Acceso al crédito sin bancos tradicionales
- Construir puntuación de confianza con el tiempo a través del aval comunitario
- No se requiere KYC para crédito basado en aval
- Control financiero auto-custodiado
- Completar educación para desbloquear elegibilidad de crédito
- Términos y tasas transparentes

### Comunidad

**Rol:** Avalar emprendedores y construir red de confianza

**Beneficios:**

- Fortalecer la economía local
- Construir sistema de reputación a través del aval
- Apoyar la inclusión financiera
- Gobernanza transparente
- Ganar puntos de confianza por participación activa

## Arquitectura Técnica

### Arquitectura del Sistema

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

### Stack Tecnológico

**Frontend:**

- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS
- WebAuthn/Passkeys para autenticación
- Soporte PWA (offline-first)

**Backend:**

- Next.js API Routes (Edge Runtime)
- Supabase (PostgreSQL + Auth)
- Stellar SDK para operaciones blockchain
- SDKs de Protocolos DeFi (Blend/Stellar AMM)

**Blockchain:**

- Stellar Network (transacciones rápidas y de bajo costo)
- Soroban Smart Contracts (futuro)
- USDC en Stellar
- API Stellar Horizon para datos en tiempo real

### Infraestructura en Cadena

**Blockchain Stellar:**

- Transacciones rápidas y de bajo costo
- Interoperabilidad global
- Libro mayor transparente
- Integración con red de anclas
- Seguimiento de balance en tiempo real

**Protocolos DeFi:**

- **Blend Protocol** — Generación de rendimiento de grado institucional
- **Stellar AMM** — Creación de mercado automatizada
- Préstamos sobrecolateralizados
- Protección contra pérdida impermanente

### Contratos Inteligentes y Bóvedas

**Bóvedas Sozu:**

- Asignación automática de depósitos
- Generación y distribución de rendimiento (10-20% APY)
- Gestión de líneas de crédito
- Integración de puntuación de confianza
- Agregación de balance en tiempo real

**Sistema de Crédito:**

- Puntuación de crédito basada en confianza
- Mecanismo de aval comunitario
- Verificación de educación
- Seguimiento de reembolsos
- Términos y tasas transparentes

## Parcours Utilisateur

### Nuevo Usuario

1. **Registrarse** → Tocar huella/cara (Passkeys) → Billetera creada instantáneamente vía Turnkey SDK
2. **Obtener Enlace de Invitación** → Compartir con otros → Recibir puntos de confianza
3. **Recibir USDC** → Fondos auto-depositados en bóveda de rendimiento → Ganar 10-20% APY
4. **Completar Educación** → Aprender conceptos básicos de DeFi → Desbloquear elegibilidad de crédito
5. **Ser Avalado** → Construir puntuación de confianza → Acceder a pools de crédito
6. **Solicitar Crédito** → Aval comunitario determina términos → Recibir fondos

### Flujo de Usuario Existente

- Ver balance (billetera + bóveda combinados)
- Rastrear ganancias de rendimiento en tiempo real
- Avalar otros usuarios
- Enviar/recibir USDC instantáneamente
- Gestionar crédito y reembolsos
- Completar módulos educativos adicionales

### Para Donantes

1. **Donar USDC** a Sozu Capital
2. **Rastrear Impacto** a través de asignación transparente en cadena
3. **Ver Rendimiento** generado de posiciones de bóveda (10-20% APY)
4. **Monitorear Crédito** distribuido a emprendedores
5. **Ver Reportes** sobre métricas de impacto y resultados

### Para Emprendedores

1. **Crear Billetera** con autenticación passkey (biométrica)
2. **Completar Educación** cursos para desbloquear crédito
3. **Construir Puntuación de Confianza** a través del aval comunitario
4. **Recibir Crédito** basado en confianza y posición de bóveda
5. **Reembolsar Crédito** y construir historial de crédito
6. **Rastrear Progreso** a través de panel transparente

## Seguridad y Privacidad

### Autenticación

- **Solo Passkeys** — No se almacenan contraseñas, solo autenticación biométrica
- **Estándar WebAuthn** — Autenticación segura estándar de la industria
- **Turnkey SDK** — Gestión segura de claves para creación de billetera

### Protección de Datos

- **Claves Encriptadas** — Claves de billetera Stellar encriptadas en reposo
- **Auto-Custodia** — Los usuarios controlan sus fondos
- **UX Cero Conocimiento** — Mínima recolección de datos, máxima privacidad
- **Basado en Comunidad** — No se requiere KYC para crédito basado en aval

### Seguridad Blockchain

- **Transparencia en Cadena** — Todas las transacciones visibles en blockchain Stellar
- **Registros Inmutables** — Rastro de auditoría completo
- **Seguridad de Contratos Inteligentes** — Protocolos auditados (Blend, Stellar AMM)

## Sistema de Educación

### Módulos de Cursos

Completa cursos para desbloquear oportunidades de crédito:

- ✅ **Introducción al Micro-Crédito** — Conceptos básicos de préstamos descentralizados
- ✅ **Responsabilidad Financiera** — Reembolso y planificación de préstamos
- ✅ **Planificación de Negocios** — Crear planes de negocio sólidos
- ✅ **Comunidad y Confianza** — Entender el sistema de aval
- ✅ **Gestionar tus Fondos** — Mejores prácticas para fondos DeFi

**Progreso = Elegibilidad de Crédito** — Completa todos los cursos para desbloquear límites de crédito completos.

### Beneficios de Educación

- Desbloquear elegibilidad de crédito
- Mejores términos de crédito con completitud
- Construir educación financiera
- Obtener certificaciones
- Acceder a características avanzadas

## Aval Comunitario

### Cómo Funciona

1. **Ganar Puntos de Confianza** — Comienza con 5 puntos, gana más a través de:

   - Bonos diarios
   - Invitar nuevos usuarios
   - Recibir avales de otros

2. **Avalar a Otros** — Da puntos de confianza a usuarios en los que crees:

   - Cada aval aumenta su puntuación de confianza
   - Tus avales construyen tu reputación
   - Gráfico de confianza transparente visible para todos

3. **Desbloquear Crédito** — Puntuaciones de confianza más altas = mejores términos de crédito:
   - Aval comunitario reemplaza verificaciones de crédito tradicionales
   - Gráfico de confianza transparente
   - No se requiere KYC

### Sistema de Invitación

- **Compartir tu Enlace de Invitación** — Obtener URL única para compartir
- **Nuevos Usuarios se Unen** — Pueden avalarte o tú puedes avalarlos
- **Construir tu Red** — Red más fuerte = más oportunidades de crédito

### Beneficios de Puntuación de Confianza

- Acceso a pools de crédito
- Mejores tasas de interés
- Límites de crédito más altos
- Soporte prioritario
- Participación en gobernanza

## Integración DeFi

### Bóvedas de Rendimiento (10-20% APY)

**Depósitos Automáticos:**

- USDC entrante automáticamente va a bóveda
- No se requiere intervención manual
- Experiencia de usuario fluida

**Alto Rendimiento:**

- Ganar 10-20% APY en fondos inactivos
- Seguimiento de rendimiento en tiempo real
- Actualizaciones diarias de ganancias

**Retiros Fáciles:**

- Acceder a tus fondos en cualquier momento
- Liquidación rápida en Stellar
- Bajas tarifas de transacción

**Seguimiento en Tiempo Real:**

- Ver tus ganancias crecer diariamente
- Balance combinado billetera + bóveda
- Distribución de rendimiento transparente

### Protocolos Soportados

- **Blend Protocol** — Préstamos basados en Stellar
- **Stellar AMM** — Pools de creadores de mercado automatizados
- **Integraciones Futuras** — Protocolos adicionales próximamente

## Transparencia y Responsabilidad

### Transparencia en Cadena

**Transparencia Completa:**

- Todas las transacciones en blockchain Stellar
- Seguimiento de balance en tiempo real vía API Stellar Horizon
- Registros de distribución de rendimiento
- Historial de asignación de crédito
- Cambios de puntuación de confianza rastreados

### Rastro de Auditoría

**Cada Acción Registrada:**

- Contribuciones de donantes
- Depósitos y retiros de bóveda
- Generación y distribución de rendimiento
- Emisión de crédito y reembolsos
- Cambios de puntuación de confianza
- Progreso educativo
- Actividades de aval

### Prueba de Asignación

- **TRUFA Proof of Allocation** — Visibilidad completa de transacciones
- **Seguimiento en Tiempo Real** — Actualizaciones en vivo de todas las operaciones
- **Libro Mayor Público** — Todos los registros en blockchain Stellar
- **Impacto Verificable** — Métricas y resultados transparentes

## Métricas de Impacto

**Resultados Rastreables:**

- Número de emprendedores financiados
- Crédito total distribuido
- Tasas de reembolso
- Mejoras de puntuación de confianza
- Crecimiento comunitario
- Tasas de completitud educativa
- Rendimiento generado para sostenibilidad
- Distribución geográfica del impacto

## Roadmap

### ✅ Fase 1: Fundación (Completada)

- Autenticación Passkeys
- Creación de billetera Stellar
- Puntos de confianza y aval
- UI/UX básica

### 🚧 Fase 2: Integración DeFi (En Progreso)

- Configuración de activo USDC
- Integración de bóveda de rendimiento
- Lógica de auto-depósito
- Agregación de balance

### 📅 Fase 3: Portal de Educación

- Módulos de cursos
- Seguimiento de progreso
- Sistema de certificación
- Desbloqueo de crédito

### 📅 Fase 4: Pools de Crédito

- Contratos de crédito descentralizados
- Sistema de desembolso
- Seguimiento de reembolsos
- Integración de puntuación de confianza

### 📅 Fase 5: Características Avanzadas

- Soporte multi-activos
- Enlaces de pago
- OCR de recibos
- Asistente financiero IA

---

**¿Listo para ser parte de la solución?** Únete a Sozu Capital y ayuda a transformar donaciones en empoderamiento a través de tecnología blockchain, confianza comunitaria e inclusión financiera.
