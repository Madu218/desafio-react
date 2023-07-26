import React from "react";

export default function BattleModal(props) {
    function closeModal(e) {
        if (e.target.className === "modal-container") props.closeModal(false);
    };

    const pokemons = Object.values(props.battleStats);
    const vidas = {
        0: pokemons[0].hp,
        1: pokemons[1].hp
    }
    const relatorio = [];
    for (let index = 1; index < 5; index++) {
        let prefix1 = (Math.floor(Math.random() * 11)%2) == 0 ? "special_" : "";
        let prefix2 = (Math.floor(Math.random() * 11)%2) == 0 ? "special_" : "";

        let atacante = Math.floor(Math.random() * 11)%2;
        let defensor = atacante == 0 ? 1 : 0;


        relatorio.push(<div className="rounds">Round {index} &#9876;&#65039;</div>);
        
        let dano = pokemons[atacante][prefix1 + "attack"] - pokemons[defensor][prefix2 + "defense"];
        dano = dano > 0 ? dano : 0;
        vidas[defensor] -= dano;
        vidas[defensor] = vidas[defensor] > 0 ? vidas[defensor] : 0;

        relatorio.push(<div className="result">{pokemons[atacante].name} usou {prefix1}attack e causou {dano} de dano em {pokemons[defensor].name} que usou {prefix2}defense e agora tem {vidas[defensor]} de vida.</div>);

        if (vidas[defensor] == 0) break;
    };

    if (vidas[0] > 0 && vidas[1] <= 0) relatorio.push(<div className="result">{pokemons[0].name} venceu!</div>);
    else if (vidas[0] <= 0 && vidas[1] > 0) relatorio.push(<div className="result">{pokemons[1].name} venceu!</div>);
    else {
        if (pokemons[0].speed > pokemons[1].speed) relatorio.push(<div className="result">{pokemons[0].name} usou sua velocidade e fugiu do confronto, {pokemons[1].name} venceu!</div>);
        else if (pokemons[0].speed < pokemons[1].speed) relatorio.push(<div className="result">{pokemons[1].name} usou sua velocidade e fugiu do confronto, {pokemons[0].name} venceu!</div>);
        else relatorio.push(<div className="result">Ambos se cansaram e ninguém ganhou!</div>);
    };

    return(
        <>
            <div className="modal-container" onClick={closeModal}>
                <div className="modal">
                    {relatorio}
                </div>
            </div>
        </>
    );
};