# Changelog - Teclado Virtual Responsive

## [1.3.0] - 2025-08-19
### Mejoras
- Interfaz compacta optimizada para selector de distribuciones y estado del teclado (Shift, Caps Lock).
- Botón "Copiar" corregido: funciona correctamente con la API del portapapeles, incluye fallback para navegadores antiguos y muestra feedback visual al usuario.
- Espaciado y distribución visual mejorados para mejor aprovechamiento del espacio sin perder legibilidad.
- Indicadores de estado de Shift y Caps Lock en una sola línea compacta y con estilo mejorado.
- Mantiene modo oscuro exclusivo y diseño responsive para múltiples resoluciones.

### Correcciones
- Se corrigió el funcionamiento de las teclas Shift y Caps Lock para que afecten correctamente la entrada de texto (mayúsculas y símbolos).
- Eliminación de incongruencias visuales y funcionales en el teclado virtual.
- Ajustes en la gestión de eventos para mejorar la experiencia en dispositivos táctiles.

### Características existentes mantenidas
- Función `initKeyboard(targetElementId)` para especificar el destino de entrada.
- Soporte para 12 distribuciones de teclado comunes incluyendo Español Latinoamericano, Inglés (US/UK), Francés, Alemán, Italiano, Portugués (Brasil), Ruso, Árabe, Japonés (Romaji), Coreano (Romaji) y Chino Simplificado (Pinyin).
- Teclas especiales: Backspace, Enter, Tab, Space, Limpiar, Copiar.
- Soporte total para mayúsculas temporales (Shift) y permanentes (Caps Lock), incluyendo interacción Shift + Caps Lock.
- Diseño accesible y usable en móviles y desktop.
- Uso exclusivo del tema oscuro mediante Bootstrap 5.

---

## [1.2.0] - 2025-08-19
### Mejoras
- Se mejoró el manejo del estado visual y funcional de Shift y Caps Lock.
- Se añadió botón "Limpiar" para borrar todo el texto.
- Se añadió botón "Copiar" para copiar el texto directamente.
- Más distribuciones de teclado añadidas a la aplicación.

### Correcciones
- Corrección de bugs menores en la funcionalidad del teclado.
  
---

## [1.1.0] - 2025-08-19
### Cambios
- Primera versión compacta con un solo campo de texto y múltiples distribuciones.
- Teclas Shift y Caps Lock con funcionamiento visual básico.
- Selector de idiomas funcional.

---

## [1.0.0] - 2025-08-19
### Versión inicial
- Teclado físico virtual responsive con soporte para selección de varias distribuciones.
- Uso de Bootstrap 5 en modo oscuro.
- Múltiples cajas de texto para pruebas.
- Teclas básicas incluyendo Backspace, Enter y Shift.

