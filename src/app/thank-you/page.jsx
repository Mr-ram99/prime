"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "../Home";
import Link from "next/link";

const ThankYouPage = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 m-3">
      <p className="text-xl text-center text-blue-400">
        Thank you for shopping with Us. Have a great day.
      </p>
      <Link
        href="/products"
        className="p-2 bg-slate-500 hover:bg-slate-900 text-white rounded"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
