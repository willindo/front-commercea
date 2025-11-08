"use client";

import { useState, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Input } from "./ui/Input";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useState<
    Record<string, string | string[]>
  >({});

  const { data, isLoading } = useProducts(1, 10, searchParams);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim().length > 1) {
        setSearchParams({ search: query });
      } else {
        setSearchParams({});
      }
    }, 300); // debounce for UX
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="max-w-md mx-auto p-4">
      <Input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {data?.items?.length ? (
            data.items.map((p) => (
              <li
                key={p.id}
                className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition"
              >
                {p.name}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No products found</p>
          )}
        </ul>
      )}
    </div>
  );
}
