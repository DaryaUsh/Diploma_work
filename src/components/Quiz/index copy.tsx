import style from "./style.module.css";
import { useState } from "react";
import sneaker from "../../images/Quiz/sneaker.jpg"
import rectangle from "../../images/Quiz/rectangle.jpg"



const Quiz = () => {
    const [answer1, setAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);

    const [checked2_1, setChecked2_1] = useState(false);
    const [checked2_2, setChecked2_2] = useState(false);
    const [checked2_3, setChecked2_3] = useState(false);
    const [checked2_4, setChecked2_4] = useState(false);
    const [checked2_5, setChecked2_5] = useState(false);

    return (
        <div>
            <div className={style.container}>
                <h2 className ={style.h2}>Мы подберем идеальную пару для вас</h2>
                <h4 className ={style.h4}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </h4>
                <div className={answer1 ? [style.item_1, style.active].join('  ') : [style.item_1]}>
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
                            <button className ={style.button_next} onClick={() => setAnswer1(!answer1)}>Следующий шаг</button>
                    </div>
                </div>
                    
                    

                    {/* 2 часть */}
                <div className={answer1 ? [style.item_2, style.active1].join('  ') : [style.item_2]}>
                    <div className ={style.border}>
                        <div>
                            <h3 className ={style.h3}>Какой размер вам подойдет?</h3>
                            <div className={style.sizes}>
                                <div className={style.size}>
                                    <input id="check1" className={style.checkbox} type="checkbox" checked={checked2_1} onChange={() => setChecked2_1(!checked2_1)}/>
                                    <label htmlFor="check1"><h4>менее 36</h4></label>
                                </div>
                                <div className={style.size}>
                                    <input id="check2" className={style.checkbox} type="checkbox" checked={checked2_2} onChange={() => setChecked2_2(!checked2_2)}/>
                                    <label htmlFor="check2"><h4>36-38</h4></label>
                                </div>
                                <div className={style.size}>
                                    <input id="check3" className={style.checkbox} type="checkbox" checked={checked2_3} onChange={() => setChecked2_3(!checked2_3)}/>
                                    <label htmlFor="check3"><h4>39-41</h4></label>
                                </div>
                                <div className={style.size}>
                                    <input id="check4" className={style.checkbox} type="checkbox" checked={checked2_4} onChange={() => setChecked2_4(!checked2_4)}/>
                                    <label htmlFor="check4"><h4>42-44</h4></label>
                                </div>
                                <div className={style.size}>
                                    <input id="check5" className={style.checkbox} type="checkbox" checked={checked2_5} onChange={() => setChecked2_5(!checked2_5)}/>
                                    <label htmlFor="check5"><h4>45 и больше</h4></label>
                                </div>
                            </div>
                            <img className={style.img_pade2} src={rectangle}></img>
                        </div>
                    </div>
                    <div className ={style.block_footer}>
                            <h4>2 из 4</h4>
                            <button className ={style.button_next} onClick={() => setAnswer2(!answer2)}>Следующий шаг</button>
                    </div>
                </div>

                    {/* 3 часть */}
                <div className={answer2 ? [style.item_3, style.active].join('  ') : [style.item_3]}>
                    <div className ={style.border}>
                        <div>
                            <h3 className ={style.h3}>Уточните какие-либо моменты</h3>
                            <textarea className ={style.textarea}  placeholder="Введите сообщение"></textarea>    
                        </div>
                    </div>
                    <div className ={style.block_footer}>
                            <h4>3 из 4</h4>
                            <button className ={style.button_next} onClick={() => setAnswer3(!answer3)}>Следующий шаг</button>
                    </div>
                    
                </div>

                    {/* 4 часть */}
                    <div className={answer2 ? [style.item_3, style.active].join('  ') : [style.item_3]}>
                    <div className ={style.border}>
                        <div>
                            <h3 className ={style.h3}>Уточните какие-либо моменты</h3>
                            <textarea className ={style.textarea}  placeholder="Введите сообщение"></textarea>    
                        </div>
                    </div>
                    <div className ={style.block_footer}>
                            <h4>4 из 4</h4>
                            <button className ={style.button_next} onClick={() => setAnswer3(!answer3)}>Следующий шаг</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Quiz;