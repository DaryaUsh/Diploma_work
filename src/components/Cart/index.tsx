import style from './style.module.css';
import building from '../../images/Instagram/building.jpg';
import trash from '../../images/trash.svg';

const Cart = () => {
    return(
        <div>
            <div className={style.cartOverlay}></div>

            <div className={style.cart}>
                <div className={style.cartBody}>
                        <img className={style.img} src={building} alt="" />
                        <div className={style.text}>
                            <div className={style.info}>
                                <p className={style.title}>Prodict Name</p>
                                <h5>$99.99</h5>
                            </div>
                            <button onClick={() => dispatch(removeTask(task.id))} className="delete-button"><img src={trash} alt=""></button> 
                            <button className={style.button}><img src={trash} alt=""></img></button>
                        </div>
                </div>
                <div className={style.cartBody}>
                        <img className={style.img} src={building} alt="" />
                        <div className={style.text}>
                            <div className={style.info}>
                                <p className={style.title}>Prodict Name</p>
                                <h5>$99.99</h5>
                            </div>
                            <button className={style.button}><img src={trash} alt=""></img></button>
                        </div>
                </div>
                <div className={style.cartBody}>
                        <img className={style.img} src={building} alt="" />
                        <div className={style.text}>
                            <div className={style.info}>
                                <p className={style.title}>Prodict Name</p>
                                <h5>$99.99</h5>
                            </div>
                            <button className={style.button}><img src={trash} alt=""></img></button>
                        </div>
                </div>
                <div className={style.cartFooter}>
                    <div className={style.total}>
                        <strong>Итого:</strong>
                        <span className={style.cartTotal}>0</span>
                    </div>
                    <button className={style.cartButton}>Перейти в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;