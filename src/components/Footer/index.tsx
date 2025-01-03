import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./style.module.css";

const Footer = () => {
    return (
        <header className={style.container}>
                <Logo />
                <Nav />
        </header>
    );
};

export default Footer;