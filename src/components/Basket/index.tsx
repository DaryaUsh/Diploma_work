import style from "./style.module.css";
import cart from "../../images/cart.svg";

const Basket = () => {
    
    return (
        <button className = {style.buttonCart}> 
            <a>Корзина</a>
            <div className = {style.blockIcon}>
                <img className={style.imgCart} src={cart} alt=""></img>
                <small className={style.gtyCart}>0</small>
            </div>
        </button>
    );
};

export default Basket;