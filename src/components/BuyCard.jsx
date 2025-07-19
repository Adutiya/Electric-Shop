function Buycard(props) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-64 object-cover object-top rounded-xl mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.name}</h2>
          <p className="text-xl font-bold text-green-600">₹{props.price}</p>
        </div>
      </div>
    );
  }
  
  export default Buycard;
  