import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import Card from "../components/Card";

function Cart(props) {
  const CartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {CartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {CartItems.map((Photo) => (
    <div
      key={Photo.id}
      className="flex flex-col items-center bg-white shadow-md rounded-xl p-4"
    >
      {/* Card */}
      <Card
        id={Photo.id}
        name={Photo.name}
        price={Photo.price}
        number={Photo.number}
        image={Photo.image}
       
      />

      {/* Button - contained in same flex box */}
      <button
        onClick={() => dispatch(removeFromCart(Photo.id))}
        className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded"
      >
        Remove from Cart
      </button>
    </div>
  ))}
</div>

      )}
    </div>
  );
}

export default Cart;
