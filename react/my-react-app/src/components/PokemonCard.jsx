import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        optionalimgSrc: PropTypes.string,
    })
}

export default PokemonCard;




