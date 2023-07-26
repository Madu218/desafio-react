import React from "react";

export default function RandomButton(props) {
    function requestPokemon() {
        const num = Math.floor(Math.random() * 1010);
        props.handleClick(num);
    };

    return(
        <>
            <button className="buttons" onClick={requestPokemon}>Novo Adversário</button>
        </>
    );
};