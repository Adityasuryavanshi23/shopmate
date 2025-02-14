import { Header, Footer } from "./components/index";
import { AllRoutes } from "./Routes/AllRoutes";
import img1 from "./assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import img2 from "./assets/domino-studio-164_6wVEHfI-unsplash.jpg";
import img3 from "./assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg";
import img4 from "./assets/irene-kredenets-KStSiM1UvPw-unsplash.jpg";
import img5 from "./assets/olena-bohovyk-ElfJDs4LAQk-unsplash.jpg";
import img6 from "./assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg";
import { useState } from "react";

const App = () => {
  const [product, setproduct] = useState([
    {
      id: 1,
      title: "Headphone",
      price: 19.99,
      image: img1,
    },
    {
      id: 2,
      title: "Shoes",
      price: 29.99,
      image: img2,
    },
    {
      id: 3,
      title: "Googles",
      price: 39.99,
      image: img3,
    },
    {
      id: 4,
      title: "Juice",
      price: 49.99,
      image: img4,
    },
    {
      id: 5,
      title: "Pepsi",
      price: 59.99,
      image: img5,
    },
    {
      id: 6,
      title: "Watch",
      price: 69.99,
      image: img6,
    },
  ]);
  return (
    <>
      <Header product={product} />
      <AllRoutes product={product} setproduct={setproduct} />
      <Footer />
    </>
  );
};

export default App;
