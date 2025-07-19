import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import CartCard from "../components/CartCard";
import PriceCard from "../components/PriceCard";

function Cart() {
  const CartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {CartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty</p>
      ) : (
        // Flex layout for cart items and price card
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Left side: Cart Items */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CartItems.map((Photo) => (
              <div
                key={Photo.id}
                className="flex flex-col items-center bg-white shadow-md rounded-xl p-4"
              >
                <CartCard
                  id={Photo.id}
                  name={Photo.name}
                  price={Photo.price}
                  number={Photo.number}
                  image={Photo.image}
                />
                
              </div>
            ))}
          </div>

          {/* Right side: PriceCard */}
          <div className="w-full lg:w-[300px] bg-white shadow-md rounded-xl p-6 h-fit sticky top-24">
            <PriceCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
