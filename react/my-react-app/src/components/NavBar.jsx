

function NavBar({ pokemonList, setpokemonIndex }) {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => setpokemonIndex(index)}>
                    {pokemon.name}
                </button>
            ))}
        </div>
    )

}
export default NavBar;

