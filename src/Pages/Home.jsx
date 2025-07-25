import Card from "../components/Card"

function Home(props){
    const Wholelist = props.Photos?.map((Photo) => (
        <Card
          id={Photo.id}
          name={Photo.name}
          price={Photo.price}
          stock={Photo.number}
          key={Photo.id}
          image={Photo.image}
        />
      ));
return(
   
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-6">
       
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 underline decoration-yellow-400 underline-offset-4">
      We Sell Electronics
    </h1>
    
  
    <ul className="flex flex-wrap justify-center gap-8">
      {Wholelist}
    </ul>
  </div>
)
}
export default Home