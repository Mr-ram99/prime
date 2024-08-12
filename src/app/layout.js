import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prime",
  description: "Next Generation Shopping Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between items-center ">
          <Link href="/" className="p-2 text-4xl">
            Prime
          </Link>
          <button>
            <Image
              src="/assets/shopping-cart.png"
              alt="Cart"
              width={40}
              height={40}
              className="m-3 p-2"
            />
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
