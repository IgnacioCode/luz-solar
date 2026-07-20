import { catalogProductsData } from '@/src/data';
import type { CatalogProduct, Product } from '@/src/types';

const CATEGORY_ALIASES: Record<string, Product['category']> = {
  kits: 'kits',
  kitssolares: 'kits',
  panels: 'solar',
  paneles: 'solar',
  panelessolares: 'solar',
  solar: 'solar',
  inverters: 'solar',
  inversores: 'solar',
  inversoressolares: 'solar',
  structures: 'solar',
  estructuras: 'solar',
  estructurassolares: 'solar',
  batteries: 'storage',
  baterias: 'storage',
  storage: 'storage',
  almacenamiento: 'storage',
  controllers: 'electrical',
  reguladores: 'electrical',
  reguladoresdecarga: 'electrical',
  electrical: 'electrical',
  electrica: 'electrical',
  electricidadyseguridad: 'electrical',
  lighting: 'electrical',
  seguridad: 'electrical',
  iluminacionyseguridad: 'electrical',
  water: 'water',
  agua: 'water',
  aguayclimatizacion: 'water',
  pool: 'water',
  piscina: 'water',
  pumping: 'water',
  bombeo: 'water',
  bombeosolar: 'water',
  thermal: 'water',
  termica: 'water',
  mobility: 'mobility',
  movilidad: 'mobility',
  movilidadelectrica: 'mobility',
};

const DEFAULT_REVALIDATE_SECONDS = 300;

type CsvRow = Record<string, string>;

function normalizeHeader(header: string) {
  return header
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');
}

function parseCsvLine(line: string) {
  const values: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === ',' && !insideQuotes) {
      values.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
}

function parseCsv(csv: string): CsvRow[] {
  const normalizedCsv = csv.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalizedCsv.split('\n').filter((line) => line.trim().length > 0);
  const [headerLine, ...dataLines] = lines;

  if (!headerLine) {
    return [];
  }

  const headers = parseCsvLine(headerLine).map(normalizeHeader);

  return dataLines.map((line) => {
    const values = parseCsvLine(line);

    return headers.reduce<CsvRow>((row, header, index) => {
      row[header] = values[index]?.trim() ?? '';
      return row;
    }, {});
  });
}

function getValue(row: CsvRow, aliases: string[]) {
  for (const alias of aliases) {
    const value = row[normalizeHeader(alias)];

    if (value) {
      return value;
    }
  }

  return '';
}

function splitList(value: string) {
  return value
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parsePrice(value: string) {
  const cleaned = value.replace(/[^0-9,.-]/g, '');

  if (!cleaned) {
    return null;
  }

  const normalized = cleaned.includes(',') && cleaned.includes('.')
    ? cleaned.replace(/\./g, '').replace(',', '.')
    : cleaned.includes(',')
      ? cleaned.replace(',', '.')
      : cleaned.split('.').length > 2
        ? cleaned.replace(/\./g, '')
        : cleaned.includes('.') && cleaned.split('.').at(-1)?.length === 3
          ? cleaned.replace('.', '')
          : cleaned;
  const price = Number(normalized);

  return Number.isFinite(price) && price > 0 ? price : null;
}

function toProduct(row: CsvRow, index: number): CatalogProduct | null {
  const name = getValue(row, ['name', 'nombre', 'producto']);
  const slug = getValue(row, ['slug', 'url', 'handle']);
  const rawCategory = getValue(row, ['category', 'categoria', 'tipo']);
  const category = CATEGORY_ALIASES[normalizeHeader(rawCategory)];
  const description = getValue(row, ['description', 'descripcion', 'descripción']);
  const imageValue = getValue(row, ['image', 'imagen', 'foto', 'imageUrl', 'image_url']);
  const images = splitList(imageValue);
  const price = parsePrice(getValue(row, ['price', 'precio', 'precioars', 'precio_ars']));

  if (!name || !slug || !category || !description || !images.length || price === null) {
    return null;
  }

  const specifications = splitList(getValue(row, ['specifications', 'especificaciones', 'caracteristicas']));
  const idealFor = splitList(getValue(row, ['idealFor', 'ideal_para', 'ideal para', 'aplicaciones']));
  const detailPoints = splitList(getValue(row, ['detailPoints', 'puntos_detalle', 'puntos detalle']));

  return {
    id: getValue(row, ['id', 'codigo', 'código']) || `csv-${index + 1}-${slug}`,
    slug,
    name,
    category,
    description,
    specifications: specifications.length ? specifications : [description],
    idealFor: idealFor.length ? idealFor : ['Consulta personalizada'],
    detailIntro: getValue(row, ['detailIntro', 'intro_detalle', 'intro detalle']) || description,
    detailPoints: detailPoints.length ? detailPoints : [description],
    consultationFocus: getValue(row, ['consultationFocus', 'foco_consulta', 'foco consulta']) || 'precio, disponibilidad y dimensionamiento',
    image: images[0],
    images,
    badge: getValue(row, ['badge', 'etiqueta', 'destacado']) || undefined,
    price,
    currency: getValue(row, ['currency', 'moneda']).toUpperCase() === 'ARS' ? 'ARS' : 'USD',
    priceNote: getValue(row, ['priceNote', 'nota_precio', 'nota precio']) || undefined,
    availability: getValue(row, ['availability', 'disponibilidad', 'stock']) || undefined,
  };
}

async function getCsvProducts() {
  const csvUrl = process.env.PRODUCTS_CSV_URL ?? process.env.NEXT_PUBLIC_PRODUCTS_CSV_URL;

  if (!csvUrl) {
    return [];
  }

  try {
    const revalidate = Number(process.env.NEXT_PUBLIC_PRODUCTS_CSV_REVALIDATE_SECONDS) || DEFAULT_REVALIDATE_SECONDS;
    const response = await fetch(csvUrl, { next: { revalidate } });

    if (!response.ok) {
      return [];
    }

    

    const csv = await response.text();

    return parseCsv(csv)
      .map(toProduct)
      .filter((product): product is CatalogProduct => Boolean(product));
  } catch {
    return [];
  }
}

export async function getAllCatalogProducts() {
  const csvProducts = await getCsvProducts();
  const productsBySlug = new Map<string, CatalogProduct>();

  catalogProductsData.forEach((product) => {
    productsBySlug.set(product.slug, product);
  });

  csvProducts.forEach((product) => {
    productsBySlug.set(product.slug, product);
  });

  return Array.from(productsBySlug.values());
}

export async function getMergedProductBySlug(slug: string) {
  const products = await getAllCatalogProducts();
  return products.find((product) => product.slug === slug);
}
