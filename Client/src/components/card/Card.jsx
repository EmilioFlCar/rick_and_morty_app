import { connect } from 'react-redux';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';



function Card(props) {
   const { addFav, removeFav, myFavorites } = props
   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false)
         removeFav(props.id)
      } else {
         setIsFav(true)
         const {id, name, status, gender, image, species, origin} = props
         const char = {id, name, status, gender, image, species, origin}
         console.log(char)
         addFav(char)

      }
   }

   return (
      <div className={styles.cardContainer}>
         <div className={styles.divCard}>
            {isFav ? (
               <span className={styles.favButton} onClick={handleFavorite}>❤️</span>
            ) : (
               <span className={styles.favButton} onClick={handleFavorite}>🤍</span>
            )}
            <button onClick={() => props.onClose(props.id)} className={styles.boton}>X</button>
            <Link to={`/detail/${props.id}`}><h2 className={styles.titulo}>{props.name}</h2></Link>
            <img src={props.image} alt='' className={props.status === 'Dead' ? styles.muerto : styles.imagen} />
            {/* <h2>{props.status}</h2> */}
            <h2>Species: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Origin: {props.origin}</h2>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
