import React from "react";
import axios from "axios";

import Pokemon from "./Pokemon";
import BattleModal from "./BattleModal";
import Loading from "./Loading";

export default function PokemonDetails() {
    const [infos, setInfos] = React.useState({
        num: 1,
        id: 0,
        function: () => {}
    });

    const initialStats = {
        name: "bulbasaur",
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45
    };
    const [battleInfos, setBattleInfos] = React.useState({
        "my-pokemon": initialStats,
        "opponent-pokemon": initialStats
    });

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading((prevState) => !prevState);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${infos.num}/`)
		.then((response) => {
            infos.function({
                name: response.data.name,
                types: response.data.types.map((dict) => dict.type.name).join(' - '),
                img: response.data.sprites.front_default,
                id: infos.id
            });
            setBattleInfos({
                ...battleInfos,
                [infos.id]: {
                    name: response.data.name,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    special_attack: response.data.stats[3].base_stat,
                    special_defense: response.data.stats[4].base_stat,
                    speed: response.data.stats[5].base_stat
                }
            });
            setLoading((prevState) => !prevState);
		})
		.catch((e) => {
            setLoading((prevState) => !prevState);
            window.alert(e.message);
		});
    }, [infos]);

    const [isModalOn, setIsModalOn] = React.useState(false);
    function toggleModal() {
        setIsModalOn((prevState) => !prevState);
    }

    return(
        <section className="battle-section">
            <div className="battle-pokemon">
                <Pokemon
                    func={setInfos}
                    isMe={true}
                />
            </div>

            {!loading && <button type="button" onClick={toggleModal}>BATTLE!</button>}

            {loading && <Loading/>}

            <div className="battle-pokemon">
                <Pokemon
                    func={setInfos}
                    isMe={false}
                />
            </div>

            {isModalOn &&
                <BattleModal
                closeModal={toggleModal}
                battleStats={battleInfos}
                />
            }
        </section>
    );
};