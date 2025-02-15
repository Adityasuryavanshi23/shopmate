/* eslint-disable react/prop-types */
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components/ProductCard";

export const Home = ({ title }) => {
  useTitle(title);
  const products = [
    {
      id: 1,
      title: "Headphones sony max12h",
      price: 120,
      image: "../../public/assets/images/c-d-x-PDX_a_82obo-unsplash.jpg",
    },
    {
      id: 2,
      title: "Sony Max12h",
      price: 110,
      image:
        "../../public/assets/images/domino-studio-164_6wVEHfI-unsplash.jpg",
    },
    {
      id: 3,
      title: "Sony Max12h",
      price: 110,
      image:
        "../../public/assets/images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
    },
    {
      id: 4,
      title: "Sony Max12h",
      price: 110,
      image:
        "../../public/assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg",
    },
    {
      id: 5,
      title: "Sony Max12h",
      price: 110,
      image:
        "../../public/assets/images/olena-bohovyk-ElfJDs4LAQk-unsplash.jpg",
    },
    {
      id: 6,
      title: "Sony Max12h",
      price: 110,
      image: "../../public/assets/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg",
    },
  ];

  return (
    <main className="  m-auto">
      <section>
        <div className="flex flex-wrap gap-4 justify-center px-4 my-10 max-w-screen-xl ">
          {products.map((products) => (
            <ProductCard key={products.id} products={products} />
          ))}
        </div>
      </section>
    </main>
  );
};
