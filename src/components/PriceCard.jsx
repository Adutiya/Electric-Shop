import { useSelector } from "react-redux";

function PriceCard() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm mx-auto sticky top-24 border border-gray-200">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b text-gray-800">PRICE DETAILS</h2>
      <div className="space-y-3 text-gray-700 text-sm">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name.split(" ").slice(0, 3).join(" ")}...</span>
            <span className="font-medium text-gray-800">₹{item.price}</span>
          </div>
        ))}

        <hr className="my-3 border-gray-300" />

        <div className="flex justify-between text-base font-bold text-gray-900">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded shadow-md transition">
        PLACE ORDER
      </button>
    </div>
  );
}

export default PriceCard;
