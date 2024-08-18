import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <h1 className="p-2 text-3xl">Welcome to Prime</h1>
      <Link
        href="/products"
        className="p-2 bg-slate-500 hover:bg-slate-900 text-white rounded"
      >
        See All Products
      </Link>
    </main>
  );
}
