import Buycard from "../components/BuyCard";
import { useParams } from "react-router-dom";

function Checkout(props) {
  const { id } = useParams();
  const product = props.Photos?.find((photo) => photo.id === id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {product ? (
        <>
          <Buycard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            number={product.number}
          />

          {/* Fixed bottom price and continue button */}
          <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t p-4 flex justify-between items-center z-50">
            <p className="text-xl font-semibold">
              Total: ₹{product.price}
            </p>
            <button   onClick={() => alert("Proceeding to checkout...")}className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Continue
            </button>
          </div>
        </>
      ) : (
        <p className="text-red-500 font-semibold text-lg text-center">
          Product out of Stock
        </p>
      )}
    </div>
  );
}

export default Checkout;
