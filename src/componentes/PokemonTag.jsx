import React from "react";

export default function PokemonTag(props) {


    return (
        <div className="tag">
            <img src={props.img} alt="pokemon_sprites" />
            <h4>{props.name}</h4>
        </div>
    );
};