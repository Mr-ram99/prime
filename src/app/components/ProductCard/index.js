import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div class="max-w-sm p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow">
      <Image src={product.images[0]} alt="Thumbnail" width={200} height={100} />
      <div className="w-full flex justify-between">
        <p class="mb-3 font-normal text-gray-700">{product.title}</p>
        <p class="mb-3 font-normal text-gray-700"> &#36; {product.price}</p>
      </div>
      <button className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
