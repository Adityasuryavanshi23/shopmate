/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const getinitailstate = () => {
  try {
    const saveddata = JSON.parse(localStorage.getItem("cartState"));
    return (
      saveddata || {
        products: [
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
            image:
              "../../public/assets/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg",
          },
        ],
        cartList: [],
        total: 0,
      }
    );
  } catch {
    return {
      products: [
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
          image:
            "../../public/assets/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg",
        },
      ],
      cartList: [],
      total: 0,
    };
  }
};

const initialState = getinitailstate();

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  const addtocart = (products) => {
    const updatecart = state.cartList.concat(products);
    updatetotal(updatecart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatecart,
      },
    });
  };

  const removefromcart = (products) => {
    const updatecart = state.cartList.filter(
      (items) => items.id !== products.id
    );

    updatetotal(updatecart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatecart,
      },
    });
  };

  const updatetotal = (products) => {
    let total = 0;
    products.forEach((items) => (total = total + items.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        updatePrice: total,
      },
    });
  };

  const value = {
    products: state.products,
    cartList: state.cartList,
    total: state.total,
    addtocart,
    removefromcart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
