"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductSchema, CreateProductDto } from "@/lib/types/products";
import { useCreateProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { z } from "zod";

export default function NewProductPage() {
  const router = useRouter();
  const { mutateAsync, isPending } = useCreateProduct();
  // type CreateProductDto = z.infer<typeof CreateProductSchema>;
  const form = useForm<z.infer<typeof CreateProductSchema>>({
    resolver: zodResolver(CreateProductSchema as any),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      images: [],
    },
  });

  const onSubmit = async (data: CreateProductDto) => {
    await mutateAsync(data);
    router.push("/products");
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
