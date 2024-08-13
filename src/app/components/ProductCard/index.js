import { CartContext } from "@/app/Home";
import Image from "next/image";
import { useContext, useState } from "react";

const ProductCard = ({ product }) => {
  const { setCartItems } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddItemToCart = (product) => {
    setCartItems((prev) => ({
      items: [...prev.items, product],
      count: prev.count + 1,
    }));
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <div className="max-w-sm p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow">
      <Image src={product.images[0]} alt="Thumbnail" width={200} height={200} />
      <div className="w-full flex justify-between">
        <p className="mb-3 font-normal text-gray-700">{product.title}</p>
        <p className="mb-3 font-normal text-gray-700"> &#36; {product.price}</p>
      </div>
      <button
        className="w-full px-3 py-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900"
        onClick={() => handleAddItemToCart(product)}
      >
        {isClicked ? (
          <span>Added to cart &#10004; </span>
        ) : (
          <span>Add to Cart</span>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
