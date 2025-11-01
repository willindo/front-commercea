"use client";

export default function ConfirmButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full mt-4"
    >
      {loading ? "Processing..." : "Confirm & Pay"}
    </button>
  );
}
