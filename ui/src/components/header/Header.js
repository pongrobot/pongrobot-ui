import './Header.scss';
import {useContext} from "react";
import {Icon} from "@blueprintjs/core";

function Header() {
    const connected = false;

    return (
        <div className="Header">
            <span className="Header__Text">Brobot Control Panel</span>
            {connected ? (
                <div className="Header__OnlineStatus Header__OnlineStatus__Online">
                    <Icon icon={"dot"} />
                    Online
                </div>
            ) : (
                <div className="Header__OnlineStatus Header__OnlineStatus__Offline">
                    <Icon icon={"dot"} />
                    Offline
                </div>
            )}
        </div>
    );
}

export default Header;