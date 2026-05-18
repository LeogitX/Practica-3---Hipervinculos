# Ejercicio 10: Tienda Online - Parte 1: Estructura y Página Principal

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

# Ejercicio 10: Tienda Online - Parte 1: Estructura y Página Principal

## 👀 Cómo ver este ejercicio

### Opción 1: Live Server (Recomendado)
1. Instala la extensión **Live Server** en VS Code
2. Abre el archivo `src/tienda-online/index.html`
3. Haz clic derecho y selecciona **"Open with Live Server"**
4. Tu navegador se abrirá automáticamente mostrando la tienda online

### Opción 2: Abrir directamente
1. Navega a la carpeta `src/tienda-online/`
2. Abre `index.html` en tu navegador preferido

---

## Objetivo
Crear la estructura base de una tienda online y desarrollar la página principal con productos destacados. Este es el primer paso para construir un sitio web profesional completo.

## 🎯 Conceptos a evaluar:
- Estructura de carpetas profesional para proyectos web.
- Organización de recursos multimedia.
- Estructura semántica HTML.
- Navegación básica.
- Buenas prácticas en nomenclatura de archivos.

## Instrucciones

### 1. Estructura de Carpetas

Crear la siguiente estructura dentro de `src/tienda-online/`:

```
src/tienda-online/
├── index.html
├── pages/
├── assets/
│   ├── images/
│   │   ├── productos/
│   │   ├── logos/
│   │   └── banners/
│   ├── css/
│   └── js/
└── data/
```

### 2. Crear la Página Principal (index.html)

#### A. Estructura HTML Básica
- **Título**: "TDHStore - Tu Tienda de Tecnología"
- Incluir las etiquetas básicas: `<!DOCTYPE html>`, `<html lang="es">`, `<head>`, `<body>`
- Vincular el archivo CSS: `assets/css/styles.css`
- Vincular el archivo JavaScript: `assets/js/main.js`

#### B. Contenido del Header
- Logo de la tienda (enlace a index.html)
- Navegación principal con enlaces a:
  - Inicio
  - Productos (pages/productos.html)
  - Acerca de (pages/acerca-de.html)
  - Contacto (pages/contacto.html)
  - Carrito (pages/carrito.html)

#### C. Contenido Principal
- **Banner de bienvenida**: Imagen principal con título "Bienvenido a TDHStore"
- **Sección de productos destacados**: 
  - Título de sección
  - Mínimo 3 productos con:
    - Imagen del producto
    - Nombre del producto
    - Descripción breve
    - Precio
    - Enlace "Agregar al carrito" (que apunte a pages/carrito.html)
  - Botón "Ver todos los productos" que enlace a pages/productos.html

#### D. Footer
- Información de contacto (email, teléfono)
- Enlaces rápidos a las páginas principales
- Derechos de autor

### 3. Crear Archivos de Recursos

#### A. assets/css/styles.css
- Crear el archivo (puede estar vacío por ahora o con estilos básicos)

#### B. assets/js/main.js
- Crear el archivo (puede estar vacío o con un console.log)

#### C. data/productos.json
- Crear el archivo (puede estar vacío o con un array de productos)

### 4. Requisitos de Imágenes

#### Imágenes Obligatorias:
- **Logo de la tienda**: `assets/images/logos/logo.png` (o .jpg, .svg)
- **Banner principal**: `assets/images/banners/banner-principal.jpg`
- **Productos destacados** (mínimo 3): 
  - `assets/images/productos/producto-1.jpg`
  - `assets/images/productos/producto-2.jpg`
  - `assets/images/productos/producto-3.jpg`

#### Especificaciones:
- Todas las imágenes deben tener atributo `alt` descriptivo
- Usar rutas relativas correctas
- Nombres de archivo sin espacios, en minúsculas, con guiones

## Requisitos Técnicos

### HTML:
- Estructura semántica con `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Uso correcto de headings (h1, h2, h3...)
- Atributos `alt` en todas las imágenes
- Enlaces funcionales (aunque las páginas destino aún no existan)

### Rutas:
- **Desde index.html a pages/**: `pages/productos.html`
- **Hacia assets desde index.html**: `assets/css/styles.css`
- Todas las rutas deben ser relativas

### Accesibilidad:
- Todos los enlaces deben tener texto descriptivo
- Imágenes con atributos `alt` significativos
- Estructura de headings lógica (h1 para título principal, h2 para secciones, etc.)

## Verificación

Para verificar la estructura de carpetas:
```bash
tree src/tienda-online/
```

Para ejecutar las pruebas:
```bash
npm test tests/ejercicio/10-estructura-tienda.test.js
```

## Entrega

Una vez completado el ejercicio:
1. Haz commit de tus cambios
2. Súbelos a tu repositorio de GitHub
3. Verifica la página en un navegador local con Live Server

## Criterios de Evaluación

- ✅ Estructura de carpetas completa y organizada
- ✅ Página index.html con estructura HTML básica correcta
- ✅ Header con logo y navegación
- ✅ Sección de productos destacados con mínimo 3 productos
- ✅ Footer con información de contacto
- ✅ Enlaces funcionales (rutas correctas)
- ✅ Imágenes con atributos alt
- ✅ Archivos CSS y JS creados y vinculados
- ✅ Uso semántico correcto de HTML

## Conceptos Clave

- **Estructura de proyecto**: Organización profesional de archivos y carpetas
- **Rutas relativas**: Navegación entre archivos del mismo proyecto
- **Semántica HTML**: Uso de etiquetas con significado (header, nav, main, footer)
- **Separación de responsabilidades**: HTML, CSS y JS en archivos separados

¡Adelante con la primera parte de tu tienda online!
