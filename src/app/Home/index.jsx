"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useState } from "react";

export const CartContext = createContext();

const Home = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, cartCount }}>
      <nav className="flex justify-between items-center ">
        <Link href="/" className="p-2 text-4xl">
          Prime
        </Link>
        <Link href="/checkout" className="relative">
          <Image
            src="/assets/shopping-cart.png"
            alt="Cart"
            width={40}
            height={40}
            className="m-3 p-2"
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        </Link>
      </nav>
      {children}
    </CartContext.Provider>
  );
};

export default Home;
