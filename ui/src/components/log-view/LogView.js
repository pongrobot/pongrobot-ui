import './LogView.scss';
import Toolbar from "../toolbar/Toolbar";
import moment from "moment";

function LogLine({ timestamp, text }) {
    return (
        <div className="LogLine">
            <div className="LogLine__Timestamp">
                {moment(timestamp).format('lll')}
            </div>
            <div className="LogLine__Text">
                {text}
            </div>
        </div>
    );
}

function LogView() {
    return (
        <div className="LogView">
            <div className="LogView__Content">
                <LogLine text={"Test log"} timestamp={moment()} />
            </div>
        </div>
    );
}

export default LogView;