"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Home";
import CartItemCard from "../components/CartItemCard";
import Link from "next/link";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [discountType, setDiscountType] = useState();

  const checkoutTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  useEffect(() => {
    if (checkoutTotal < 50 && discountType == "fixed") {
      setDiscountType("percentage");
    }
  }, [checkoutTotal, discountType]);

  return (
    <div>
      {cart.length >= 1 ? (
        <div className="flex flex-col md:flex-row items-center md:justify-around md:items-start">
          <div className="p-4 grid center grid-cols-1 md:grid-cols-2  gap-5">
            {cart.map((item) => (
              <CartItemCard key={item.id} product={item} />
            ))}
          </div>
          <div className="w-96 md:w-1/3 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-start mb-4"
              >
                <div className="w-1/3">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">&#36; {item.price}</p>
                </div>
                <p>{item.quantity}</p>
                <p className="font-medium">
                  &#36;{" "}
                  {Number.parseFloat(item.quantity * item.price).toFixed(2)}
                </p>
              </li>
            ))}

            <div className="border-t border-gray-300 mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Sub Total</p>
                <p className="font-medium">
                  &#36; {Number.parseFloat(checkoutTotal).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
              <div className="flex flex-col justify-between items-start mb-2 gap-5">
                <p className="font-medium">Discount</p>
                <div>
                  <input
                    type="radio"
                    id="discountCheckbox1"
                    name="discount"
                    onChange={() => setDiscountType("fixed")}
                    disabled={checkoutTotal < 50}
                    checked={discountType == "fixed"}
                  />
                  <label htmlFor="discountCheckbox1" className="ms-4">
                    <span className="text-green-500">Flat &#36;10 OFF</span>
                    <p className="text-gray-400">
                      Minimum cart value must be above &#36;50.{" "}
                    </p>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="discountCheckbox2"
                    name="discount"
                    onChange={() => setDiscountType("percentage")}
                    checked={discountType == "percentage"}
                  />
                  <label
                    htmlFor="discountCheckbox2"
                    className="ms-4 text-green-500"
                  >
                    10% OFF
                  </label>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-xl">Total</p>
                <p className="font-medium text-xl">
                  &#36;{" "}
                  {discountType == "fixed"
                    ? Number.parseFloat(checkoutTotal - 10).toFixed(2)
                    : discountType == "percentage"
                    ? Number.parseFloat(
                        checkoutTotal - checkoutTotal / 10
                      ).toFixed(2)
                    : Number.parseFloat(checkoutTotal).toFixed(2)}
                </p>
              </div>
            </div>
            <Link href="/thank-you">
              <button className="w-full px-3 py-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <h2 className=" flex flex-col items-center gap-5 text-center">
          <p className="text-xl">
            Oops...You haven&#39;t added anything in cart.
          </p>
          <Link
            href="/products"
            className="p-2 bg-slate-500 rounded hover:bg-slate-900 text-white"
          >
            See All Products
          </Link>
        </h2>
      )}
    </div>
  );
};

export default Checkout;
