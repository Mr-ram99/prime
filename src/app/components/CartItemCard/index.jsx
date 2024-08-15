import { CartContext } from "../../Home";
import Image from "next/image";
import { useContext } from "react";

const CartItemCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: amount } : item
      )
    );
  };

  return (
    <div className="max-w-sm p-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow">
      <Image src={product.images[0]} alt="Thumbnail" width={200} height={200} />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <p className="mb-3 font-normal text-gray-700">{product.title}</p>
          <p className="mb-3 font-normal text-gray-700">
            &#36; {product.price}
          </p>
        </div>

        <div className="flex justify-between">
          <button
            className="px-3 py-2 mx-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900"
            onClick={() => changeQuantity(product.id, product.quantity + 1)}
          >
            +
          </button>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              changeQuantity(product.id, parseInt(e.target.value) || 0)
            }
            className="border rounded w-16 text-center"
            min={1}
          />
          <button
            className="px-3 py-2 mx-2 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900 disabled:bg-gray-500"
            onClick={() => changeQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity === 1}
          >
            -
          </button>
        </div>
      </div>
      <button
        className="w-full rounded p-2 text-base font-medium text-center text-white bg-red-500 hover:bg-red-800"
        onClick={() => removeItem(product.id)}
      >
        Remove Item
      </button>
    </div>
  );
};

export default CartItemCard;
