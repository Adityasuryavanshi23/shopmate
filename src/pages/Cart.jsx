/* eslint-disable react/prop-types */
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {
  useTitle(title);
  const Cartproducts = [
    {
      id: 1,
      title: "Sony imax123h",
      price: 129,
      images:
        "../../public/assets/images/domino-studio-164_6wVEHfI-unsplash.jpg",
    },
    {
      id: 1,
      title: "Sony imax123h",
      price: 129,
      images:
        "../../public/assets/images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
    },
  ];
  return (
    <main>
      <section className="max-w-screen-xl m-auto">
        <p className="capitalize text-2xl my-10 text-center">
          cart items : {Cartproducts.length}
        </p>
        <div>
          {Cartproducts.map((products) => (
            <CartCard key={products.id} products={products} />
          ))}
        </div>
      </section>
    </main>
  );
};
