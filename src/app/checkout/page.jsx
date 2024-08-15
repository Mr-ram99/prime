"use client";

import { useContext } from "react";
import { CartContext } from "../Home";
import CartItemCard from "../components/CartItemCard";
import Link from "next/link";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const checkoutTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div>
      {cart.length >= 1 ? (
        <div className="flex flex-col md:flex-row items-center md:justify-around md:items-start">
          <div className="p-4 grid center grid-cols-1 md:grid-cols-2  gap-5">
            {cart.map((item) => (
              <CartItemCard key={item.id} product={item} />
            ))}
          </div>
          <div class="w-96 md:w-1/3 p-6 bg-white shadow-md rounded-lg">
            <h2 class="text-xl font-semibold mb-4">Cart Summary</h2>
            {cart.map((item) => (
              <li key={item.id} class="flex justify-between items-start mb-4">
                <div>
                  <p class="font-medium">{item.title}</p>
                  <p class="text-sm text-gray-500">&#36; {item.price}</p>
                </div>
                <p>{item.quantity}</p>
                <p class="font-medium">
                  &#36;{" "}
                  {Number.parseFloat(item.quantity * item.price).toFixed(2)}
                </p>
              </li>
            ))}

            <div class="border-t border-gray-300 mt-4 pt-4">
              <div class="flex justify-between items-center mb-2">
                <p class="font-medium">Total</p>
                <p class="font-medium"> &#36; {checkoutTotal}</p>
              </div>

              <div class="flex justify-between items-center mb-4">
                <p class="font-medium">--</p>
                <p class="font-medium">--</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center flex flex-col items-center gap-5">
          <p>Oops...You haven&#39;t added anything in cart.</p>
          <Link
            href="/products"
            className="p-2 bg-slate-500 rounded hover:bg-slate-900 text-white"
          >
            See All products
          </Link>
        </h2>
      )}
    </div>
  );
};

export default Checkout;
