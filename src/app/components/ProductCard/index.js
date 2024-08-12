import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <Image src={product.thumbnail} alt="Thumbnail" width={100} height={100} />
    </div>
  );
};

export default ProductCard;
