import style from "./style.module.css";

const Nav = () => {
    return (
        <nav className={style.menu}>
            <a href="#cards">Каталог</a>
            <a href="#aboutUs">О нас</a>
            <a href="#quiz">Подбор товара</a>
            <a href="#company">Наша команда</a>
            <a href="#contact">Доставка и оплата</a>
            <a href="#contact">Контакты</a>
        </nav>
    );
};

export default Nav;