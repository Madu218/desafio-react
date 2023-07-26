import logo from './logo.svg';
import './App.css';

import Pokedex from './componentes/Pokedex';
import PokemonDetails from './componentes/PokemonDetails';

function App() {
  return (
    <main>
      <PokemonDetails />
      <Pokedex />
    </main>
  );
}

export default App;
