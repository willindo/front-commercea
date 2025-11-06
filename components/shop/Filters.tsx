"use client";

import { useEffect, useState } from "react";
import { getFilters, FilterData } from "@/lib/api/filters";
import { ChevronDown, ChevronUp, XCircle } from "lucide-react";

interface FiltersProps {
  value: Record<string, string[]>; // controlled prop
  onChange: (filters: Record<string, string[]>) => void;
}

export default function Filters({ value, onChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterData | null>(null);
  const [open, setOpen] = useState<
    Record<"categories" | "genders" | "sizes", boolean>
  >({
    categories: true,
    genders: true,
    sizes: true,
  });

  // Fetch filters once
  useEffect(() => {
    getFilters().then(setFilters).catch(console.error);
  }, []);

  const toggleSelection = (key: keyof typeof open, id: string) => {
    const current = value[key] || [];
    const updated = current.includes(id)
      ? current.filter((v) => v !== id)
      : [...current, id];
    onChange({ ...value, [key]: updated });
  };

  const clearAll = () => {
    onChange({ categories: [], genders: [], sizes: [] });
  };

  const toggleSection = (key: keyof typeof open) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!filters) return <p className="text-gray-500">Loading filters...</p>;

  const renderSection = (
    title: string,
    key: keyof typeof open,
    list: string[] | { id: string; name: string }[]
  ) => {
    const selected = value[key] || [];
    const isOpen = open[key];
    return (
      <div className="border-b border-gray-200 pb-3">
        <div
          className="flex justify-between items-center cursor-pointer mb-1"
          onClick={() => toggleSection(key)}
        >
          <h3 className="font-semibold">
            {title}
            {selected.length > 0 && (
              <span className="text-sm text-gray-500 ml-1">
                ({selected.length})
              </span>
            )}
          </h3>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {isOpen && (
          <div className="space-y-1 pl-1">
            {Array.isArray(list) && typeof list[0] === "string"
              ? (list as string[]).map((val) => (
                  <label key={val} className="block text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected.includes(val)}
                      onChange={() => toggleSelection(key, val)}
                      className="mr-2 accent-black"
                    />
                    {val}
                  </label>
                ))
              : (list as { id: string; name: string }[]).map((item) => (
                  <label key={item.id} className="block text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggleSelection(key, item.id)}
                      className="mr-2 accent-black"
                    />
                    {item.name}
                  </label>
                ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="p-4 border rounded-lg bg-white shadow-sm w-full sm:w-64 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Filters</h2>
        <button
          onClick={clearAll}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
        >
          <XCircle size={14} /> Clear all
        </button>
      </div>

      {renderSection("Category", "categories", filters.categories)}
      {renderSection("Gender", "genders", filters.genders)}
      {renderSection("Sizes", "sizes", filters.sizes)}
    </aside>
  );
}
