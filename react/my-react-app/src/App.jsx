import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import Pokeball from "./components/click"
import "./App.css";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1)
  }



  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Pokeball handleClick={handleClick}
        count={count} />
      <NavBar pokemonList={pokemonList} setpokemonIndex={setpokemonIndex} />



    </div>
  );
}

export default App;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "https://media.gqmagazine.fr/photos/642fd954abd92836c899cf75/1:1/w_1079,h_1079,c_limit/therock.jpg",
  },
];
