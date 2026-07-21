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

## Deploy en Cloudflare Workers

El sitio se despliega como un Cloudflare Worker mediante OpenNext. Esto conserva el renderizado del servidor necesario para actualizar el catálogo desde el CSV; no se publica como una exportación estática.

Los comandos usan la copia local de Wrangler con `npx`, por lo que no requiere una instalación global:

```bash
npx wrangler login
npm run cf:preview
npm run cf:deploy
```

`cf:preview` ejecuta el Worker localmente. `cf:deploy` primero genera `.open-next/` y luego publica el Worker `luz-solar`.

El dominio personalizado `www.luzsolarsrl.com.ar` queda administrado desde **Settings → Domains & Routes** en Cloudflare. El archivo `wrangler.jsonc` no declara `routes` y usa `workers_dev: false`, por lo que el deploy publica el Worker sin borrar ni reemplazar esa asociación del dashboard.

### Variables de entorno de producción

Los valores `NEXT_PUBLIC_*` se incorporan durante el build de Next.js. Por eso, al usar **Workers Builds** hay que cargarlos en Cloudflare en los dos lugares siguientes para el entorno **Production**:

1. **Workers & Pages → luz-solar → Settings → Build → Build variables and secrets**: agregá `NEXT_PUBLIC_PRODUCTS_CSV_URL` y `NEXT_PUBLIC_PRODUCTS_CSV_REVALIDATE_SECONDS`. Agregá también `PRODUCTS_CSV_URL` si se usa como URL de servidor.
2. **Workers & Pages → luz-solar → Settings → Variables and Secrets → Production**: agregá los mismos valores para que el Worker pueda leerlos en tiempo de ejecución. `PRODUCTS_CSV_URL` tiene prioridad sobre `NEXT_PUBLIC_PRODUCTS_CSV_URL` en el servidor.

No subas `.env` al repositorio. Usá `.env.example` como plantilla local. La configuración de Wrangler tiene `keep_vars: true`: un `npm run cf:deploy` no reemplaza ni borra las variables ya configuradas en el panel de Cloudflare.

Para el pipeline de **Workers Builds**, configurá:

```text
Build command:  npm run cf:build
Deploy command: npx wrangler deploy
```

Esto hace que los valores `NEXT_PUBLIC_*` estén presentes cuando se compila Next.js y también cuando el Worker atiende tráfico de producción.
