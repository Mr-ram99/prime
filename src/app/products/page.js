"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      await fetch("https://dummyjson.com/products/category/smartphones")
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products);
          console.log(res.products);
        });
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid center grid-cols-1 md:grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
