"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductDto, CreateProductSchema } from "@/lib/types/products";
import { useCreateProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const createMutation = useCreateProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(CreateProductSchema as any),
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      images: [],
    } as any,
  });

  const onSubmit = async (formData: CreateProductDto) => {
    try {
      await createMutation.mutateAsync(formData);
      reset();
      router.push("/admin/products");
    } catch (err: any) {
      console.error(
        "Product create failed:",
        err?.response?.data ?? err?.message ?? err
      );
      alert(
        "Create failed: " +
          (err?.response?.data?.message ?? err?.message ?? "Unknown")
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-6 space-y-4"
    >
      <div>
        <input
          {...register("name")}
          placeholder="Name"
          className="border p-2 w-full"
        />
        {errors?.name && (
          <p className="text-red-600 text-sm">{String(errors.name.message)}</p>
        )}
      </div>

      <div>
        <input
          {...register("price", { valueAsNumber: true })}
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
        />
        {errors?.price && (
          <p className="text-red-600 text-sm">{String(errors.price.message)}</p>
        )}
      </div>

      <div>
        <input
          {...register("stock", { valueAsNumber: true })}
          type="number"
          placeholder="Stock"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <textarea
          {...register("description")}
          placeholder="Description"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting || createMutation.isPending}
          className=" relative z-[9999]  bg-blue-500 text-white px-4 py-2 cursor-pointer rounded"
        >
          {isSubmitting || createMutation.isPending
            ? "Saving..."
            : "Create Product"}
        </button>
      </div>
    </form>
  );
}
