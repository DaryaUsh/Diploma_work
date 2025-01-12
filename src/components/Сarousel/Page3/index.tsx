import style from "./style.module.css";
import { useState } from "react";

const Page3 = () => {

    const [answer3, setAnswer3] = useState(false);

    return (
        <div className={style.container}>
            <h2 className ={style.h2}>Мы подберем идеальную пару для вас</h2>
            <h4 className ={style.h4}>Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями </h4>

            <div className={answer3 ? [style.item_3, style.active].join('  ') : [style.item_3]}>
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
                
        </div>
    );
};

export default Page3;