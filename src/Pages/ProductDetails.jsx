import { useParams } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import Card from "../components/Card";

function Productdetails(props) {
  const { id } = useParams();
  const Photo = props.Photos?.find((photo) => photo.id === id);

  const shuffledPhotos = [...props.Photos]
  .filter(photo => photo.id !== id)  // exclude current
  .sort(() => 0.5 - Math.random());

  // 2. Map the shuffled photos to Cards
  const Wholelist = shuffledPhotos.map((Photo) => (
    <Card
      id={Photo.id}
      name={Photo.name}
      price={Photo.price}
      number={Photo.number}
      key={Photo.id}
      image={Photo.image}
    />
  ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {Photo ? (
        <ProductDetailsCard
          id={Photo.id}
          image={Photo.image}
          name={Photo.name}
          price={Photo.price}
          stock={Photo.number}
          detail={Photo.detail}
        />
      ) : (
        <p className="text-red-500 font-semibold text-lg">Product not found</p>
      )}

      <h2 className="text-2xl font-semibold mt-12 mb-6">You may also like</h2>
      <ul className="flex flex-wrap justify-center gap-8">
      {Wholelist.slice(0,10)}
    </ul>
    </div>
  );
}

export default Productdetails;
