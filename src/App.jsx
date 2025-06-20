import React, { useState } from "react";
import Cart from "./components/Cart";
import AddCart from "./components/AddCart";
import Search from "./components/Sreach";

const App = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 2,
      name: "product-2",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 3,
      name: "product-3",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 4,
      name: "product-4",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 5,
      name: "narsa",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
  ]);

    const addNewProduct = (newItem) => {
    setProduct([...product, newItem]);
    }
  return (
    <div className="container">
      <div>
        {/* <Search product={product} /> */}
        <AddCart newCard={addNewProduct} />
      </div>
      <div className="row mt-3">
        {product.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Cart item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
