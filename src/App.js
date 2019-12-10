import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Hooks
import useLocalStorage from "./Hooks/useLocalStorage";

// Context
import ProductContext from "./contexts/ProductContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cartContainer", []);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = item => {
    const newProductList = cart.filter(product => product.id !== item.id);
    setCart(newProductList);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
