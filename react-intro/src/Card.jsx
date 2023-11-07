function Card({personaje, clickHandler}) {
    const {id, name, occupation} = personaje;
    
    return <div>
        <h3>{id}</h3>
        <h2>{name}</h2>
        <span>{occupation}</span>
        <button onClick={clickHandler}>Click Me</button>
    </div>
}

export default Card;