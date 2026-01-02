# 🌐 index.html — Página pública de Nebulaudio

## Propósito
Interfaz para creadores de contenido: explorar, preseleccionar y comprar música humana (MP3 + PDF) por $1.50.

## Flujo principal
1. El usuario presiona **“Explorar música humana”** → se carga una obra aleatoria.
2. Puede **guardar hasta 3 obras** para comparar.
3. Al elegir una y presionar **“Descargar MP3 + PDF ($1.50)”**, se redirige a `?paid=1`.
4. Se muestra el plan **Express** con la obra preseleccionada y el botón de PayPal real.

## Estructura de datos (en `LIBRARY`)
Cada obra debe tener estos campos (obligatorios para escalabilidad):

| Campo | Ejemplo | Uso |
|-------|---------|-----|
| `id` | `"bastian"` | Identificador único (slug) |
| `title` | `"Bastián"` | Nombre visible |
| `composer` | `"Carlos Reyes (CERT)"` | Nombre público |
| `composer_id` | `"carlos-reyes-cert"` | **Clave para regalías y tracking** (único, sin espacios) |
| `composer_paypal` | `"certproducciones@gmail.com"` | Para cálculo automático de pagos |
| `style_decade` | `"2020s"` | Futuros filtros por época (1930s–2020s) |
| `audio_folder` | `"audio/carlos-reyes"` | Ruta al MP3 |
| `pdf_folder` | `"pdf/carlos-reyes"` | Ruta al PDF |
| `file_mp3`, `file_pdf` | `"bastian.mp3"` | Archivos reales |

✅ **Escalable**: puedes añadir obras de otros compositores solo cambiando `composer_id` y las rutas.

## Integraciones activas
- ✅ **PayPal Express**: botón real (hosted), transaccionalmente seguro.
- ✅ **Formspree**: modal de registro de compositores (funcional).
- ✅ **SessionStorage**: mantiene la obra seleccionada al navegar.

## Para actualizar
- Añade nuevas obras en el array `LIBRARY`.
- Sube los archivos a las carpetas indicadas (`audio/`, `pdf/`).
- No se requiere backend: todo es estático.

© 2026 Nebulaudio — CERT
