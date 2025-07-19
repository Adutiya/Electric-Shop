import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartCard(props) {
  const dispatch = useDispatch();

  return (
    <div className="flex border rounded-xl shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="ml-6 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-lg font-medium text-gray-900 leading-tight">
            {props.name}
          </h2>
          <h3 className="text-green-600 font-semibold text-xl mt-2">
            ₹{props.price}
          </h3>
        </div>

        <div className="flex gap-3 mt-4 text-sm">
          <button className="border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
            SAVE FOR LATER
          </button>
          <button
            onClick={() => dispatch(removeFromCart(props.id))}
            className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-100"
          >
            REMOVE
          </button>
        </div>
      </div>

      {/* Buy button */}
      <div className="ml-auto flex items-start">
        <button className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow">
          Buy
        </button>
      </div>
    </div>
  );
}

export default CartCard;
