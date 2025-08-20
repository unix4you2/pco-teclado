# ![](https://github.com/unix4you2/practico/raw/master/img/logo.png) Teclado Virtual Responsive

Este es un proyecto derivado de [Práctico Framework](https://www.practico.org//) articulable como plugin o complemento

Pruébalo en línea directamente en [Este enlace](https://teclado.practico.run)

## Descripción

Esta es una aplicación de teclado virtual creada con **Bootstrap 5** y **JavaScript** que permite ingresar texto en un campo de texto determinado desde un teclado en pantalla. La aplicación está diseñada para ser responsive y funciona exclusivamente en modo oscuro para una apariencia moderna y cómoda en ambientes con poca luz.

## Características principales

- Teclado virtual totalmente responsive y optimizado para dispositivos móviles y escritorio.
- Función `initKeyboard(targetElementId)` que permite especificar el campo de texto donde se insertará el texto.
- Soporte para 12 distribuciones de teclado comunes y populares:
  - Español Latinoamericano (por defecto)
  - Inglés (US y UK)
  - Francés (AZERTY)
  - Alemán (QWERTZ)
  - Italiano
  - Portugués (Brasil)
  - Ruso (Cirílico)
  - Árabe
  - Japonés (Romaji)
  - Coreano (Romaji)
  - Chino Simplificado (Pinyin)
- Teclas especiales: Shift (mayúsculas temporales), Caps Lock (mayúsculas permanentes), Tab, Enter, Backspace, Espacio.
- Botón "Limpiar" para borrar todo el contenido del campo.
- Botón "Copiar" para copiar el contenido del campo al portapapeles con feedback visual.
- Interacción correcta y realista entre Shift y Caps Lock.
- Indicadores visuales claros para estado de Shift y Caps Lock.
- Diseño compacto y funcional con sección de selección de teclado y estado del teclado optimizados.
- Modo oscuro exclusivo usando Bootstrap 5 para una experiencia visual moderna y cómoda.

## Uso

1. Abrir el archivo `index.html` en un navegador moderno.
2. Seleccionar la distribución de teclado deseada desde el desplegable.
3. Escribir utilizando el teclado virtual; el texto aparecerá en el área de texto.
4. Usar Shift o Caps Lock para modificar la entrada en mayúsculas o símbolos.
5. Utilizar el botón "Limpiar" para borrar la caja de texto.
6. Utilizar el botón "Copiar" para copiar el contenido al portapapeles.
7. Cambiar la distribución de teclado en cualquier momento para probar otros idiomas.

## Requisitos

- Navegador moderno con soporte para JavaScript y API del portapapeles (para copiar).
- No requiere servidor, funciona localmente.

## Estructura del proyecto

- `index.html` - Archivo principal con la interfaz y marcado HTML.
- `style.css` - Estilos CSS para modo oscuro y diseño responsive.
- `app.js` - Lógica JavaScript para manejar distribuciones, entrada, Shift/Caps Lock, copiar, limpiar y renderizado dinámico del teclado.

## Desarrollo y personalización

- Las distribuciones de teclado están definidas en `app.js` bajo el objeto `keyboardLayouts`.
- Se puede agregar más idiomas o personalizar teclas modificando este objeto.
- El teclado responde dinámicamente a los cambios en el selector y a los botones especiales.
- La función `initKeyboard(targetElementId)` inicializa el teclado para un campo dado, aunque el proyecto actual tiene un solo campo de texto.
cta al desarrollador o abre un issue en el repositorio.


