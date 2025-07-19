import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
function ProductDetailsCard(props) {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemExists = cartItems.find((i) => i.id === props.id);
  const handleAddToCart = () => {
    
    if (itemExists) {
      navigate("/cart"); // Navigate if item already exists
    } else {
      dispatch(addToCart(props));
      
    }
  };
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6 flex flex-col md:flex-row gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={props.image}
          alt={props.name}
          className="w-full  object-cover object-center rounded-xl"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{props.name}</h2>
          <p className="text-2xl text-pink-600 font-semibold mb-2">₹{props.price}</p>
          <p className={`text-md mb-6 ${props.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {props.stock > 0 ? `In Stock: ${props.stock}` : "Out of Stock"}
          </p>

          <p className="text-gray-600 mb-6">
           {props.detail}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
        <button
            onClick={handleAddToCart}
            className={`${
              itemExists
                ? "bg-green-600 hover:bg-green-700"
                : "bg-pink-600 hover:bg-pink-700"
            } text-white px-6 py-2 rounded-xl font-semibold`}
          >
            {itemExists ? "Go to Cart" : "Add to Cart"}
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-xl font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
