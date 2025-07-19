import { Link } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
function Card(props) {
  const dispatch=useDispatch();
  const handleAddToCart=()=>{
    dispatch(addToCart(props))
  }
    return (
      <div className=" relative  border-2 border-yellow-400 rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 w-72">
         {/* <button onClick={handleAddToCart} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg">
         <FaCartPlus />
  </button> */}
        <img src={props.image} alt={props.name} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2 bg-fuchsia-400 px-2 py-1 rounded">
          {props.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">Price: ₹{props.price}</p>
        <Link

to={`/product/${props.id}`}
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
        >
          View
        </Link>
      </div>
    );
  }
  
  export default Card;
  