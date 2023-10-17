const Card = ({ id, img, name, categorie, price }) => {
    return (
        <div className='container-card' id="card">
            <a target="_blank"><img src="\src/image/5298867-icone-chauve-souris-de-nuit-c-est-blanc-vectoriel.png" className='logogitt' /></a>
            <div className='card-id'> {id}</div>
            <div className='picture-header'><img src={img}></img></div>
            <div className='card-name'>{name}</div>
            <div className='card-categorie'>{categorie}</div>
            <div className='card-price'>Price: <span>${price}</span></div>
        </div>
    )
}

export default Card