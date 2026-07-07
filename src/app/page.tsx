import App from '@/src/App';
import { getAllProducts } from '@/src/lib/products';

export default async function Home() {
  const products = await getAllProducts();

  return <App products={products} />;
}
