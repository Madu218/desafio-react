import React from "react";

export default function ChooseButton(props) {
    const [input, setInput] = React.useState(1);
	function getUserInput(event) {
		setInput(parseInt(event.target.value));
	};

    function requestPokemon() {
        props.handleClick(input);
    };

    return (
        <>
            <input type="number" min="1" max="1010" onChange={getUserInput} defaultValue={1}/>
            <button className="buttons" onClick={requestPokemon}>Escolher</button>
        </>
    );
};