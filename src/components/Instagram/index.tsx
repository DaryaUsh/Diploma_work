import style from './style.module.css';
import instagram from '../../images/Instagram/Instagram.png';
import rose from '../../images/Instagram/rose.jpg'
import fireworks from '../../images/Instagram/fireworks.jpg'
import dog from '../../images/Instagram/dog.jpg';
import somebody from '../../images/Instagram/somebody.jpg';
import building from '../../images/Instagram/building.jpg';



const Instagram = () => {
    return (
        <div className={style.container}>
            <div className={style.logoname}>
                <img className={style.logoin} src={instagram} alt="" />
            </div>
            <div className={style.content}>
                <div className={style.block1}>
                    <img className={style.imgsmall} src={rose} alt="" />
                    <img className={style.imgsmall} src={fireworks} alt="" />
                </div>
                <img className={style.imgbig} src={dog} alt="" />
                <div className={style.block1}>
                    <img className={style.imgsmall} src={somebody} alt="" />
                    <img className={style.imgsmall} src={building} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Instagram;