import { Person} from '../../types/cowoker';
import style from './style.module.css';
import { FC } from "react";

type Props = {
    data: Person;
};

const Cowoker : FC<Props> = ({data}) => {

    return <div className={style.cowoker}>
        <img className={style.img} src={data.imgUrl} alt ="" />
        <p className={style.fio}>{data.name}</p>
        <p className={style.profession}>{data.role}</p>
    </div>;
};

export default Cowoker;