"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateProduct } from "@/hooks/useProducts";
import {
  CreateProductDto,
  CreateProductSchema,
  Size,
  Gender,
} from "@/lib/types/products";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SizeLimit } from "next";

const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL", "XXL"] as const;
const GENDERS: Gender[] = [
  "MENS",
  "WOMENS",
  "BOYS",
  "GIRLS",
  "UNISEX",
] as const;

export default function NewProductPage() {
  const router = useRouter();
  const { mutateAsync, isPending } = useCreateProduct();

  const form = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      gender: null,
      sizes: ALL_SIZES.map((s) => ({ size: s, quantity: 0 })),
    },
  });

  const [sizeQuantities, setSizeQuantities] = useState<Record<string, number>>(
    Object.fromEntries(ALL_SIZES.map((s) => [s, 0]))
  );

  const handleSizeChange = (size: string, value: string) => {
    setSizeQuantities((prev) => ({ ...prev, [size]: parseInt(value) || 0 }));
  };

  const onSubmit = async (values: CreateProductDto) => {
    const gender = values.gender || null;
    const sizes = Object.entries(sizeQuantities)
      .filter(([_, qty]) => qty > 0)
      .map(([size, quantity]) => ({ size: size as Size, quantity }));
    const totalStock = Object.values(sizeQuantities).reduce((a, b) => a + b, 0);

    await mutateAsync({ ...values, sizes, stock: totalStock });
    router.push("/products");
    router.refresh();
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">New Product</h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <input
          {...form.register("name")}
          placeholder="Product name"
          className="border rounded p-2"
        />
        <textarea
          {...form.register("description")}
          placeholder="Description"
          className="border rounded p-2"
        />
        <input
          type="number"
          {...form.register("price", { valueAsNumber: true })}
          placeholder="Price"
          className="border rounded p-2"
        />
        <input
          type="number"
          {...form.register("stock", { valueAsNumber: true })}
          placeholder="Stock"
          className="border rounded p-2"
        />

        <select {...form.register("gender")} className="border rounded p-2">
          <option value="">Select Gender</option>
          {GENDERS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <div className="border rounded p-3">
          <h3 className="font-semibold mb-2">Available Sizes</h3>
          {ALL_SIZES.map((size) => (
            <div key={size} className="flex items-center gap-2 mb-1">
              <label className="w-12">{size}</label>
              <input
                type="number"
                className="border p-1 w-24 rounded"
                value={sizeQuantities[size]}
                onChange={(e) => handleSizeChange(size, e.target.value)}
              />
            </div>
          ))}
        </div>

        <button
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isPending ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
