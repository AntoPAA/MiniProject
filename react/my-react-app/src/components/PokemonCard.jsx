function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <div>
            <figcaption>Bulbasaur</figcaption>
            <figure>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                <div>
                    <h2>{pokemon.name}</h2>
                    {pokemon.imgSrc ? (
                        <img src={pokemon.imgSrc} />
                    ) : (
                        <p>???</p>
                    )}
                </div>
            </figure>
        </div >

    );
}

export default PokemonCard;

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

