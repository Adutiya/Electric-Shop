import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function PoolCheckout() {
  const CartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = CartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div>
      <h2>Order Summary</h2>
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
        </div> 
      )}
      {CartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300 p-4 flex justify-between items-center px-8 z-50">
          <div className="text-lg font-medium">
            Total: ₹{totalPrice.toFixed(2)}
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            onClick={() => toast.success("Product placed successfully")}
          >
            Continue
          </button>
        </div>
      )}
      <div>
        
      </div>
    </div>
  );
}

export default PoolCheckout;
