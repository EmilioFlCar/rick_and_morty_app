import React from "react";

export default function RandomButton(props){
    function getRandomCharacter(){
        let result = Math.floor(Math.random() * (827 - 1) + 1);
        return result
    }
    return(
        <button onClick={() => props.onSearch(getRandomCharacter())}>random</button>
    )
}