import Card from './Card';

export default function Cards(props) {
   return (
      <div>
         {props.characters.map(function (personaje) {
            return (
               <Card
                  key={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  origin={personaje.origin.name}
                  image={personaje.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />)
         })}
      </div>
   )
}
