# Ejercicio 12: Tienda Online - Parte 3: Carrito de Compras

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

# Ejercicio 12: Tienda Online - Parte 3: Carrito de Compras

## 👀 Cómo ver este ejercicio

### Opción 1: Live Server (Recomendado)
1. Instala la extensión **Live Server** en VS Code
2. Abre el archivo `src/tienda-online/pages/carrito.html`
3. Haz clic derecho y selecciona **"Open with Live Server"**
4. Verifica la funcionalidad del carrito

### Opción 2: Abrir directamente
1. Navega a la carpeta `src/tienda-online/pages/`
2. Abre `carrito.html` en tu navegador preferido

---

## Objetivo
Completar la tienda online con la página del carrito de compras y verificar que todos los recursos estén correctamente vinculados. Este es el ejercicio final que integra todo el proyecto.

## 🎯 Conceptos a evaluar:
- Tablas HTML
- Integración completa de navegación
- Vinculación de recursos CSS/JS
- Accesibilidad web
- Proyecto completo y funcional

## Prerequisitos
- Haber completado el **Ejercicio 10** (estructura + index.html)
- Haber completado el **Ejercicio 11** (páginas de productos, contacto y acerca-de)

## Instrucciones

### 1. Crear Página del Carrito (pages/carrito.html)

#### A. Estructura Base
- **Título**: "Carrito - TDHStore"
- Header con logo y navegación (consistente con otras páginas)
- Footer (consistente con otras páginas)

#### B. Contenido Principal

##### Tabla de Productos
Crear una tabla con las siguientes columnas:
- Producto (nombre)
- Precio
- Cantidad (input type="number")
- Subtotal
- Acción (botón eliminar)

La tabla debe incluir **mínimo 2-3 productos de ejemplo** para demostración.

##### Resumen de Compra
- Subtotal
- Impuestos (ejemplo: 16%)
- Envío (puede ser "Gratis")
- **Total** (destacado)

##### Botones de Acción
- Botón "Continuar Comprando" → enlace a `productos.html`
- Botón "Proceder al Pago" (puede ser un botón simple sin acción)

#### C. Estructura de la Tabla
```html
<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
        </tr>
    </thead>
    <tbody>
        <!-- Filas de productos -->
    </tbody>
</table>
```

### 2. Verificar Vinculación de Recursos

#### A. En TODAS las páginas HTML verificar:
- ✅ Enlace a CSS: `<link rel="stylesheet" href="../assets/css/styles.css">` (desde pages/)
- ✅ Enlace a CSS: `<link rel="stylesheet" href="assets/css/styles.css">` (desde index.html)
- ✅ Script JS: `<script src="../assets/js/main.js"></script>` (desde pages/)
- ✅ Script JS: `<script src="assets/js/main.js"></script>` (desde index.html)

#### B. Asegurar que existan:
- `assets/css/styles.css` (puede tener estilos básicos o estar en blanco)
- `assets/js/main.js` (puede tener código básico o solo un console.log)
- `data/productos.json` (puede ser un array vacío o con datos de productos)

### 3. Navegación Completa

Verificar que desde CUALQUIER página se pueda:
- Volver al inicio (click en logo o enlace "Inicio")
- Ir a productos
- Ir a contacto
- Ir a acerca-de
- Ir al carrito

### 4. Accesibilidad Final

Revisar en TODAS las páginas:
- ✅ Todas las imágenes tienen atributo `alt`
- ✅ Estructura de headings lógica (h1 → h2 → h3)
- ✅ Enlaces tienen texto descriptivo
- ✅ Formularios tienen labels
- ✅ Navegación consistente

## Requisitos Técnicos

### HTML del Carrito:
- Tabla semántica con `<thead>` y `<tbody>`
- Inputs de tipo `number` para cantidades
- Botones y enlaces claramente diferenciados
- Resumen de compra visible y destacado

### Rutas:
- Todas las rutas relativas correctas
- CSS y JS vinculados en todas las páginas
- Navegación funcional completa

### Integración:
- El proyecto debe funcionar como un sitio web completo
- Todas las páginas deben estar interconectadas
- Recursos compartidos (CSS, JS) accesibles desde todas las páginas

## Verificación

Para verificar que todas las páginas estén completas:
```bash
find src/tienda-online -name "*.html" -type f
```

Para verificar imágenes:
```bash
find src/tienda-online/assets/images -type f
```

Para ejecutar las pruebas:
```bash
npm test tests/ejercicio/12-carrito-tienda.test.js
```

Para ejecutar TODAS las pruebas del proyecto:
```bash
npm test tests/ejercicio/10-estructura-tienda.test.js tests/ejercicio/11-paginas-tienda.test.js tests/ejercicio/12-carrito-tienda.test.js
```

## Entrega

Una vez completado:
1. Verifica que todas las pruebas pasen
2. Navega por todo el sitio en el navegador
3. Haz commit de tus cambios
4. Súbelos a tu repositorio de GitHub

## Criterios de Evaluación

- ✅ Página carrito.html con tabla de productos
- ✅ Tabla con estructura semántica correcta
- ✅ Resumen de compra visible
- ✅ Botones de acción funcionales
- ✅ CSS vinculado en todas las páginas
- ✅ JavaScript vinculado en todas las páginas
- ✅ Navegación completa funcionando
- ✅ Proyecto integrado y navegable
- ✅ Accesibilidad implementada

## Conceptos Clave

- **Tablas HTML**: Estructura semántica para datos tabulares
- **Integración de proyecto**: Todas las partes trabajando juntas
- **Vinculación de recursos**: CSS y JS compartidos
- **Navegación completa**: Sitio web funcional y navegable
- **Proyecto final**: Aplicación de todos los conceptos aprendidos

## 🎉 ¡Felicitaciones!

Al completar este ejercicio, habrás creado una tienda online completa con:
- Estructura de carpetas profesional
- Múltiples páginas interconectadas
- Navegación funcional
- Recursos organizados
- Código HTML semántico y accesible

¡Has completado exitosamente tu proyecto de tienda online!
