function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            <figcaption>Bulbasaur</figcaption>
            <figure>
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



