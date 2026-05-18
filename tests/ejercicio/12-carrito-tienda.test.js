const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 12: Tienda Online - Parte 3: Carrito de Compras', () => {
    const basePath = path.join(__dirname, '../../src/tienda-online');
    
    // Test de archivo carrito.html
    describe('Archivo carrito.html', () => {
        test('debe existir carrito.html en pages/', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            expect(fs.existsSync(carritoPath)).toBe(true);
            expect(fs.statSync(carritoPath).isFile()).toBe(true);
        });
    });

    // Tests de contenido - carrito.html
    describe('Contenido de carrito.html', () => {
        let content;
        let dom;
        let document;

        beforeAll(() => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            if (fs.existsSync(carritoPath)) {
                content = fs.readFileSync(carritoPath, 'utf8');
                dom = new JSDOM(content);
                document = dom.window.document;
            }
        });

        test('carrito.html debe tener estructura HTML básica', () => {
            expect(content).toMatch(/<!DOCTYPE\s+html>/i);
            expect(content).toMatch(/<html[^>]*>/i);
            expect(content).toMatch(/<head[^>]*>/i);
            expect(content).toMatch(/<body[^>]*>/i);
        });

        test('carrito.html debe tener título relacionado con carrito', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.textContent.toLowerCase()).toMatch(/carrito|tdhstore/);
        });

        test('carrito.html debe tener header', () => {
            const header = document.querySelector('header');
            expect(header).toBeTruthy();
        });

        test('carrito.html debe tener navegación', () => {
            const nav = document.querySelector('nav');
            expect(nav).toBeTruthy();
        });

        test('carrito.html debe tener footer', () => {
            const footer = document.querySelector('footer');
            expect(footer).toBeTruthy();
        });

        test('carrito.html debe tener una tabla', () => {
            const table = document.querySelector('table');
            expect(table).toBeTruthy();
        });

        test('la tabla debe tener thead y tbody', () => {
            const thead = document.querySelector('thead');
            const tbody = document.querySelector('tbody');
            expect(thead).toBeTruthy();
            expect(tbody).toBeTruthy();
        });

        test('debe tener resumen de compra con total', () => {
            const bodyText = document.body.textContent.toLowerCase();
            const hasTotal = bodyText.includes('total') || bodyText.includes('subtotal');
            expect(hasTotal).toBe(true);
        });

        test('debe tener botones de acción', () => {
            const buttons = document.querySelectorAll('button, a.btn, .btn-continuar, .btn-pagar');
            expect(buttons.length).toBeGreaterThanOrEqual(1);
        });
    });

    // Tests de navegación en carrito
    describe('Navegación en carrito.html', () => {
        test('carrito.html debe tener enlace de regreso al inicio', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            if (fs.existsSync(carritoPath)) {
                const content = fs.readFileSync(carritoPath, 'utf8');
                expect(content).toMatch(/href=['"]\.\.\/index\.html['"]|href=['"]\.\.\/['"]|href=['"]\/index\.html['"]/);
            }
        });

        test('debe tener enlace para continuar comprando', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            if (fs.existsSync(carritoPath)) {
                const content = fs.readFileSync(carritoPath, 'utf8');
                const hasProductLink = content.includes('productos.html') || 
                                       content.toLowerCase().includes('continuar');
                expect(hasProductLink).toBe(true);
            }
        });
    });

    // Tests de vinculación completa de recursos
    describe('Vinculación Completa de Recursos', () => {
        test('carrito.html debe vincular el archivo CSS', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            if (fs.existsSync(carritoPath)) {
                const content = fs.readFileSync(carritoPath, 'utf8');
                expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
            }
        });

        test('carrito.html debe vincular el archivo JavaScript', () => {
            const carritoPath = path.join(basePath, 'pages/carrito.html');
            if (fs.existsSync(carritoPath)) {
                const content = fs.readFileSync(carritoPath, 'utf8');
                expect(content).toMatch(/<script[^>]*src=['"][^'"]*main\.js['"][^>]*>/);
            }
        });

        test('todas las páginas deben tener CSS vinculado', () => {
            const pages = ['index.html', 'pages/productos.html', 'pages/contacto.html', 
                          'pages/acerca-de.html', 'pages/carrito.html'];
            
            pages.forEach(page => {
                const pagePath = path.join(basePath, page);
                if (fs.existsSync(pagePath)) {
                    const content = fs.readFileSync(pagePath, 'utf8');
                    expect(content).toMatch(/<link[^>]*href=['"][^'"]*styles\.css['"][^>]*>/);
                }
            });
        });

        test('todas las páginas deben tener JavaScript vinculado', () => {
            const pages = ['index.html', 'pages/productos.html', 'pages/contacto.html', 
                          'pages/acerca-de.html', 'pages/carrito.html'];
            
            pages.forEach(page => {
                const pagePath = path.join(basePath, page);
                if (fs.existsSync(pagePath)) {
                    const content = fs.readFileSync(pagePath, 'utf8');
                    expect(content).toMatch(/<script[^>]*src=['"][^'"]*main\.js['"][^>]*>/);
                }
            });
        });
    });

    // Tests de integración completa
    describe('Integración Completa del Proyecto', () => {
        test('todas las páginas principales deben existir', () => {
            const pages = [
                'index.html',
                'pages/productos.html',
                'pages/contacto.html',
                'pages/acerca-de.html',
                'pages/carrito.html'
            ];
            
            pages.forEach(page => {
                const pagePath = path.join(basePath, page);
                expect(fs.existsSync(pagePath)).toBe(true);
            });
        });

        test('todos los recursos deben existir', () => {
            const resources = [
                'assets/css/styles.css',
                'assets/js/main.js',
                'data/productos.json'
            ];
            
            resources.forEach(resource => {
                const resourcePath = path.join(basePath, resource);
                expect(fs.existsSync(resourcePath)).toBe(true);
            });
        });

        test('deben existir todas las carpetas de imágenes', () => {
            const imageDirs = [
                'assets/images/productos',
                'assets/images/logos',
                'assets/images/banners'
            ];
            
            imageDirs.forEach(dir => {
                const dirPath = path.join(basePath, dir);
                expect(fs.existsSync(dirPath)).toBe(true);
                expect(fs.statSync(dirPath).isDirectory()).toBe(true);
            });
        });

        test('todas las páginas deben tener imágenes con alt', () => {
            const pages = ['index.html', 'pages/productos.html', 'pages/contacto.html', 
                          'pages/acerca-de.html', 'pages/carrito.html'];
            
            pages.forEach(page => {
                const pagePath = path.join(basePath, page);
                if (fs.existsSync(pagePath)) {
                    const content = fs.readFileSync(pagePath, 'utf8');
                    const dom = new JSDOM(content);
                    const document = dom.window.document;
                    const images = document.querySelectorAll('img');
                    
                    images.forEach(img => {
                        expect(img.hasAttribute('alt')).toBe(true);
                    });
                }
            });
        });
    });
});
