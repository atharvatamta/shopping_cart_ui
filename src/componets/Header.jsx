import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    const {cart} = useCart();
    const itemCount = cart.reduce((accumulator, item)=>accumulator + item.qty,0)
    return ( <header className="bg-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold  text-blue-600 ">
            ShoppingCart
        </h1>
        <div className='relative'>
        <FaShoppingCart className='text-2xl text-gray-700' />
        {itemCount > 0 && (
          <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
            {itemCount}
          </span>
        )}
      </div>
    </header> );
}
 
export default Header;