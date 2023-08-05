import React from "react";
import RandomButton from "./RandomButton";

export default function SearchBar(props) {
   const [id, setId] = React.useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Add</button>
         <RandomButton onSearch={(props.onSearch)}/> 

      </div>
   );
}
