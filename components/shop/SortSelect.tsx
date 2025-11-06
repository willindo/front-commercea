"use client";
import { useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { value: "", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
];

export default function SortSelect() {
  const router = useRouter();
  const params = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const search = new URLSearchParams(params);
    if (sort) search.set("sort", sort);
    else search.delete("sort");
    router.push(`?${search.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      value={params.get("sort") || ""}
      className="border p-2 rounded"
    >
      {sortOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
