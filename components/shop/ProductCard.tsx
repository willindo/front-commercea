"use client";

import { Heart } from "lucide-react";
import { Product } from "@/lib/types/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  selectedSizes: string[];
  onAddToCart: (size: string) => void;
  disabled?: boolean;
}

export default function ProductCard({
  product,
  selectedSizes,
  onAddToCart,
  disabled = false,
}: ProductCardProps) {
  const [size, setSize] = useState<string>("");

  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow-md transition">
      <img
        src={product.images?.[0] || "/placeholder.png"}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="border p-1 mb-2"
      >
        <option value="">Select size</option>
        {(product.sizes ?? []).map((s) => (
          <option key={s.size} value={s.size}>
            {s.size}
          </option>
        ))}
      </select>
      <div className="mt-auto flex justify-between items-center pt-3">
        <button
          onClick={() => onAddToCart(size)}
          disabled={disabled || product.stock === 0}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
        <button className="text-gray-600 hover:text-red-500">
          <Heart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
