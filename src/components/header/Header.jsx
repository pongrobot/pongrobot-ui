import './Header.scss';
import {Icon} from "@blueprintjs/core";
import useTelemetrySubscription from '../../hooks/useTelemetrySubscription';

function Header() {
    const connected = useTelemetrySubscription('online', false);

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