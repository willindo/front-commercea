"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import { useForm } from "react-hook-form";
import { UpdateProductDto, UpdateProductSchema } from "@/lib/types/products";
import { zodResolver } from "@hookform/resolvers/zod";

const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;
const GENDERS = ["MENS", "WOMENS", "BOYS", "GIRLS", "UNISEX"] as const;

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useProduct(params.id);
  const { mutateAsync, isPending } = useUpdateProduct(params.id);

  const form = useForm<UpdateProductDto>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: data ?? {},
  });

  const [sizeQuantities, setSizeQuantities] = useState<Record<string, number>>(
    Object.fromEntries(ALL_SIZES.map((s) => [s, 0]))
  );

  useEffect(() => {
    if (data) {
      // Reset form values when product data is loaded
      form.reset(data);

      // Initialize sizes
      setSizeQuantities(
        Object.fromEntries(
          ALL_SIZES.map((size) => [
            size,
            data.sizes.find((s) => s.size === size)?.quantity || 0,
          ])
        )
      );
    }
  }, [data, form]);

  const handleSizeChange = (size: string, value: string) => {
    setSizeQuantities((prev) => ({ ...prev, [size]: parseInt(value) || 0 }));
  };

  const onSubmit = async (values: UpdateProductDto) => {
    const sizes = Object.entries(sizeQuantities)
      .filter(([_, qty]) => qty > 0)
      .map(([size, quantity]) => ({ size, quantity }));

    await mutateAsync({ ...values, sizes });
    router.push("/products");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
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
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
