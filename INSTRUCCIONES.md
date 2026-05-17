# 📱 Cómo instalar FinanceOS en tu celular
## Guía paso a paso — GitHub Pages (Gratis)

---

## Lo que necesitas
- Una cuenta de GitHub (gratis en github.com)
- Los 4 archivos de esta carpeta:
  - `index.html`
  - `manifest.json`
  - `sw.js`
  - `icons/icon-192.png`
  - `icons/icon-512.png`

---

## Paso 1 — Crear cuenta en GitHub
1. Ve a **github.com** y regístrate (es gratis)
2. Confirma tu correo

---

## Paso 2 — Crear un repositorio
1. Click en el botón verde **"New"** (o el ícono +)
2. Ponle nombre, por ejemplo: `financeOS`
3. Déjalo en **Public**
4. Click en **"Create repository"**

---

## Paso 3 — Subir los archivos
1. En tu repositorio vacío, click en **"uploading an existing file"**
2. Arrastra y suelta **todos los archivos y la carpeta `icons`**
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
3. Click en **"Commit changes"**

---

## Paso 4 — Activar GitHub Pages
1. Ve a **Settings** (en tu repositorio)
2. En el menú izquierdo, click en **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", selecciona **"main"** y carpeta **"/ (root)"**
5. Click en **"Save"**
6. Espera 1-2 minutos — GitHub te dará una URL como:
   `https://TU_USUARIO.github.io/financeOS/`

---

## Paso 5 — Instalar en tu celular

### 📱 Android (Chrome)
1. Abre la URL en Chrome en tu celular
2. Espera unos segundos — aparecerá un banner en la pantalla: **"Instalar FinanceOS"**
3. Toca **"Instalar"**
4. ¡Listo! Aparecerá el ícono en tu pantalla de inicio

   *Si no aparece el banner:*
   - Toca el menú ⋮ (tres puntos arriba a la derecha)
   - Busca **"Agregar a pantalla de inicio"** o **"Instalar app"**

### 🍎 iPhone / iPad (Safari)
1. Abre la URL en **Safari** (importante: no Chrome)
2. Toca el botón de compartir **⬆** (abajo en el centro)
3. Desliza y busca **"Agregar a pantalla de inicio"**
4. Ponle nombre y toca **"Agregar"**
5. ¡Listo! Aparecerá el ícono en tu pantalla de inicio

---

## ✅ Resultado final
- La app se abre como una aplicación nativa (sin barra del navegador)
- **Funciona sin internet** — los datos están guardados en tu celular
- **Los datos persisten** entre sesiones
- Puedes exportar/importar JSON como respaldo

---

## ❓ Preguntas frecuentes

**¿Mis datos están seguros?**
Sí. Todos los datos se guardan localmente en TU celular (localStorage). No se envían a ningún servidor.

**¿Puedo actualizarla?**
Sí. Si en el futuro actualizas el `index.html` en GitHub, la app se actualiza automáticamente la próxima vez que la abras con internet.

**¿Funciona en tabletas?**
Sí, el diseño es responsivo y funciona en cualquier tamaño de pantalla.

**¿La pueden ver otras personas?**
El repositorio de GitHub es público pero nadie tiene acceso a tus datos (están solo en tu celular).

---

## Soporte
Si algo no funciona, revisa que los 5 archivos estén correctamente subidos y que GitHub Pages esté activado en Settings > Pages.
