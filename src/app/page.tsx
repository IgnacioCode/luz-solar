import App from '@/src/App';
import { getAllCatalogProducts } from '@/src/lib/products';

export default async function Home() {
  const products = await getAllCatalogProducts();

  return <App products={products} />;
}
