import style from "./style.module.css"
import sneakers from "../../data/sneakers.json"
import Card from "../Card";

const Cards = () => {
    return (
        <div id="cards" className={style.block}>
            <div className={style.container}>{sneakers.items.map((sneaker) => {
                return <Card data = {sneaker} key ={sneaker.id}/>
            })}
            </div>
            <div id="load-more" className={style.button}> Показать ещё </div>  
        </div>
    );
};

export default Cards;