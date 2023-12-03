import React, { createContext, useContext, useState, useEffect } from "react";

import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProduct = [];

    if (cartIndex >= 0) {
      newCartProduct = cartProducts;
      newCartProduct[cartIndex].quantity =
        newCartProduct[cartIndex].quantity + 1;
      setCartProducts(newCartProduct);
    } else {
      product.quantity = 1;
      newCartProduct = [...cartProducts, product];
      setCartProducts(newCartProduct);
    }

    await localStorage.setItem(
      "codeburger:cartInfo",
      JSON.stringify(newCartProduct)
    );
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem("codeburger:cartInfo");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };
    loadUserData();
  }, []);

  return (
    <CartContext.Provider value={{ putProductInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used with CartContext");
  }
  return context;
};
