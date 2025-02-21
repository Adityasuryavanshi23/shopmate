/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ products }) => {
  const [isincart, setisincart] = useState(false);
  const { title, price, image } = products;
  const { addtocart, cartList, removefromcart } = useCart();

  useEffect(() => {
    const isincart = cartList.find((items) => items.id === products.id);

    if (isincart) {
      setisincart(true);
    } else {
      setisincart(false);
    }
  }, [cartList, products.id]);

  return (
    <section>
      <div className=" max-w-screen-xl m-auto rounded-md">
        <div className="max-w-sm shadow-lg border  ease-in-out duration-100 hover:scale-105   p-4 ">
          <img src={image} alt={title} className="w-80  h-80 rounded-md" />
          <h1 className="text-2xl mb-6 mt-4">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-xl ">${price}</p>
            {isincart ? (
              <button
                onClick={() => removefromcart(products)}
                className="py-1 px-6 text-lg bg-red-600 text-white  rounded-md capitalize ease-in-out duration-100 hover:scale-105 "
              >
                remove
              </button>
            ) : (
              <button
                onClick={() => addtocart(products)}
                className="py-1 px-6 text-lg bg-blue-800 text-white  rounded-md capitalize ease-in-out duration-100 hover:scale-105 "
              >
                add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
