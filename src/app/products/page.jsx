"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      await fetch(
        "https://dummyjson.com/products/category/sports-accessories?select=id,title,price,images"
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setProducts(res.products);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {loading && <div className="text-center text-xl">Loading...</div>}
      {error && (
        <div className="text-center text-xl text-red-500">{`${error}: Please check your internet connection.`}</div>
      )}
      {!loading && !error && (
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
