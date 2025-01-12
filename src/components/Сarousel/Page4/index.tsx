import style from "./style.module.css";
import { FormEvent } from "react";

const Page4 = () => {

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            alert('Подготовленный каталог направлен на вашу почту!')
            event.target.reset();

            const form = new FormData(event.currentTarget);
            const data = Object.fromEntries(form);
            console.log(data);
    };

    return (
        <div className={style.container}>
            <h2 className ={style.h2}>Ваша подборка готова</h2>
            <h4 className ={style.h4}>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</h4>

                    <div className ={style.border}>
                        <form className ={style.form} onSubmit={handleSubmit}>
                            <h2 className ={style.p}>Получите предложение</h2>
                            <h4 className ={style.p2}>Получите подборку подходящих для вас моделей на почту</h4>
                            <input className={style.input} name= "name" placeholder="Ваше имя"></input>
                            <input className={style.input} name="E-mail" placeholder="E-mail"></input>
                            <button type="submit" className={style.button} onClick = {() => console.log('Вопрос отправлен!')}>Получить</button>
                        </form>
                    </div>
                
        </div>
    );
};

export default Page4;