import style from "./style.module.css";
import team from "../../data/team.json";
import CowokerId from "../Cowoker";

const Company = () => {
    return (
        <div id="company" className={style.section}>
            <h2 className={style.title}>Наша команда</h2>
            <div className={style.container}>{team.items.map((cowoker) => {
                return <CowokerId data = {cowoker} key ={cowoker.id}/>
            })}
            </div>
        </div>
    );
};

export default Company;