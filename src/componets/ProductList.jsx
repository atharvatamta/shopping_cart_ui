import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";
import Spinner from "react-spinner";
const ProductList = () => {
  const { products, loading, error } = useProducts(); //using context
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading && <Spinner/>}
        {error && <p className="text-red-500">❌ {error}</p>}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
