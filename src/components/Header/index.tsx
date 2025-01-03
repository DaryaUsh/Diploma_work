import Basket from "../Basket";
import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./style.module.css";

const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.block}>
                <Logo />
                <div className={style.nav}>
                    <Nav />
                    <Basket />
                </div>
            </div>
        </header>
    );
};

export default Header;