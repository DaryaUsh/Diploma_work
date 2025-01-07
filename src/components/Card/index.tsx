import { Sneaker } from '../../types/sneaker';
import style from './style.module.css';
import { FC } from "react";
import previewIcon from '../../images/Cards/Show.svg'
import addCartIcon from '../../images/Cards/AddCart.svg'

type Props = {
    data: Sneaker;
};

const Card : FC<Props> = ({data}) => {

    return(
        <div className={style.block}>
            <a href='' className={style.card}>
                <img className={style.animate1} src={data.imgUrl} alt ="" />
                <p className={style.paragraph}>{data.title}</p>
                <p className={style.price}>{data.price}</p>
            </a>
            <div className={style.preview}>
                <button className={style.button}><img className={style.imgBtr} src={previewIcon} alt=""></img></button>
                <button className={style.button}><img className={style.imgBtr} src={addCartIcon} alt=""></img></button>
            </div>
        </div>

    );
};

export default Card;