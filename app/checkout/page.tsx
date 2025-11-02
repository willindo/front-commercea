"use client";

import { useEffect, useState } from "react";
import CheckoutSummary from "./heckoutSummary"; // keep your existing Razorpay summary

type AddressForm = {
  name: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  pincode: string;
};

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [address, setAddress] = useState<AddressForm>({
    name: "",
    phone: "",
    addressLine1: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const data = sessionStorage.getItem("checkoutData");
    if (data) setCheckoutData(JSON.parse(data));
    else window.location.href = "/cart";
  }, []);

  if (!checkoutData) return <p>Loading checkout...</p>;

  const handleContinue = () => {
    // simple validation
    const missing = Object.entries(address)
      .filter(([_, v]) => !v.trim())
      .map(([k]) => k);
    if (missing.length) {
      alert(`Please fill: ${missing.join(", ")}`);
      return;
    }

    // store temporarily in sessionStorage so backend can use later if needed
    sessionStorage.setItem("checkoutAddress", JSON.stringify(address));
    setStep(2);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold mb-2">Checkout</h1>

      {step === 1 && (
        <div className="space-y-4 bg-white border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Shipping Details</h2>

          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={address.phone}
              onChange={(e) =>
                setAddress({ ...address, phone: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Address Line"
              value={address.addressLine1}
              onChange={(e) =>
                setAddress({ ...address, addressLine1: e.target.value })
              }
              className="border p-2 rounded"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                className="border p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
              className="border p-2 rounded"
            />
          </div>

          <button
            onClick={handleContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full mt-3"
          >
            Continue to Payment
          </button>
        </div>
      )}

      {step === 2 && (
        <>
          <div className="bg-gray-50 border p-4 rounded-lg text-sm text-gray-700">
            <h2 className="font-semibold mb-2">Shipping To:</h2>
            <p>{address.name}</p>
            <p>{address.addressLine1}</p>
            <p>
              {address.city}, {address.state} - {address.pincode}
            </p>
            <p>📞 {address.phone}</p>
            <button
              onClick={() => setStep(1)}
              className="text-blue-600 text-sm mt-2 underline"
            >
              Edit
            </button>
          </div>
        </>
      )}
      <CheckoutSummary checkoutData={checkoutData} />
    </div>
  );
}
