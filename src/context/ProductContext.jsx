import { createContext, useContext, useState, useEffect } from "react";
//step 1
const ProductContext = createContext(); //will create a new context object called ProductContext. We will use this context to share the product data across our application.

// We need to create and export a provider component that will wrap around our application.
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    //step 2 provide value
    <ProductContext.Provider value={{ loading, products, error }}>
      {/* This will provide the products, loading, and error state to all of the
      children of the ProductProvider. The children prop is a special prop that contains 
      all of the components that are wrapped in the provider. This allows us to pass
       the context data down to any component that needs it. */}
      {children}
    </ProductContext.Provider>
  );
}
export function useProducts(){//custom hook
    return useContext(ProductContext)
}
