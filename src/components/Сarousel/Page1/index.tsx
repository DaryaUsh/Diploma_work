import style from "./style.module.css";
import sneaker from "../../../images/Quiz/sneaker.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Page1 = () => {
    const navigate = useNavigate();

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);


    return (
        <div className={style.container}>
            <h2 className ={style.h2}>Мы подберем идеальную пару для вас</h2>
            <h4 className ={style.h4}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </h4>
            <div className={style.item_1}>
                <div className ={style.border}>
                    <div>
                        <h3 className ={style.h3}>Какой тип кроссовок рассматриваете?</h3>
                            <div className={style.all_blocks}>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked4} onChange={() => setChecked4(!checked4)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked5} onChange={() => setChecked5(!checked5)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                                <div className={style.block}>
                                    <img className={style.img} src={sneaker}></img>
                                    <div className={style.choice}>
                                        <input className={style.checkbox} type="checkbox" checked={checked6} onChange={() => setChecked6(!checked6)}/>
                                        <h4>кеды</h4>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className ={style.block_footer}>
                        <h4>1 из 4</h4>
                        <button className ={style.button_next} onClick={() => navigate("/page2")}>Следующий шаг</button>
                        
                </div>
            </div>
        </div>
    );
};

export default Page1;