"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      await fetch(
        "https://dummyjson.com/products/category/sports-accessories?select=id,title,price,images"
      )
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.products);
          setLoading(false);
        });
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <div className="p-4 grid center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
