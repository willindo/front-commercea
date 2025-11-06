"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "@/components/shop/Filters";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shop/ProductCard";
import { useCart } from "@/hooks/useCart";

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cartOpen, setCartOpen] = useState(false);
  // 🔹 Parse URL → filters
  const currentFilters = useMemo(() => {
    const obj: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
      if (!obj[key]) obj[key] = [];
      obj[key].push(value);
    });
    return obj;
  }, [searchParams]);

  const [filters, setFilters] =
    useState<Record<string, string[]>>(currentFilters);
  const [page, setPage] = useState(1);
  const limit = 10;

  // 🔹 Keep filters in sync with URL
  useEffect(() => {
    setFilters((prev) => {
      const prevStr = JSON.stringify(prev);
      const nextStr = JSON.stringify(currentFilters);
      return prevStr === nextStr ? prev : currentFilters;
    });
  }, [currentFilters]);

  // 🔹 Debounce URL updates
  useEffect(() => {
    const id = setTimeout(() => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, vals]) =>
        vals.forEach((v) => params.append(key, v))
      );
      router.replace(`?${params.toString()}`);
    }, 300);
    return () => clearTimeout(id);
  }, [filters, router]);

  const handleFiltersChange = useCallback(
    (newFilters: Record<string, string[]>) => {
      setFilters(newFilters);
      setPage(1);
    },
    []
  );

  // 🔹 Fetch products
  const { data, isLoading, isError } = useProducts(page, limit, filters);
  const products = data?.items || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);
  const { cart, addToCart, updateItem, removeItem, clearCart } = useCart();
  const handleAddToCart = async (productId: string, size: string) => {
    try {
      await addToCart.mutateAsync({ productId, quantity: 1, size });
      setCartOpen(true);
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "❌ Failed to add product to cart");
    }
  };
  const totalItems =
    cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  if (isLoading)
    return (
      <p className="text-center p-10 text-gray-600">Loading products...</p>
    );
  if (isError)
    return (
      <p className="text-center p-10 text-red-500">Failed to load products.</p>
    );

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <Filters value={filters} onChange={handleFiltersChange} />

      <main className="flex-1">
        <p className="text-sm text-gray-600 mb-6">
          Current filters: {JSON.stringify(filters)}
        </p>

        {isLoading && <p>Loading...</p>}
        {/* Product Grid */}
        <main className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">🛍️ Shop Products</h1>
            <div className="flex items-center gap-4">
              <select className="border p-2 rounded">
                <option>Sort: Newest</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
              </select>
              <button
                className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setCartOpen(!cartOpen)}
              >
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  selectedSizes={[]}
                  onAddToCart={(size: string) =>
                    p.id && handleAddToCart(p.id, size)
                  }
                  // onAddToCart={() => {}}
                  disabled={p.stock === 0}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 border rounded"
              disabled={page === 1}
            >
              Prev
            </button>
            <span>
              Page {page} / {totalPages || 1}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 border rounded"
              disabled={page === totalPages}
            >
              Next
            </button>
            {/* ✅ Mini Cart Drawer */}
            {cartOpen && cart && (
              <aside className="fixed right-0 top-0 w-80 bg-white shadow-lg p-4 flex flex-col z-50">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Your Cart</h2>
                  <button onClick={() => setCartOpen(false)}>✕</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {cart.items.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    cart.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between py-2 border-b"
                      >
                        <div>
                          <p className="font-medium">{item.product?.name}</p>
                          <p className="text-sm text-gray-500">
                            ₹{item.product?.price} × {item.quantity} = ₹
                            {(item.product?.price ?? 0) * item.quantity}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex gap-1">
                            <button
                              onClick={() =>
                                updateItem.mutate({
                                  itemId: item.id,
                                  quantity: item.quantity - 1,
                                  size: item.size,
                                })
                              }
                              disabled={item.quantity <= 1}
                              className="px-2 py-1 border rounded"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateItem.mutate({
                                  itemId: item.id,
                                  quantity: item.quantity + 1,
                                  size: item.size,
                                })
                              }
                              className="px-2 py-1 border rounded"
                            >
                              +
                            </button>
                          </div>
                          <button
                            className="text-red-500 text-sm"
                            onClick={() => removeItem.mutate(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <button
                  className="w-full bg-gray-200 py-2 rounded mt-2 hover:bg-gray-300"
                  onClick={() => router.push("/cart")}
                >
                  View Full Cart
                </button>

                <div className="mt-4 border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">
                      Total: ₹
                      {cart.items.reduce(
                        (sum, i) => sum + (i.product?.price ?? 0) * i.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => clearCart.mutate()}
                      className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                      Clear
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Checkout
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </main>
      </main>
    </div>
  );
}
