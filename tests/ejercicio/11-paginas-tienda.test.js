const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 11: Tienda Online - Parte 2: Catálogo y Páginas Informativas', () => {
    const basePath = path.join(__dirname, '../../src/tienda-online');
    
    // Tests de archivos HTML de páginas
    describe('Archivos HTML de Páginas', () => {
        test('debe existir productos.html en pages/', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            expect(fs.existsSync(productosPath)).toBe(true);
            expect(fs.statSync(productosPath).isFile()).toBe(true);
        });

        test('debe existir contacto.html en pages/', () => {
            const contactoPath = path.join(basePath, 'pages/contacto.html');
            expect(fs.existsSync(contactoPath)).toBe(true);
            expect(fs.statSync(contactoPath).isFile()).toBe(true);
        });

        test('debe existir acerca-de.html en pages/', () => {
            const acercaPath = path.join(basePath, 'pages/acerca-de.html');
            expect(fs.existsSync(acercaPath)).toBe(true);
            expect(fs.statSync(acercaPath).isFile()).toBe(true);
        });
    });

    // Tests de contenido - productos.html
    describe('Contenido de productos.html', () => {
        let content;
        let dom;
        let document;

        beforeAll(() => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            if (fs.existsSync(productosPath)) {
                content = fs.readFileSync(productosPath, 'utf8');
                dom = new JSDOM(content);
                document = dom.window.document;
            }
        });

        test('productos.html debe tener estructura HTML básica', () => {
            expect(content).toMatch(/<!DOCTYPE\s+html>/i);
            expect(content).toMatch(/<html[^>]*>/i);
            expect(content).toMatch(/<head[^>]*>/i);
            expect(content).toMatch(/<body[^>]*>/i);
        });

        test('productos.html debe tener título relacionado con productos', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.textContent.toLowerCase()).toMatch(/productos|tdhstore/);
        });

        test('productos.html debe tener header', () => {
            const header = document.querySelector('header');
            expect(header).toBeTruthy();
        });

        test('productos.html debe tener navegación', () => {
            const nav = document.querySelector('nav');
            expect(nav).toBeTruthy();
        });

        test('productos.html debe tener footer', () => {
            const footer = document.querySelector('footer');
            expect(footer).toBeTruthy();
        });

        test('productos.html debe tener al menos 6 productos en el catálogo', () => {
            const productos = document.querySelectorAll('img[src*="productos"], article, .producto');
            expect(productos.length).toBeGreaterThanOrEqual(6);
        });
    });

    // Tests de contenido - contacto.html
    describe('Contenido de contacto.html', () => {
        let content;
        let dom;
        let document;

        beforeAll(() => {
            const contactoPath = path.join(basePath, 'pages/contacto.html');
            if (fs.existsSync(contactoPath)) {
                content = fs.readFileSync(contactoPath, 'utf8');
                dom = new JSDOM(content);
                document = dom.window.document;
            }
        });

        test('contacto.html debe tener estructura HTML básica', () => {
            expect(content).toMatch(/<!DOCTYPE\s+html>/i);
            expect(content).toMatch(/<html[^>]*>/i);
            expect(content).toMatch(/<head[^>]*>/i);
            expect(content).toMatch(/<body[^>]*>/i);
        });

        test('contacto.html debe tener título relacionado con contacto', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.textContent.toLowerCase()).toMatch(/contacto|tdhstore/);
        });

        test('contacto.html debe tener un formulario', () => {
            const form = document.querySelector('form');
            expect(form).toBeTruthy();
        });

        test('el formulario debe tener campos de nombre, email y mensaje', () => {
            const nombreInput = document.querySelector('input[type="text"], input[name*="nombre"]');
            const emailInput = document.querySelector('input[type="email"]');
            const mensajeTextarea = document.querySelector('textarea');
            
            expect(nombreInput || emailInput).toBeTruthy();
            expect(emailInput).toBeTruthy();
            expect(mensajeTextarea).toBeTruthy();
        });
    });

    // Tests de contenido - acerca-de.html
    describe('Contenido de acerca-de.html', () => {
        let content;
        let dom;
        let document;

        beforeAll(() => {
            const acercaPath = path.join(basePath, 'pages/acerca-de.html');
            if (fs.existsSync(acercaPath)) {
                content = fs.readFileSync(acercaPath, 'utf8');
                dom = new JSDOM(content);
                document = dom.window.document;
            }
        });

        test('acerca-de.html debe tener estructura HTML básica', () => {
            expect(content).toMatch(/<!DOCTYPE\s+html>/i);
            expect(content).toMatch(/<html[^>]*>/i);
            expect(content).toMatch(/<head[^>]*>/i);
            expect(content).toMatch(/<body[^>]*>/i);
        });

        test('acerca-de.html debe tener título relacionado con acerca de', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.textContent.toLowerCase()).toMatch(/acerca|nosotros|tdhstore/);
        });

        test('acerca-de.html debe tener información de la empresa', () => {
            const headings = document.querySelectorAll('h1, h2, h3');
            const paragraphs = document.querySelectorAll('p');
            
            expect(headings.length).toBeGreaterThanOrEqual(2);
            expect(paragraphs.length).toBeGreaterThanOrEqual(2);
        });
    });

    // Tests de navegación
    describe('Navegación y Enlaces', () => {
        test('páginas en pages/ deben tener enlace de regreso al inicio', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            if (fs.existsSync(productosPath)) {
                const content = fs.readFileSync(productosPath, 'utf8');
                expect(content).toMatch(/href=['"]\.\.\/index\.html['"]|href=['"]\.\.\/['"]|href=['"]\/index\.html['"]/);
            }
        });

        test('productos.html debe tener enlaces al carrito', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            if (fs.existsSync(productosPath)) {
                const content = fs.readFileSync(productosPath, 'utf8');
                expect(content).toMatch(/href=['"]\.\/carrito\.html['"]|href=['"]carrito\.html['"]/);
            }
        });
    });

    // Tests de imágenes adicionales
    describe('Imágenes Adicionales', () => {
        test('debe existir al menos seis imágenes de productos', () => {
            const productosDir = path.join(basePath, 'assets/images/productos');
            if (fs.existsSync(productosDir)) {
                const files = fs.readdirSync(productosDir);
                const imageFiles = files.filter(file => 
                    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
                );
                expect(imageFiles.length).toBeGreaterThanOrEqual(6);
            }
        });

        test('debe existir imagen de contacto/ubicación', () => {
            const contactoFiles = ['contacto-ubicacion.jpg', 'contacto-ubicacion.png', 'ubicacion.jpg', 'mapa.jpg'];
            const contactoExists = contactoFiles.some(file => 
                fs.existsSync(path.join(basePath, 'assets/images', file))
            );
            expect(contactoExists).toBe(true);
        });
    });

    // Tests de vinculación CSS/JS en páginas
    describe('Vinculación de Recursos en Páginas', () => {
        test('productos.html debe vincular el archivo CSS', () => {
            const productosPath = path.join(basePath, 'pages/productos.html');
            if (fs.existsSync(productosPath)) {
                const content = fs.readFileSync(productosPath, 'utf8');
                expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
            }
        });

        test('contacto.html debe vincular el archivo CSS', () => {
            const contactoPath = path.join(basePath, 'pages/contacto.html');
            if (fs.existsSync(contactoPath)) {
                const content = fs.readFileSync(contactoPath, 'utf8');
                expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
            }
        });

        test('acerca-de.html debe vincular el archivo CSS', () => {
            const acercaPath = path.join(basePath, 'pages/acerca-de.html');
            if (fs.existsSync(acercaPath)) {
                const content = fs.readFileSync(acercaPath, 'utf8');
                expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
            }
        });
    });
});
