/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Home, Cart } from "../pages";

export const AllRoutes = ({ product, setproduct }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home title="Home" product={product} setproduct={setproduct} />
          }
        />
        <Route
          path="cart"
          element={
            <Cart title="Cart" product={product} setproduct={setproduct} />
          }
        />
        <Route />
      </Routes>
    </>
  );
};
