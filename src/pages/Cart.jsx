/* eslint-disable react/prop-types */
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title, product, setproduct }) => {
  const handledelete = (id) => {
    setproduct(product.filter((products) => id !== products.id));
    console.log(id);
  };

  useTitle(title);
  return (
    <main>
      <section className="max-w-screen-xl m-auto">
        <p className="capitalize text-2xl my-10 text-center">
          cart items : {product.length}
        </p>
        {product.map((products) => (
          <div
            key={products.id}
            className="grid grid-cols-4 ml-12 border-2 gap-4 border-black p-4 my-10"
          >
            <img src={products.image} alt={products.title} className="w-20" />
            <div>{products.title}</div>
            <div>{products.price}</div>
            <div className="text-right">
              <button
                onClick={() => handledelete(products.id)}
                className="text-right bg-red-500 py-1 px-3 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
