/* eslint-disable react/prop-types */
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export const Home = ({ title }) => {
  useTitle(title);

  const { products } = useCart();

  return (
    <main className="m-auto ">
      <section>
        <div className="flex flex-wrap gap-4 justify-center px-4 my-24 max-w-screen-xl ">
          {products?.map((products) => (
            <ProductCard key={products.id} products={products} />
          ))}
        </div>
      </section>
    </main>
  );
};
