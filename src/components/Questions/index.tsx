import style from './style.module.css';
import {AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Question = () => {
    const [answer, setAnswer] = useState(false);
    const [answer1, setAnswer1] = useState(false);
    return (
        <div className={style.container}>
            <h2 className={style.h2}>Часто задаваемые вопросы</h2>
                <div className={style.block}>
                    <div className={style.quest}>
                        <div className={style.menu}> 
                            <h5 className={style.h5}>Вопрос 1</h5>
                            <div onClick={() => setAnswer(!answer)} className={style.mbutton}>
                            {answer ? <AiOutlineClose size={25} /> : <AiOutlinePlus size={25} />}
                            </div>
                        </div>
                            <h4 id="1" className={answer ? [style.h4, style.active].join('  ') : [style.h4]}>А это ответ 1: Кроссовки для бега должны быть легкими, чтобы не утяжелять ногу</h4>
                    </div>
                    <div className={style.quest}>
                        <div className={style.menu}>
                            <h5 className={style.h5}>Вопрос 2</h5>
                            <div onClick={() => setAnswer1(!answer1)} className={style.mbutton}>
                            {answer1 ? <AiOutlineClose size={25} /> : <AiOutlinePlus size={25} />}
                            </div>
                        </div>
                        <h4 id="2" className={answer1 ? [style.h4, style.active].join('  ') : [style.h4]}>А это ответ 2: Любую обувь нужно подбирать с учетом безопасности и комфорта, иначе можно навредить своему здоровью.</h4>
                    </div>
                </div>
        </div>
    )
}

export default Question;