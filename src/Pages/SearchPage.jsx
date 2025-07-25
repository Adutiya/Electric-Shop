import { useLocation } from "react-router-dom"
import Photos from "../Data/Photos"
import Card from "../components/Card";

function useInput(){
    return new URLSearchParams(useLocation().search);
}





function SearchPage(props){
    const input = useInput().get("q")?.toLowerCase() || "";
    const filtered = Photos.filter((p) => p.name.toLowerCase().includes(input));
    return(
       <div>
        <h2>Search Result For:<strong>{input}</strong></h2>
        {filtered.length===0?(
            <p>no products found</p>
        ):(
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filtered.map((photo) => (
              <Card
                key={photo.id}
                id={photo.id}
                name={photo.name}
                image={photo.image}
                price={photo.price}
                category={photo.category}
                subcategory={photo.subcategory}
                stock={photo.number}
                // pass other props as needed
              />
            ))}
          </ul>
        )}
       </div>
    )
}

export default SearchPage