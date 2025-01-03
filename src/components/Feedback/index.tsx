import { FormEvent} from 'react';
import style from './style.module.css';


const Freeback = () => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = Object.fromEntries(form);

        console.log(data);
    };
    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <h2 className={style.h2}>Есть вопросы?</h2>
                <h4 className={style.h4}>Заполните форму и наш менеджер свяжется с вами</h4>
                <input className={style.input} name= "name" placeholder="Ваше имя"></input>
                <input className={style.input} name="number telephone" placeholder="Номер телефона"></input>
                <button type="submit" className={style.button}>Отправить</button>
            </form>
        </div>
    );
};

export default Freeback;