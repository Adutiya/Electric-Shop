import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Form(){
  const[input,setInput]=useState("")
  const navigate=useNavigate();
  const handleSubmit =(e)=>{
   e.preventDefault();
   if(input.trim()){
    navigate(`/searchpage?q=${input}`)
   }
   setInput("")
  }
    return(
      <form onSubmit={handleSubmit} className= "flex items-center w-full max-w-md mx-auto bg-white border border-yellow-400 rounded-full shadow-sm px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-300">
        <h2>
            <label htmlFor="adutiya"></label>
        </h2>
        <input 
        type="text"
         name="text"
         autoComplete="off"
         id="adutiya"
         placeholder="Search products..."
         className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
         value={input}
         onChange={(e)=>setInput(e.target.value)}
         
         />

        <button type="submit" 
    className="text-yellow-500 font-semibold hover:text-yellow-600 transition">
            Search
        </button>
      </form>
    )
}
export default Form