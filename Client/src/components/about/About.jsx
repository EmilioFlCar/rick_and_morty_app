import styles from './About.module.css'
import myImage from '../../assets/Emilio.jpg'

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.aboutMe}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.myImageContainer}>
                <img src={myImage} alt="Mi Foto" className={styles.myImage} />
                </div>
                <p>Hola, soy Emilio Flórez, tengo 25 años de edad. Vivo en Arboletes, Antioquia, Colombia.
                    Soy estudiante de desarrollo web FullStack, apasionado por por la programación, la tecnología y los vídeojuegos.</p>
                <p>Este proyecto hace parte de la experiencia en SoyHenry como una manera de integrar los conocimientos
                    que progresivamente he estado adquiriendo durante el bootcamp</p>

                <p>Para el desarrollo de esta aplicacion, se han usado tecnologías como React, css, express.</p>
                <p>Los datos mostrados son consumidos de la API: <a href="https://rickandmortyapi.com">Rick And Morty API</a></p>


            </div>
        </div>
    );
}