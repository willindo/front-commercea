// app/products/page.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { productsApi } from "@/lib/api/products";
import ProductList from "./ProductList";

export default async function ProductsPage() {
  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["products", 1],
    queryFn: () => productsApi.getAll(1, 10),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ProductList />
    </HydrationBoundary>
  );
}
