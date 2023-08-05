import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css';

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        })
        .catch(error => {
            console.error("Error fetching character:", error);
        });
    }, [id]);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.characterInfo}>
                {character && (
                    <div>
                        {character.name && <p className={styles.characterName}>{character.name}</p>}
                        {character.status && (
                            <p className={`${styles.characterStatus} ${character.status === 'Dead' ? styles.dead : ''}`}>
                                Status: {character.status}
                            </p>
                        )}
                        {character.species && <p>Species: {character.species}</p>}
                        {character.gender && <p>Gender: {character.gender}</p>}
                        {character.origin && character.origin.name && (
                            <p>Origin: {character.origin.name}</p>
                        )}
                        {character.image && <img src={character.image} alt={character.name} />}
                    </div>
                )}
            </div>
        </div>
    );
}