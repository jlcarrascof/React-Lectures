import Card from "./Card";
  
function Cards({charactersDC, clickHandler}) {
    console.log(charactersDC);
    return <div>
        {charactersDC.map(personaje => (
            <Card personaje = {personaje} clickHandler = {clickHandler} />
        ))}
    </div>
}


export default Cards;