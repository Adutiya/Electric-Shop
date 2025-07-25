import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PriceCard() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-full max-w-sm mx-auto sticky top-24">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-3 tracking-wide">
        Price Details
      </h2>

      <div className="space-y-4 text-gray-700 text-[15px]">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className="truncate w-3/4">
              {item.name.split(" ").slice(0, 3).join(" ")}...
            </span>
            <span className="font-semibold text-gray-900">₹{item.price}</span>
          </div>
        ))}

        <hr className="border-t border-gray-300 my-4" />

        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>
      </div>

      <Link
        to="/checkout2"
        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-center py-3 rounded-xl shadow-md transition duration-300 ease-in-out"
      >
        Place Order
      </Link>
    </div>
  );
}

export default PriceCard;
