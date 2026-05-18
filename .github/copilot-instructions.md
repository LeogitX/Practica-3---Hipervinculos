# Instrucciones de Copilot - Proyecto de Ejercicios HTML

## Descripción General del Proyecto
Este es un proyecto de **GitHub Classroom** que enseña fundamentos de texto HTML a través de ejercicios automatizados. Los estudiantes completan archivos HTML en `src/` siguiendo instrucciones en `ejercicios/*.md`, validados por pruebas Jest en `tests/ejercicio/*.test.js`.

## Arquitectura y Flujo de Trabajo

### Patrón de Ejercicios
Cada ejercicio sigue esta estructura:
- **Instrucciones**: `ejercicios/ejercicio-N-*.md` - Markdown en español con requisitos detallados
- **Trabajo del Estudiante**: `src/ejercicio-N.html` - Archivos HTML que crean los estudiantes
- **Validación**: `tests/ejercicio/N-*.test.js` - Pruebas Jest usando JSDOM para validación del DOM

**Crítico**: Las pruebas verifican tanto la estructura del sistema de archivos (carpetas) COMO el contenido HTML (elementos del DOM).

### Estrategia de Pruebas
Las pruebas validan en capas:
1. **Existencia de archivos/carpetas** - Verificaciones con `fs.existsSync()` para directorios requeridos
2. **Estructura HTML** - Validación regex para `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, `<title>`
3. **Elementos DOM** - Parseo JSDOM + `querySelectorAll()` para elementos semánticos

Ejecutar pruebas individuales: `npm test tests/ejercicio/8-fundamentos-texto.test.js`

## Convenciones Clave

### Nomenclatura de Archivos
- Archivos HTML de ejercicios: `src/ejercicio-N.html` (numerados, nomenclatura en español)
- Archivos de prueba coinciden con números de ejercicio: `8-fundamentos-texto.test.js` prueba `ejercicio-8.html`

### Requisitos HTML (Todos los Ejercicios)
Cada archivo HTML del estudiante debe incluir:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title><!-- Requerido pero contenido flexible --></title>
</head>
<body>
    <!-- Contenido del ejercicio aquí -->
</body>
</html>
```

### Patrón de Estructura de Pruebas
Las pruebas usan bloques `describe` para organización:
```javascript
describe('Estructura de carpetas', () => { /* verificaciones de carpetas */ });
describe('Archivo ejercicio-N.html', () => { /* archivo/estructura */ });
describe('Elementos de texto en ejercicio-N.html', () => { /* validación DOM */ });
```

## Flujos de Trabajo de Desarrollo

### Agregar Nuevos Ejercicios
1. Crear `ejercicios/ejercicio-N-descripcion.md` con instrucciones en español
2. Actualizar la lista de ejercicios en la navegación de [src/index.html](src/index.html). A cada ejercicio final que creará el estudiante en este proyecto.
3. Dejar en (src/index.html) solo los ejercicios que existen en este proeyecto. Eliminar las referencias de los que no existen.
4. Actualizar las informaciones en README.md con los nuevos ejercicios.
5. Crear archivo de prueba `tests/ejercicio/N-descripcion.test.js` siguiendo patrones existentes
6. Especificar elementos HTML requeridos, estructura de carpetas y criterios de validación
7. Colocar al inicio de cada ejercicio.md y al inicio del README.md los pasos de como ver los ejercicios en live serve.

### Formato de Instrucciones de Ejercicios
Ver [ejercicios/ejercicio-8-fundamentos-texto.md](ejercicios/ejercicio-8-fundamentos-texto.md):
- Sección **Objetivo** - Metas de aprendizaje
- **Instrucciones** - Pasos numerados en español
- **Requisitos** - Restricciones técnicas (solo HTML, sin frameworks)
- **Estructura final esperada** - Diagrama de estructura de árbol
- **Verificación** - Comandos de terminal para pruebas manuales

### Enfoque de Validación de Pruebas
Ejemplo de [tests/ejercicio/8-fundamentos-texto.test.js](tests/ejercicio/8-fundamentos-texto.test.js#L70-L82):
```javascript
// Patrón de validación DOM
const content = fs.readFileSync(indexPath, 'utf8');
const dom = new JSDOM(content);
const document = dom.window.document;
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
expect(headings.length).toBeGreaterThanOrEqual(1);
```

## Contexto Crítico

### Estructura del Proyecto
- **Los estudiantes NO modifican**: `tests/`, `.github/workflows/`, `package.json`, `jest.config.js`
- **Los estudiantes SOLO trabajan en**: directorio `src/`
- Subdirectorios requeridos en `src/`: `images/`, `js/`, `css/` (validados por las pruebas)

### Contexto de Idioma
- Todas las instrucciones y documentación en **español**
- Los archivos de ejercicios usan nomenclatura en español: "ejercicio" no "exercise"
- Los comentarios y contenido de texto deben estar en español al crear ejemplos

### Filosofía de Pruebas
Las pruebas están enfocadas en **auto-calificación** - deben ser precisas, cubrir casos extremos y proporcionar mensajes de error claros. Usar verificaciones condicionales (`if fs.existsSync()`) antes del parseo DOM para evitar fallos en cascada.

## Autograding Classroom Github
- Al terminar de crear todos los ejercicios actualizar el autograding. 
- Permitir que el estudiante pueda optener calificación parcial de cada test pasado.
- El valor máximo es de 100 puntos.
- En la calificacion parcial utilizar número entero.
- Utilizar el siguiente flujo de trabajo de GitHub Actions:
` .github/workflows/classroom.yml`

```yaml
 
 name: Autograding Tests
'on':
  push:
  repository_dispatch:
permissions:
  checks: write
  actions: read
  contents: read
jobs:
  run-autograding-tests:
    runs-on: ubuntu-latest
    if: github.actor != 'github-classroom[bot]'
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    # Cachear node_modules
    - name: Cache node_modules
      uses: actions/cache@v4
      with:
        path: node_modules
        key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-
    
    - name: Instalar dependencias
      run: npm install
    
    - name: Ejercicio 10 - Tienda Online
      id: ejercicio-10
      uses: classroom-resources/autograding-command-grader@v1
      with:
        test-name: Ejercicio 10 - Tienda Online
        setup-command: ''
        command: npm test tests/ejercicio/10-tienda-online.test.js
        timeout: 10
        max-score: 100
    
    - name: Autograding Reporter
      uses: classroom-resources/autograding-grading-reporter@v1
      env:
        EJERCICIO-10_RESULTS: "${{steps.ejercicio-10.outputs.result}}"
      with:
        runners: ejercicio-10


```