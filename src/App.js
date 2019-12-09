import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Context
import ProductContext from "./contexts/ProductContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import cartContext from "./contexts/cartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <cartContext.Provider value={cart}>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </cartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
