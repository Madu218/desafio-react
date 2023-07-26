import React from "react";

import ChooseButton from "./ChooseButton";
import RandomButton from "./RandomButton";

export default function Pokemon(props) {
    const [requestedPokemon, setRequestedPokemon] = React.useState(1);

    const [myPokemon, setMyPokemon] = React.useState({
        name: "bulbasaur",
        types: "grass - poison",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        id: props.isMe ? "my-pokemon" : "opponent-pokemon"
    });

    React.useEffect(() => {
        props.func({
            num: requestedPokemon,
            id: myPokemon.id,
            function: setMyPokemon
        });
    }, [requestedPokemon]);

    return(
        <>
            <div>
                <div className="title">Nome:</div>
                <div className='description'>{myPokemon.name}</div>
            </div>

            <div>
                <div className="title">Tipo:</div>
                <div className='description'>{myPokemon.types}</div>
            </div>
            <img src={myPokemon.img} alt="chosen pokémon" className={myPokemon.id}/>

            <div>
                {props.isMe && <ChooseButton handleClick={setRequestedPokemon} />}
                {!props.isMe && <RandomButton handleClick={setRequestedPokemon} />}
            </div>
        </>
    );
};