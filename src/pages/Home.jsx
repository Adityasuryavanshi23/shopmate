/* eslint-disable react/prop-types */
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components/ProductCard";

export const Home = ({ title, product }) => {
  useTitle(title);

  return (
    <main className="  m-auto">
      <section className="flex flex-wrap gap-4 justify-center px-4 my-10 max-w-screen-xl ">
        {product.map((products) => (
          <ProductCard
            key={products.id}
            title={products.title}
            price={products.price}
            image={products.image}
          />
        ))}
      </section>
    </main>
  );
};
