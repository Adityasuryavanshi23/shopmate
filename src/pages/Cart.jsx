/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {
  useTitle(title);
  const { cartList, total } = useCart();

  return (
    <main>
      <section className="max-w-screen-xl min-h-[400px]  my-28 m-auto">
        {cartList.length == 0 && (
          <h1 className="text-center capitalize text-3xl mt-4">
            Cart is Empty
          </h1>
        )}

        <div>
          {cartList.map((products) => (
            <CartCard key={products.id} products={products} />
          ))}
        </div>
      </section>
      <p className="capitalize text-2xl text-right mr-12">
        cart items : {cartList.length}
      </p>

      <div className="text-right mr-12 capitalize text-3xl mt-4">
        total: ${total}
      </div>
    </main>
  );
};
