import './Header.scss';
import RosContext from "../../context/RosContext";
import {useContext} from "react";
import {Icon} from "@blueprintjs/core";

function Header() {
    return (
        <div className="Header">
            Brobot Control Panel
        </div>
    );
}

export default Header;