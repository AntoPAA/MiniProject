const Card = ({ id, img, name, categorie, price }) => {
    return (
        <div className='container-card'>

            <div className='card-id'> {id}</div>
            <div className='picture-header'><img src={img}></img></div>
            <div className='card-name'>{name}</div>
            <div className='card-categorie'>{categorie}</div>
            <div className='card-price'>Price: <span>${price}</span></div>
        </div>
    )
}

export default Card