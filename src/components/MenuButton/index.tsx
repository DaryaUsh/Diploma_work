import {AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import style from './style.module.css'
import { useState } from "react";


const MenuButton = () => {
    const [answer, setAnswer] = useState(false);
    return (
        <div onClick={() => setAnswer(!answer)} className={style.mbutton}>
            {answer ? <AiOutlineClose size={25} /> : <AiOutlinePlus size={25} />}
            
        </div>
    )
}

export default MenuButton;