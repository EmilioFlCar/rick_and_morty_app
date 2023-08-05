import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   return (
      <div className={styles.divCards}>
         {props.characters.map((personaje) => {

            return (
               <Card className={styles.cardsComponent}
                  key={personaje.id}
                  id={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  origin={personaje.origin.name}
                  image={personaje.image}
                  onClose={props.onClose}
               />)
         })}
      </div>
   )
}
