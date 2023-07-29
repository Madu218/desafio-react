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
                <div className="title" id="name">{myPokemon.name}</div>
                <div className='description'>{myPokemon.types}</div>
            </div>

            <div className="stats">
                <div>
                    <div className="title">Hp:</div>
                    <div className='description'>{props.battleInfos.hp}</div>
                </div>

                <div>
                    <div className="title">Attack:</div>
                    <div className='description'>{props.battleInfos.attack}</div>
                </div>

                <div>
                    <div className="title">Defense:</div>
                    <div className='description'>{props.battleInfos.defense}</div>
                </div>

                <div>
                    <div className="title">Speed:</div>
                    <div className='description'>{props.battleInfos.speed}</div>
                </div>

                <div>
                    <div className="title">Special attack:</div>
                    <div className='description'>{props.battleInfos.special_attack}</div>
                </div>

                <div>
                    <div className="title">Special defense:</div>
                    <div className='description'>{props.battleInfos.special_defense}</div>
                </div>
            </div>
            <img src={myPokemon.img} alt="chosen pokémon" className={myPokemon.id}/>

            <div>
                {props.isMe && <ChooseButton handleClick={setRequestedPokemon} />}
                {!props.isMe && <RandomButton handleClick={setRequestedPokemon} />}
            </div>
        </>
    );
};