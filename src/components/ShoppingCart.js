import React, { useContext } from "react";

// Components
import Item from "./ShoppingCartItem";
import CartContext from "../contexts/CartContext";

const ShoppingCart = () => {
  const cart = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };
  console.log(cart);

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        // console.log(item)

        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
