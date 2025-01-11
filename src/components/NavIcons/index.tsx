import { SiArtifacthub } from "react-icons/si";
import style from "./style.module.css";
import { GrCatalog, GrContact } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import { MdPeopleOutline } from "react-icons/md";
import { GiChoice } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const NavIcon = () => {
    return (
        <nav className={style.menuIcons}>
            <a id="tooltipCatalog" href="#cards"><GrCatalog className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipCatalog" className={style.tooltip}><h4>Каталог</h4></Tooltip>
            <a id="tooltipAboutUs"href="#aboutUs"><SiArtifacthub className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipAboutUs" className={style.tooltip}><h4>О нас</h4></Tooltip>
            <a id="tooltipChoice" href="#quiz"><GiChoice className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipChoice" className={style.tooltip}><h4>Подбор товара</h4></Tooltip>
            <a id="tooltipTeam" href="#company"><MdPeopleOutline className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipTeam" className={style.tooltip}><h4>Наша команда</h4></Tooltip>
            <a id="tooltipDelivery" href="#contact"><TbTruckDelivery className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipDelivery" className={style.tooltip}><h4>Доставка и оплата</h4></Tooltip>
            <a id="tooltipContact" href="#contact"><GrContact className={style.icon}/></a>
            <Tooltip anchorSelect="#tooltipContact" className={style.tooltip}><h4>Контакты</h4></Tooltip>
        </nav>
    );
};

export default NavIcon;