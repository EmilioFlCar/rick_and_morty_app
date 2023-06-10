export default function SearchBar(props) {
   return (
      <div>
         {console.log(props)}
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
