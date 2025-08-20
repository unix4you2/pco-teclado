// Virtual Keyboard Application - JavaScript con corrección de Shift y Caps Lock
// Datos de distribuciones de teclado
const keyboardLayouts = {
    "es": {
        "name": "Español Latinoamericano",
        "rows": [
            ["|", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "¿", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "´", "+"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "{", "}", "Enter"],
            ["Shift", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "|": "°", "1": "!", "2": "\"", "3": "#", "4": "$", "5": "%", "6": "&", "7": "/", "8": "(", "9": ")", "0": "=", "'": "?", "¿": "¡",
            "´": "¨", "+": "*", "{": "[", "}": "]", "<": ">", ",": ";", ".": ":", "-": "_"
        }
    },
    "en-us": {
        "name": "English (US)",
        "rows": [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
            ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "[": "{", "]": "}", ";": ":", "'": "\"", "\\": "|", ",": "<", ".": ">", "/": "?"
        }
    },
    "en-uk": {
        "name": "English (UK)",
        "rows": [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "#", "Enter"],
            ["Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "`": "¬", "1": "!", "2": "\"", "3": "£", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "[": "{", "]": "}", ";": ":", "'": "@", "#": "~", "\\": "|", ",": "<", ".": ">", "/": "?"
        }
    },
    "fr": {
        "name": "Français (AZERTY)",
        "rows": [
            ["²", "&", "é", "\"", "'", "(", "-", "è", "_", "ç", "à", ")", "=", "Backspace"],
            ["Tab", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$"],
            ["Caps", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "Enter"],
            ["Shift", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "&": "1", "é": "2", "\"": "3", "'": "4", "(": "5", "-": "6", "è": "7", "_": "8", "ç": "9", "à": "0",
            "^": "¨", "$": "£", "*": "µ", "<": ">", ",": "?", ";": ".", ":": "/", "!": "§"
        }
    },
    "de": {
        "name": "Deutsch (QWERTZ)",
        "rows": [
            ["^", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "ß", "´", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "+"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "#", "Enter"],
            ["Shift", "<", "y", "x", "c", "v", "b", "n", "m", ",", ".", "-", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "^": "°", "1": "!", "2": "\"", "3": "§", "4": "$", "5": "%", "6": "&", "7": "/", "8": "(", "9": ")", "0": "=", "ß": "?", "´": "`",
            "ü": "Ü", "+": "*", "ö": "Ö", "ä": "Ä", "#": "'", "<": ">", ",": ";", ".": ":", "-": "_"
        }
    },
    "it": {
        "name": "Italiano",
        "rows": [
            ["\\", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "ì", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "è", "+"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ò", "à", "ù", "Enter"],
            ["Shift", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "\\": "|", "1": "!", "2": "\"", "3": "£", "4": "$", "5": "%", "6": "&", "7": "/", "8": "(", "9": ")", "0": "=", "'": "?", "ì": "^",
            "è": "é", "+": "*", "ò": "ç", "à": "°", "ù": "§", "<": ">", ",": ";", ".": ":", "-": "_"
        }
    },
    "pt-br": {
        "name": "Português (Brasil)",
        "rows": [
            ["'", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "´", "["],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ç", "~", "]", "Enter"],
            ["Shift", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", ";", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "'": "\"", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "¨", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "´": "`", "[": "{", "~": "^", "]": "}", "\\": "|", ",": "<", ".": ">", ";": ":"
        }
    },
    "ru": {
        "name": "Русский",
        "rows": [
            ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            ["Caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "Enter"],
            ["Shift", "/", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "ё": "Ё", "1": "!", "2": "\"", "3": "№", "4": ";", "5": "%", "6": ":", "7": "?", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "й": "Й", "ц": "Ц", "у": "У", "к": "К", "е": "Е", "н": "Н", "г": "Г", "ш": "Ш", "щ": "Щ", "з": "З", "х": "Х", "ъ": "Ъ",
            "ф": "Ф", "ы": "Ы", "в": "В", "а": "А", "п": "П", "р": "Р", "о": "О", "л": "Л", "д": "Д", "ж": "Ж", "э": "Э", "\\": "/",
            "/": "?", "я": "Я", "ч": "Ч", "с": "С", "м": "М", "и": "И", "т": "Т", "ь": "Ь", "б": "Б", "ю": "Ю", ".": ","
        }
    },
    "ar": {
        "name": "العربية",
        "rows": [
            ["ذ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د"],
            ["Caps", "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "\\", "Enter"],
            ["Shift", "/", "ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "ذ": "ّ", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "ض": "َ", "ص": "ً", "ث": "ُ", "ق": "ٌ", "ف": "لإ", "غ": "إ", "ع": "`", "ه": "÷", "خ": "×", "ح": "؛", "ج": "<", "د": ">",
            "ش": "\\", "س": "ِ", "ي": "]", "ب": "[", "ل": "لأ", "ا": "أ", "ت": "ـ", "ن": "،", "م": "/", "ك": ":", "ط": "\"", "\\": "|"
        }
    },
    "ja": {
        "name": "日本語 (Romaji)",
        "rows": [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "^", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "@", "["],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", ":", "]", "Enter"],
            ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\\", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "`": "~", "1": "!", "2": "\"", "3": "#", "4": "$", "5": "%", "6": "&", "7": "'", "8": "(", "9": ")", "0": "", "-": "=", "^": "~",
            "@": "`", "[": "{", ":": "*", "]": "}", ";": "+", ",": "<", ".": ">", "/": "?", "\\": "_"
        }
    },
    "ko": {
        "name": "한국어 (Romaji)",
        "rows": [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
            ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "[": "{", "]": "}", ";": ":", "'": "\"", "\\": "|", ",": "<", ".": ">", "/": "?"
        }
    },
    "zh": {
        "name": "中文 (Pinyin)",
        "rows": [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "Enter"],
            ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
            ["Limpiar", "Space", "Copiar"]
        ],
        "shiftMap": {
            "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "(", "0": ")", "-": "_", "=": "+",
            "[": "{", "]": "}", ";": ":", "'": "\"", "\\": "|", ",": "<", ".": ">", "/": "?"
        }
    }
};

// Estado global del teclado
let keyboardState = {
    currentLayout: 'es',
    shiftPressed: false,
    capsLockActive: false,
    isInitialized: false
};

// Referencia al campo de texto
let textInput = null;

// Función para verificar si un carácter es una letra
function isLetter(char) {
    return /[a-zA-ZáéíóúüñÁÉÍÓÚÜÑçêîôûàèùäöüßëïÿæøåĥĵĝĉŝŭйцукенгшщзхъфывапролджэячсмитьбюёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ]/.test(char);
}

// Función principal para renderizar el teclado
function renderKeyboard() {
    console.log('Renderizando teclado con layout:', keyboardState.currentLayout);
    
    const keyboardContainer = document.getElementById('virtualKeyboard');
    if (!keyboardContainer) {
        console.error('Contenedor del teclado no encontrado');
        return;
    }
    
    const layout = keyboardLayouts[keyboardState.currentLayout];
    if (!layout) {
        console.error('Layout no encontrado:', keyboardState.currentLayout);
        return;
    }
    
    // Limpiar contenido anterior
    keyboardContainer.innerHTML = '';
    
    layout.rows.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        
        row.forEach((key) => {
            const keyElement = createKeyElement(key, layout);
            rowDiv.appendChild(keyElement);
        });
        
        keyboardContainer.appendChild(rowDiv);
    });
    
    updateKeyboardIndicators();
    console.log('Teclado renderizado correctamente');
}

// Crear elemento de tecla con lógica corregida
function createKeyElement(key, layout) {
    const keyElement = document.createElement('button');
    keyElement.className = 'key';
    keyElement.type = 'button';
    keyElement.setAttribute('tabindex', '-1');
    
    // Determinar el texto a mostrar en la tecla según el estado actual
    let displayText = getDisplayText(key, layout);
    
    // Teclas especiales
    const specialKeys = ['Backspace', 'Tab', 'Caps', 'Enter', 'Shift', 'Space', 'Limpiar', 'Copiar'];
    if (specialKeys.includes(key)) {
        keyElement.classList.add('special');
        keyElement.classList.add(key.toLowerCase());
        
        // Textos especiales para mostrar
        const specialTexts = {
            'Backspace': '⌫',
            'Tab': '⇥',
            'Caps': 'Caps',
            'Enter': '↵',
            'Shift': '⇧',
            'Space': 'Espacio',
            'Limpiar': 'Limpiar',
            'Copiar': 'Copiar'
        };
        displayText = specialTexts[key] || key;
    }
    
    keyElement.textContent = displayText;
    keyElement.setAttribute('data-key', key);
    
    // Marcar teclas activas - CORREGIDO
    if (key === 'Shift' && keyboardState.shiftPressed) {
        keyElement.classList.add('active');
    } else if (key === 'Caps' && keyboardState.capsLockActive) {
        keyElement.classList.add('active');
    }
    
    // Event listeners
    keyElement.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleKeyPress(key);
    });
    
    return keyElement;
}

// Obtener el texto a mostrar en una tecla - CORREGIDA
function getDisplayText(key, layout) {
    // Si es tecla especial, no cambiar el texto
    const specialKeys = ['Backspace', 'Tab', 'Caps', 'Enter', 'Shift', 'Space', 'Limpiar', 'Copiar'];
    if (specialKeys.includes(key)) {
        return key;
    }
    
    // Si Shift está presionado, mostrar el símbolo del shift si existe
    if (keyboardState.shiftPressed && layout.shiftMap && layout.shiftMap[key]) {
        return layout.shiftMap[key];
    }
    
    // Si es letra y Caps Lock está activo, mostrar en mayúscula
    if (isLetter(key) && keyboardState.capsLockActive) {
        return key.toUpperCase();
    }
    
    return key;
}

// Manejar presión de tecla - LÓGICA CORREGIDA
function handleKeyPress(key) {
    console.log('Tecla presionada:', key, 'Shift:', keyboardState.shiftPressed, 'Caps:', keyboardState.capsLockActive);
    
    if (!textInput) {
        console.error('No hay campo de texto definido');
        return;
    }

    // Agregar efecto visual
    const keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    keyElements.forEach(keyElement => {
        keyElement.classList.add('pressed');
        setTimeout(() => keyElement.classList.remove('pressed'), 150);
    });

    // Manejar teclas especiales
    switch(key) {
        case 'Backspace':
            handleBackspace();
            break;
        case 'Enter':
            insertText('\n');
            break;
        case 'Tab':
            insertText('\t');
            break;
        case 'Space':
            insertText(' ');
            break;
        case 'Shift':
            toggleShift();
            break;
        case 'Caps':
            toggleCapsLock();
            break;
        case 'Limpiar':
            clearText();
            break;
        case 'Copiar':
            copyText();
            break;
        default:
            // LÓGICA CORREGIDA PARA CARACTERES NORMALES
            const outputChar = getOutputCharacter(key);
            insertText(outputChar);
            
            // Desactivar Shift después de escribir un carácter (comportamiento temporal)
            if (keyboardState.shiftPressed) {
                keyboardState.shiftPressed = false;
                updateKeyboardDisplay();
            }
            break;
    }
}

// Obtener el carácter que se debe escribir - FUNCIÓN NUEVA CORREGIDA
function getOutputCharacter(key) {
    const layout = keyboardLayouts[keyboardState.currentLayout];
    
    // Para letras
    if (isLetter(key)) {
        if (keyboardState.capsLockActive && keyboardState.shiftPressed) {
            // Caps Lock ON + Shift = minúscula (comportamiento real de teclado)
            return key.toLowerCase();
        } else if (keyboardState.capsLockActive) {
            // Solo Caps Lock = mayúscula
            return key.toUpperCase();
        } else if (keyboardState.shiftPressed) {
            // Solo Shift = mayúscula
            return key.toUpperCase();
        } else {
            // Ninguno activo = minúscula
            return key.toLowerCase();
        }
    }
    
    // Para símbolos y números
    if (keyboardState.shiftPressed && layout.shiftMap && layout.shiftMap[key]) {
        return layout.shiftMap[key];
    }
    
    return key;
}

// Insertar texto en el campo
function insertText(text) {
    if (!textInput) return;

    const start = textInput.selectionStart || 0;
    const end = textInput.selectionEnd || 0;
    const currentValue = textInput.value || '';
    
    // Insertar texto en la posición del cursor
    const newValue = currentValue.substring(0, start) + text + currentValue.substring(end);
    textInput.value = newValue;
    
    // Mover cursor después del texto insertado
    const newCursorPosition = start + text.length;
    textInput.setSelectionRange(newCursorPosition, newCursorPosition);
    
    // Mantener foco en el campo
    textInput.focus();
    
    // Disparar evento input para compatibilidad
    textInput.dispatchEvent(new Event('input', { bubbles: true }));
}

// Manejar Backspace
function handleBackspace() {
    if (!textInput) return;

    const start = textInput.selectionStart || 0;
    const end = textInput.selectionEnd || 0;
    const currentValue = textInput.value || '';
    
    if (start !== end) {
        // Hay texto seleccionado, eliminarlo
        const newValue = currentValue.substring(0, start) + currentValue.substring(end);
        textInput.value = newValue;
        textInput.setSelectionRange(start, start);
    } else if (start > 0) {
        // Eliminar el carácter anterior
        const newValue = currentValue.substring(0, start - 1) + currentValue.substring(start);
        textInput.value = newValue;
        textInput.setSelectionRange(start - 1, start - 1);
    }
    
    textInput.focus();
    textInput.dispatchEvent(new Event('input', { bubbles: true }));
}

// Toggle Shift - CORREGIDO
function toggleShift() {
    keyboardState.shiftPressed = !keyboardState.shiftPressed;
    console.log('Shift toggled:', keyboardState.shiftPressed);
    updateKeyboardDisplay();
}

// Toggle Caps Lock - CORREGIDO
function toggleCapsLock() {
    keyboardState.capsLockActive = !keyboardState.capsLockActive;
    console.log('Caps Lock toggled:', keyboardState.capsLockActive);
    updateKeyboardDisplay();
}

// Limpiar texto
function clearText() {
    if (!textInput) return;
    textInput.value = '';
    textInput.focus();
    textInput.dispatchEvent(new Event('input', { bubbles: true }));
}

// Copiar texto al portapapeles
function copyText() {
    if (!textInput) return;
    
    if (textInput.value) {
        navigator.clipboard.writeText(textInput.value).then(() => {
            console.log('Texto copiado al portapapeles');
            // Mostrar feedback visual temporal
            const copyButton = document.querySelector('[data-key="Copiar"]');
            if (copyButton) {
                const originalText = copyButton.textContent;
                copyButton.textContent = '✓';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 1000);
            }
        }).catch(err => {
            console.error('Error al copiar texto:', err);
        });
    }
    textInput.focus();
}

// Actualizar visualización del teclado - CORREGIDO
function updateKeyboardDisplay() {
    const layout = keyboardLayouts[keyboardState.currentLayout];
    
    // Re-renderizar todas las teclas para mostrar los cambios
    document.querySelectorAll('.key:not(.special)').forEach(keyElement => {
        const key = keyElement.getAttribute('data-key');
        const newDisplayText = getDisplayText(key, layout);
        keyElement.textContent = newDisplayText;
    });
    
    // Actualizar estado visual de teclas especiales - CORREGIDO
    document.querySelectorAll('.key[data-key="Shift"]').forEach(el => {
        if (keyboardState.shiftPressed) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.key[data-key="Caps"]').forEach(el => {
        if (keyboardState.capsLockActive) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    
    updateKeyboardIndicators();
}

// Actualizar indicadores de estado - CORREGIDO
function updateKeyboardIndicators() {
    const shiftIndicator = document.getElementById('shiftIndicator');
    const capsIndicator = document.getElementById('capsIndicator');
    const layoutIndicator = document.getElementById('layoutIndicator');
    
    if (shiftIndicator) {
        shiftIndicator.textContent = `Shift: ${keyboardState.shiftPressed ? 'ON' : 'OFF'}`;
        if (keyboardState.shiftPressed) {
            shiftIndicator.className = 'status shift-active';
        } else {
            shiftIndicator.className = 'status';
        }
    }
    
    if (capsIndicator) {
        capsIndicator.textContent = `Caps Lock: ${keyboardState.capsLockActive ? 'ON' : 'OFF'}`;
        if (keyboardState.capsLockActive) {
            capsIndicator.className = 'status caps-active';
        } else {
            capsIndicator.className = 'status';
        }
    }
    
    if (layoutIndicator) {
        const currentLayoutName = keyboardLayouts[keyboardState.currentLayout]?.name || 'Desconocido';
        layoutIndicator.textContent = `Layout: ${currentLayoutName}`;
    }
}

// Cambiar distribución de teclado
function changeKeyboardLayout(layoutCode) {
    console.log('Cambiando layout a:', layoutCode);
    
    if (keyboardLayouts[layoutCode]) {
        keyboardState.currentLayout = layoutCode;
        // Resetear estados al cambiar layout
        keyboardState.shiftPressed = false;
        keyboardState.capsLockActive = false;
        
        // Re-renderizar el teclado
        if (keyboardState.isInitialized) {
            renderKeyboard();
        }
        
        console.log('Layout cambiado exitosamente a:', layoutCode);
    } else {
        console.error('Layout no encontrado:', layoutCode);
    }
}

// Event Listeners para inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando aplicación...');
    
    // Obtener referencia al campo de texto
    textInput = document.getElementById('textInput');
    if (!textInput) {
        console.error('Campo de texto no encontrado');
        return;
    }
    
    // Layout selector
    const layoutSelector = document.getElementById('layoutSelector');
    if (layoutSelector) {
        layoutSelector.addEventListener('change', function(event) {
            const selectedLayout = event.target.value;
            console.log('Layout seleccionado:', selectedLayout);
            changeKeyboardLayout(selectedLayout);
        });
        console.log('Layout selector configurado');
    }
    
    // Inicializar con layout por defecto
    keyboardState.currentLayout = 'es';
    
    // Renderizar teclado inicial
    renderKeyboard();
    keyboardState.isInitialized = true;
    
    // Hacer foco en el campo de texto
    textInput.focus();
    
    console.log('Aplicación inicializada correctamente');
});