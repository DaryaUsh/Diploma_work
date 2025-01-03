import style from './style.module.css';
import imageLine from '../../images/AboutUs/line.jpg';
import imageMen2 from '../../images/AboutUs/mask.png';


const AboutUs = () => {
    return ( 
        <div id = "aboutUs" className={style.container}>
            <div className={style.text}>
                <h2>Пара слов о нас</h2>
                <h4 className={style.h4}>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.</h4>
                <div className={style.sign}>
                    <img className={style.line} src={imageLine} alt="" />
                    <h5>SneakMax</h5>
                </div>
            </div>
            <img className={style.men} src={imageMen2} alt="" />
        </div>
    );
};
export default AboutUs;