"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProductDto, UpdateProductSchema } from "@/lib/types/products";
import { useProduct, useUpdateProduct } from "@/hooks/useProducts";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const productQuery = useProduct(id);
  const updateMutation = useUpdateProduct();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UpdateProductDto>({
    resolver: zodResolver(UpdateProductSchema as any),
  });

  useEffect(() => {
    if (productQuery.data) {
      console.log(productQuery.data);
      reset(productQuery.data as any);
    }
  }, [productQuery.data, reset]);

  if (productQuery.isLoading) return <p>Loading...</p>;
  if (!productQuery.data) return <p>Product not found.</p>;

  const onSubmit = async (formData: UpdateProductDto) => {
    console.log("Form submitted with data:", formData);
    try {
      await updateMutation.mutateAsync({ id: id!, data: formData as any });
      router.push("/admin/products");
    } catch (err: any) {
      console.error(
        "Update failed:",
        err?.response?.data ?? err?.message ?? err
      );
      alert(
        "Update failed: " +
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
          onClick={() => console.log("Clicked test")}
          disabled={isSubmitting || updateMutation.isPending}
          className=" bg-green-500 text-white px-4 py-2 cursor-pointer rounded"
        >
          {isSubmitting || updateMutation.isPending ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
}
