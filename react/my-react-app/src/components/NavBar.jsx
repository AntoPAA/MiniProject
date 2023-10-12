function NavBar({ pokemonIndex, handleClickPrecedent, handleClickSuivant, SuivantMax }) {
    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={handleClickPrecedent}>Précedent</button> : null} {pokemonIndex < SuivantMax ? <button onClick={handleClickSuivant}>Suivant</button> : null}
        </div>
    )

}

export default NavBar;