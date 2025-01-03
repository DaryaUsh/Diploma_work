import style from "./style.module.css";
import team from "../../data/team.json";
import Cowoker from "../Cowoker";

const Company = () => {
    return (
        <div id="company" className={style.section}>
            <h2 className={style.title}>Наша команда</h2>
            <div className={style.container}>{team.items.map((person) => {
                return <Cowoker data = {person} key ={person.id}/>
            })}
            </div>
        </div>
    );
};

export default Company;