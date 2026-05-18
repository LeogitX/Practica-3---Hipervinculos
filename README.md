# Ejercicios Crear hipervínculos

## 🐳 Configuración del Entorno de Desarrollo

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
4. Sigue las instrucciones de configuración inicial

#### En Linux:
1. Sigue las instrucciones oficiales para tu distribución: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
2. Asegúrate de configurar Docker para ejecutarse sin sudo:
   ```bash
   sudo usermod -aG docker $USER
   ```
3. Cierra sesión y vuelve a iniciar sesión

### Paso 2: Instalar Visual Studio Code

1. Descarga VS Code desde [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Instala la extensión **Dev Containers** (ms-vscode-remote.remote-containers)

### Paso 3: Abrir el Proyecto en DevContainer

1. Clona este repositorio en tu máquina local
2. Abre la carpeta del proyecto en VS Code
3. Cuando VS Code detecte la configuración del devcontainer, aparecerá una notificación
4. Haz clic en **"Reopen in Container"** o usa el comando:
   - Presiona `F1` o `Ctrl+Shift+P` (Cmd+Shift+P en Mac)
   - Escribe: `Dev Containers: Reopen in Container`
   - Selecciona la opción y presiona Enter
5. Espera a que el contenedor se construya (puede tardar varios minutos la primera vez)
6. Una vez listo, VS Code se recargará dentro del contenedor

### Verificar que Todo Funciona

```bash
npm install
npm test
```

Si ves las pruebas ejecutándose, ¡todo está listo! 🎉

---

# Ejercicios Crear hipervínculos

## 👀 Cómo ver los ejercicios

### Usando Live Server (Recomendado)
1. Instala la extensión **Live Server** en VS Code
2. Abre el archivo que quieras visualizar (ejemplo: `src/index.html` o `src/tienda-online/index.html`)
3. Haz clic derecho en el archivo y selecciona **"Open with Live Server"
4. Tu navegador se abrirá automáticamente mostrando el ejercicio

### Abrir directamente
- Navega a la carpeta correspondiente y abre el archivo HTML en tu navegador

---

Este repositorio contiene una carpeta llamada "ejercicios" donde encotrarás un archivo por cada ejercicio a realziar. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática.

## Estructura del Proyecto

```
./
├── ejercicios/          # Ejercicios a realizar.
├── tests/              # Pruebas automatizadas (no tocar ni modificar nada).
├── .github/workflows/  # Configuración de GitHub Actions (no tocar ni modificar nada).
└── package.json        # Dependencias para las pruebas (no tocar ni modificar nada).
```

## Ejercicios

### Ejercicio 10: Tienda Online - Parte 1: Estructura y Página Principal (35 puntos)
Crea la estructura base de una tienda online y desarrolla la página principal con productos destacados. Este ejercicio establece las bases del proyecto completo.

### Ejercicio 11: Tienda Online - Parte 2: Catálogo y Páginas Informativas (35 puntos)
Desarrolla las páginas de catálogo de productos, información de contacto y acerca de la empresa. Practica la navegación entre páginas y el uso de rutas relativas.

### Ejercicio 12: Tienda Online - Parte 3: Carrito de Compras (30 puntos)
Completa la tienda online con la página del carrito de compras y verifica que todos los recursos estén correctamente vinculados. Este ejercicio integra todo el proyecto.

## Ejecución de Pruebas

Para ejecutar las pruebas localmente:

```bash
npm install
npm test
```

## Cómo Usar Este Repositorio

1. Clona el repositorio en tu máquina local o codespace.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias ejecutando `npm install`.
4. Completa los ejercicios siguiendo las instrucciones en los archivos .md de cada ejercicio ubicados en la carpeta ejercicios.
5. Ejecuta las pruebas utilizando `npm test` para verificar tu trabajo.

¡Buena suerte y diviértete aprendiendo HTML!