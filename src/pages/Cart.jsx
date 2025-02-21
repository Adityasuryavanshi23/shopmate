/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {
  useTitle(title);
  const { cartList, total } = useCart();

  return (
    <main>
      <section className="max-w-screen-xl m-auto">
        <p className="capitalize text-2xl my-24 text-center">
          cart items : {cartList.length} / ${total}
        </p>
        <div>
          {cartList.map((products) => (
            <CartCard key={products.id} products={products} />
          ))}
        </div>
      </section>
    </main>
  );
};
