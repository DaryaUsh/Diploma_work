import Logo from "../Logo/Logo";
import Nav from "../Nav";
import NavIcon from "../NavIcons";
import style from "./style.module.css";

const Footer = () => {
    return (
        <header className={style.container}>
                <Logo />
                <div className={style.nav}>
                    <Nav />
                </div>
                <div className={style.navIcon}>
                    <NavIcon />
                </div>
        </header>
    );
};

export default Footer;