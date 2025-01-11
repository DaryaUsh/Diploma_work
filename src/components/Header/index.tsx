import Basket from "../Basket";
import Logo from "../Logo/Logo";
import Nav from "../Nav";
import style from "./style.module.css";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";


const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className={style.container}>
            <div className={style.block}>
                <Logo />
                <div className={style.menu}>
                    <div onClick={() => setNav(!nav)} className = {style.mobile_btn}>
                        {nav ? <AiOutlineClose size={40} color="white"/> : <AiOutlineMenu size={40} color="white"/>}
                        
                        
                    </div>
                    <div className={nav ? [style.nav, style.active].join(' ') : [style.nav]}>
                        <Nav />
                        <Basket />
                    </div>
                </div>
            </div>
            
        </header>
    );
};

export default Header;