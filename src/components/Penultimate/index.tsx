import Feedback from "../Feedback";
import Instagram from "../Instagram";
import style from './style.module.css';

const Penultimete = () => {
    return (
        <div className={style.container}>
            <Feedback />
            <Instagram />
        </div>
    );
};

export default Penultimete;