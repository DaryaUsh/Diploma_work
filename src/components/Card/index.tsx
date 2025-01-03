import { Sneaker } from '../../types/sneaker';
import style from './style.module.css';
import { FC } from "react";

type Props = {
    data: Sneaker;
};

const Card : FC<Props> = ({data}) => {

    return <div className={style.card}>
        <img src={data.imgUrl} alt ="" />
        <p className={style.paragraph}>{data.title}</p>
        <p className={style.price}>{data.price}</p>
    </div>;
};

export default Card;