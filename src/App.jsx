import { div } from "three/tsl";
import { useState, useEffect } from "react";
import ProductList from "./componets/ProductList";
import Header from "./componets/Header";
const App = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-200 min-h-screen p-6">
      <h1 className="font-bold text-xl mb-6">🛒 Products Catalogue</h1>
      <ProductList />{" "}
    </div></>
    
  );
};

export default App;
