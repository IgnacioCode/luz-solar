# Helios Solar

Sitio institucional y comercial de soluciones solares construido con Next.js App Router, React y Tailwind CSS.

## Catálogo comercial

La web separa la guía de conceptos solares del catálogo vendible. El catálogo combina los productos definidos en `src/data.ts` con un Google Sheet publicado como CSV: el CSV agrega productos o reemplaza uno local cuando usa el mismo `slug`.

Configurá `PRODUCTS_CSV_URL` en `.env.local` con la URL publicada del Sheet. Solo se incorporan filas que tengan, como mínimo, `slug`, `name`, `category`, `description`, `image` y `price`. Usá categorías en español y camelCase, como `panelesSolares`, `inversoresSolares`, `baterias`, `aguaYClimatizacion` o `movilidadElectrica`. La columna `image` acepta varias URLs separadas por `|`; la ficha del producto las muestra como galería. La [plantilla CSV](./public/plantilla-catalogo-productos.csv) incluye las columnas y el formato de listas usando `|`.

## Run Locally

**Prerequisites:** Node.js 20.9+

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

3. Open:
   `http://localhost:3000`
