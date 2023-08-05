import { connect, useDispatch } from 'react-redux'
import Card from '../card/Card'
import styles from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from 'react'

function Favorites(props) {
   const orderOptions = ["A", "D"]
   const filterOptions = ["All", "Male", "Female", "Genderless", "unknown"]
   const [aux, setAux] = useState(false)
   const dispatch = useDispatch()

   const handleOrder = (e) =>{
      dispatch(orderCards(e.target.value))
      if (aux === false) {
         setAux(true)
      }else{
         setAux(false)
      }
   }

   const handleFilter = (e) => {
      dispatch(filterCards(e.target.value))
   }


   return (
      <div>
         <select onChange={handleOrder}>
            {
               orderOptions.map((option) => <option value={option}>{option}</option> )
            }
         </select>
         <select onChange={handleFilter}>
            {
               filterOptions.map((option) => <option value={option}>{option}</option> )
            }
         </select>
      <div className={styles.divCards}>
         {props.myFavorites.map((personaje) => {

            return (
               <Card className={styles.cardsComponent}
                  key={personaje.id}
                  id={personaje.id}
                  name={personaje.name}
                  status={personaje.status}
                  species={personaje.species}
                  gender={personaje.gender}
                  // origin={personaje.origin.name}
                  image={personaje.image}
                  onClose={props.onClose}
               />)
         })}
      </div>

      </div>
   )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
