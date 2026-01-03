# 🔐 cert-nebulaudio.html — Oficina Nebulaudio

## Propósito
Panel privado para administración financiera, auditoría y distribución de regalías.  
**Solo para uso interno de CERT**.

## Acceso
- 🔑 Clave local: `cert2025` (configurable en `ACCESS_KEY`).  
- No hay conexión a servidores: todo ocurre en el navegador (localStorage).

## Datos por venta registrada
Cada transacción guarda:

```js
{
  transaction_id: "a1b2c3d4...",  // UUID v4 — único e inmutable
  date: "2026-01-03",
  timestamp: "2026-01-03T15:30:45Z",
  amount: 1.50,
  platformCut: 0.225,            // 15%
  composerEarn: 1.275,           // 85%
  is_ai: false,                  // futuro: true para ventas de IA
  composition: {
    id: "bastian",
    title: "Bastián",
    composer: "Carlos Reyes (CERT)",
    composer_id: "carlos-reyes-cert",   // ← clave para asignar regalías
    composer_paypal: "certproducciones@gmail.com"
  }
}