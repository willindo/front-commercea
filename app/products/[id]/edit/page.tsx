"use client";

import { useRouter, useParams } from "next/navigation";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProductSchema, UpdateProductDto } from "@/lib/types/products";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useProduct(params.id);
  const { mutateAsync, isPending } = useUpdateProduct(params.id);

  const form = useForm<UpdateProductDto>({
    resolver: zodResolver(UpdateProductSchema),
    values: data ?? {},
  });

  const onSubmit = async (values: UpdateProductDto) => {
    await mutateAsync(values);
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
          placeholder="Name"
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
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
