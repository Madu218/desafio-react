import React from 'react';
import axios from 'axios';

import PokemonTag from './PokemonTag';

export default function Pokedex() {
    const [pokemonList, setPokemonList] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${20}`)
		.then((response) => {
            setPokemonList(response.data.results.map((pokemon) => {
                return ([
                    <PokemonTag
                        key={pokemon.name}
                        name={pokemon.name}
                        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    />
                ]);
            }));
		})
		.catch((e) => {
            window.alert(e.message);
		});
    }, []);

    return (

        <section className='pokedex'>
            <h1>
                <img src="https://gifs.eco.br/wp-content/uploads/2023/02/imagens-de-pokebola-aberta-png-6.png" alt="oioi" />
                Pokedéx
            </h1>
            {pokemonList}
        </section>
    );
};