import style from './style.module.css';

const Hero = () => {
    return (
        <div className={style.container}>
            <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
            <h4 className={style.h4}>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</h4>
            <button>Перейти к покупкам</button>
        </div>
    );
};
export default Hero;