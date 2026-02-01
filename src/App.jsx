import { div } from "three/tsl";
import { useState, useEffect } from "react";
import ProductList from "./componets/ProductList";
const App = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) throw new Error("data fetching failed");
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError(error);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <h1 className="font-bold text-xl mb-6">🛒 Products Catalogue</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error occured</p>}
      <ProductList products={products} />
    </div>
  );
};

export default App;
