"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function CartPage() {
  useProtectedRoute();
  const router = useRouter();
  const { cart, isLoading, updateItem, removeItem, clearCart } = useCart();

  if (isLoading) return <p>Loading cart...</p>;
  if (!cart || cart.items.length === 0) return <p>Your cart is empty.</p>;

  const totalQuantity = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
    0
  );

  const handleCheckout = () => {
    // ✅ Store checkout data in sessionStorage
    const checkoutData = {
      items: cart.items.map((i) => ({
        id: i.id,
        name: i.product?.name,
        price: i.product?.price,
        quantity: i.quantity,
        size: i.size,
      })),
      totalPrice,
    };

    sessionStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    // ✅ Navigate to /checkout
    router.push("/checkout");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.items.map((item) => {
        const itemPrice = item.product?.price ?? 0;
        const itemSubtotal = itemPrice * item.quantity;

        return (
          <div key={item.id} className="flex justify-between py-3 border-b">
            <div>
              <p className="font-medium">{item.product?.name}</p>
              <p>
                Price: ₹{itemPrice}
                {cart.id}{" "}
              </p>
              <p className="text-gray-500 text-sm">Subtotal: ₹{itemSubtotal}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateItem.mutate({
                      itemId: item.id,
                      quantity: item.quantity - 1,
                      size: item.size,
                    })
                  }
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateItem.mutate({
                      itemId: item.id,
                      quantity: item.quantity + 1,
                      size: item.size,
                    })
                  }
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 text-sm"
                onClick={() => removeItem.mutate(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      {/* ✅ Totals */}
      <div className="mt-4 border-t pt-4 flex justify-between items-center">
        <div>
          <p>Total Items: {totalQuantity}</p>
          <p className="font-bold text-lg">Total: ₹{totalPrice}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => clearCart.mutate()}
            className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Clear Cart
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
