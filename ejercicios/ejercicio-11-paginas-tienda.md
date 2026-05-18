# Ejercicio 11: Tienda Online - Parte 2: Catálogo y Páginas Informativas

## 🐳 Configuración del Entorno (Requerido antes de comenzar)

### Paso 1: Instalar Docker

#### En Windows:
1. Descarga **Docker Desktop** desde [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Ejecuta el instalador y sigue las instrucciones
3. Reinicia tu computadora si es necesario
4. Abre Docker Desktop y espera a que inicie completamente

#### En macOS:
1. Descarga **Docker Desktop** desde [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Arrastra Docker.app a tu carpeta de Aplicaciones
3. Abre Docker Desktop desde Aplicaciones

#### En Linux:
1. Sigue las instrucciones oficiales: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
2. Configura Docker para ejecutarse sin sudo:
   ```bash
   sudo usermod -aG docker $USER
   ```
3. Cierra sesión y vuelve a iniciar sesión

### Paso 2: Instalar VS Code y la Extensión Dev Containers

1. Descarga VS Code desde [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Instala la extensión **Dev Containers** (ms-vscode-remote.remote-containers)

### Paso 3: Abrir el Proyecto en DevContainer

1. Abre la carpeta del proyecto en VS Code
2. Presiona `F1` o `Ctrl+Shift+P` (Cmd+Shift+P en Mac)
3. Escribe: `Dev Containers: Reopen in Container`
4. Presiona Enter y espera a que el contenedor se construya
5. Una vez listo, estarás trabajando dentro del contenedor

### Verificar Instalación

```bash
npm install
npm test
```

---

# Ejercicio 11: Tienda Online - Parte 2: Catálogo y Páginas Informativas

## 👀 Cómo ver este ejercicio

### Opción 1: Live Server (Recomendado)
1. Instala la extensión **Live Server** en VS Code
2. Abre el archivo `src/tienda-online/pages/productos.html`
3. Haz clic derecho y selecciona **"Open with Live Server"**
4. Navega entre las páginas usando los enlaces

### Opción 2: Abrir directamente
1. Navega a la carpeta `src/tienda-online/pages/`
2. Abre cualquier archivo HTML en tu navegador preferido

---

## Objetivo
Desarrollar las páginas de catálogo de productos, información de contacto y acerca de la empresa. Este ejercicio se enfoca en la navegación entre páginas y el uso de rutas relativas.

## 🎯 Conceptos a evaluar:
- Navegación entre páginas HTML
- Rutas relativas desde subdirectorios
- Consistencia en diseño y estructura
- Catálogo de productos completo
- Formularios HTML básicos

## Prerequisitos
- Haber completado el **Ejercicio 10** (estructura base y index.html)

## Instrucciones

### 1. Crear Página de Productos (pages/productos.html)

#### A. Estructura Base
- **Título**: "Productos - TDHStore"
- Header con logo y navegación (igual que index.html)
- Footer (igual que index.html)

#### B. Contenido Principal
- Título h1: "Catálogo de Productos"
- **Catálogo completo** con mínimo 6 productos
- Cada producto debe incluir:
  - Imagen del producto
  - Nombre (h2 o h3)
  - Descripción detallada
  - Precio destacado
  - Botón "Agregar al carrito" → enlace a `carrito.html`

#### C. Requisitos de Navegación
- Logo enlace a `../index.html`
- Enlaces del menú usando rutas relativas correctas:
  - Inicio: `../index.html`
  - Productos: `productos.html`
  - Acerca de: `acerca-de.html`
  - Contacto: `contacto.html`
  - Carrito: `carrito.html`

### 2. Crear Página de Contacto (pages/contacto.html)

#### A. Estructura Base
- **Título**: "Contacto - TDHStore"
- Header con logo y navegación
- Footer

#### B. Contenido Principal
- Título h1: "Contacto"
- **Formulario de contacto** con:
  - Campo nombre (type="text", required)
  - Campo email (type="email", required)
  - Campo mensaje (textarea, required)
  - Botón de envío
- **Información de la empresa**:
  - Dirección física
  - Teléfono de contacto
  - Email de contacto
  - Horario de atención
- **Imagen de ubicación**: `assets/images/contacto-ubicacion.jpg` (desde pages/ usar `../assets/images/contacto-ubicacion.jpg`)

### 3. Crear Página Acerca de (pages/acerca-de.html)

#### A. Estructura Base
- **Título**: "Acerca de Nosotros - TDHStore"
- Header con logo y navegación
- Footer

#### B. Contenido Principal
- Título h1: "Acerca de Nosotros"
- **Sección Historia**: 
  - Título h2
  - Mínimo 2 párrafos sobre la historia de la empresa
- **Sección Misión y Visión**:
  - Misión (h2 + párrafo)
  - Visión (h2 + párrafo)
- **Sección Valores** (opcional):
  - Lista de valores de la empresa
- **Sección Equipo** (opcional):
  - Información sobre el equipo

### 4. Requisitos de Imágenes

#### Crear las siguientes imágenes:
- **Productos adicionales** (mínimo 3 más, total 6):
  - `assets/images/productos/producto-4.jpg`
  - `assets/images/productos/producto-5.jpg`
  - `assets/images/productos/producto-6.jpg`
- **Ubicación/contacto**:
  - `assets/images/contacto-ubicacion.jpg`

#### Especificaciones:
- Todas con atributo `alt` descriptivo
- Rutas relativas desde `pages/`: `../assets/images/...`

## Requisitos Técnicos

### HTML:
- Estructura semántica consistente en todas las páginas
- Formulario con campos required
- Navegación idéntica en todas las páginas

### Rutas Relativas:
- **Desde pages/ a index.html**: `../index.html`
- **Entre páginas en pages/**: `productos.html`, `contacto.html`, etc.
- **Desde pages/ a assets**: `../assets/css/styles.css`
- El logo debe enlazar siempre al index.html principal

### Consistencia:
- Mismo header en todas las páginas
- Mismo footer en todas las páginas
- Misma navegación en todas las páginas
- Enlaces CSS y JS en todas las páginas

## Verificación

Para verificar que todas las páginas existan:
```bash
ls -la src/tienda-online/pages/
```

Para verificar enlaces:
```bash
grep -r "href=" src/tienda-online/pages/*.html
```

Para ejecutar las pruebas:
```bash
npm test tests/ejercicio/11-paginas-tienda.test.js
```

## Entrega

Una vez completado:
1. Haz commit de tus cambios
2. Súbelos a tu repositorio de GitHub
3. Verifica la navegación entre páginas en el navegador

## Criterios de Evaluación

- ✅ Página productos.html con catálogo de 6 productos
- ✅ Página contacto.html con formulario funcional
- ✅ Página acerca-de.html con información de la empresa
- ✅ Navegación consistente en todas las páginas
- ✅ Enlaces de regreso al inicio funcionando
- ✅ Rutas relativas correctas desde subdirectorio pages/
- ✅ Al menos 6 imágenes de productos en total
- ✅ Imagen de ubicación/contacto
- ✅ Formulario con campos required

## Conceptos Clave

- **Navegación multinivel**: Enlaces entre páginas en diferentes niveles de carpetas
- **Rutas relativas desde subdirectorios**: `../` para subir un nivel
- **Consistencia de diseño**: Mantener la misma estructura en todas las páginas
- **Formularios HTML**: Uso de inputs, textareas y validación básica

¡Continúa construyendo tu tienda online!
