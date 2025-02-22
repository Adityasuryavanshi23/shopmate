import { useCart } from "../context/CartContext";

/* eslint-disable react/prop-types */
export const CartCard = ({ products }) => {
  const { title, price, image } = products;

  const { removefromcart } = useCart();

  console.log(products);

  return (
    <div className="  shadow-lg item-cart ">
      <img src={image} alt={title} className="w-20 item-image ml-16 " />
      <p className="text-lg  item-title">{title}</p>
      <p className="text-lg  item-price">${price}</p>
      <div className="text-right  item-remove">
        <button
          onClick={() => removefromcart(products)}
          className=" ease-in-out duration-100 hover:scale-105  bg-red-500 py-1 px-3 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
