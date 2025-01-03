import style from './style.module.css';
import vk from '../../images/Contacts/VK.svg';
import instagram from '../../images/Contacts/Instagram.svg';


const Contact = () => {
    return (
        <div id="contact" className={style.container}>
            <div className={style.block}>
                <div>
                    <h2 className={style.h2}>Контакты</h2>
                    <div className={style.office}>
                        <p className={style.name}>ГЛАВНЫЙ ОФИС</p>
                        <a href="tel:+78007898989" className={style.tel}>+7 800 789 89 89</a>
                        <p className={style.adress}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                    </div>
                    <div className={style.office}>
                        <p className={style.name}>ОТДЕЛ ПРОДАЖ</p>
                        <a href="tel:+78007898989" className={style.tel}>+7 800 789 89 89</a>
                        <p className={style.adress}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                    </div>
                    <div className={style.icon}>
                        <img className={style.img} src={vk} alt="" />
                        <img className={style.img} src={instagram} alt="" />
                    </div>
                </div>
            </div>

            <iframe className={style.iframe} src="https://yandex.ru/map-widget/v1/?um=constructor%3Acfafae3f7c0276ad12c80db08fead385ea20d03646b40daf046ea68d7c74e7c7&amp;source=constructor" width="680" height="500" frameBorder="0"></iframe>

        </div>
    );
};

export default Contact;