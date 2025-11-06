// front-commerce/lib/api/filters.ts
import { api } from "@/lib/api/axios";

export interface FilterData {
  categories: { id: string; name: string }[];
  genders: string[];
  sizes: string[];
}

export async function getFilters(): Promise<FilterData> {
  const { data } = await api.get("/filters");
  return data;
}

// export async function getProducts(
//   params?: Record<string, string | number | undefined>
// ) {
//   const query = new URLSearchParams();

//   if (params) {
//     Object.entries(params).forEach(([key, val]) => {
//       if (val) query.set(key, String(val));
//     });
//   }

//   const { data } = await api.get(`/products?${query.toString()}`);
//   return data; // ✅ axios already returns JSON
// }
