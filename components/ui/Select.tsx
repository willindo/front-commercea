"use client";

import * as React from "react";

export function Select({
  onValueChange,
  defaultValue,
  children,
}: {
  onValueChange: (val: string) => void;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onValueChange(e.target.value)}
      className="border rounded-xl p-2"
    >
      {children}
    </select>
  );
}

export function SelectTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <option disabled>{placeholder}</option>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function SelectItem({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <option value={value}>{children}</option>;
}
