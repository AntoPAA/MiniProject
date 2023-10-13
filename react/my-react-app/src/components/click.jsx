function Pokeball({ handleClick, count }) {
    return (
        <div>
            <figure>
                <button onClick={handleClick}>Thibaut</button>
                <p>{count}🍩</p>
            </figure>

        </div>
    );

}
export default Pokeball;