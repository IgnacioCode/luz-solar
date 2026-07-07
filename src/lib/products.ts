import { productsData } from '@/src/data';
import type { Product } from '@/src/types';

const VALID_CATEGORIES = new Set<Product['category']>([
  'panels',
  'inverters',
  'batteries',
  'controllers',
  'structures',
  'electrical',
]);

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

function toProduct(row: CsvRow, index: number): Product | null {
  const name = getValue(row, ['name', 'nombre', 'producto']);
  const slug = getValue(row, ['slug', 'url', 'handle']);
  const category = getValue(row, ['category', 'categoria', 'tipo']) as Product['category'];
  const description = getValue(row, ['description', 'descripcion', 'descripción']);
  const image = getValue(row, ['image', 'imagen', 'foto', 'imageUrl', 'image_url']);

  if (!name || !slug || !category || !VALID_CATEGORIES.has(category) || !description || !image) {
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
    image,
    badge: getValue(row, ['badge', 'etiqueta', 'destacado']) || undefined,
  };
}

async function getCsvProducts() {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQXAEsFzguxflLqYCVQabYh9xaYYBnK9ezWAxa-ryT3gdItgqhpBV_ndjfTz3wuwL8zvgepOIzyjI68/pub?output=csv';
  console.log("ENTREE", csvUrl);

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
      .filter((product): product is Product => Boolean(product));
  } catch {
    return [];
  }
}

export async function getAllProducts() {
  const csvProducts = await getCsvProducts();
  const productsBySlug = new Map<string, Product>();

  productsData.forEach((product) => {
    productsBySlug.set(product.slug, product);
  });

  csvProducts.forEach((product) => {
    productsBySlug.set(product.slug, product);
  });

  return Array.from(productsBySlug.values());
}

export async function getMergedProductBySlug(slug: string) {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug);
}
