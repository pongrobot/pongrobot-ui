import './LogView.scss';
import Toolbar from "../toolbar/Toolbar";
import moment from "moment";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Spinner} from "@blueprintjs/core";
import classNames from "classnames";
import {useInterval} from "rooks";

const isErrorString = new RegExp('(\\[error\\])');
const isWarningString = new RegExp('\\[\\s*warn\\]');
const isInfoString = new RegExp('\\[\\s*info\\]');
const client = axios.create({
    baseURL: `http://brobot:3001/`,
    timeout: 5000,
    crossDomain: true
});

function LogLine({ timestamp, text }) {
    if (text.trim().length === 0) {
        return <></>;
    }
    const lowerText = text.toLowerCase();
    const classes = classNames({
        'LogLine': true,
        'LogLine__Error': isErrorString.test(lowerText),
        'LogLine__Warning': isWarningString.test(lowerText),
        'LogLine__Info': isInfoString.test(lowerText)
    })

    return (
        <div className={classes}>
            <div className="LogLine__Text">
                {text}
            </div>
        </div>
    );
}

function LogMetaLine({ text }) {
    return (
        <div className="LogLine LogLine__Meta">
            {text}
        </div>
    );
}

function LogView() {
    const logStart = moment();

    const scrollRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [lines, setLines] = useState([]);
    const load = async () => {
        setLoading(true);
        const {
            data
        } = await client.get('/journalctl');
        setLines(data.reverse());
        //scrollRef.current.scrollIntoView(false);
        setLoading(false);
    }
    useEffect(() => {
        load();
    }, []);

    const { start, stop } = useInterval(() => {
        load();
    }, 5000);
    useEffect(() => {
        start();
        return () => stop();
    }, [start, stop]);


    return (
        <div className="LogView">
            <div className="LogView__Content">
                <LogMetaLine placeholder text={(
                    <>
                        Viewing last {lines.length} log messages.&nbsp;<a href="#" onClick={() => load()}>Refresh</a>
                        {loading && (
                            <Spinner size={16} />
                        )}
                    </>
                )}  />
                {lines.map((line) => (
                    <LogLine text={line} timestamp={moment()} />
                ))}
                <div ref={scrollRef} />
            </div>
        </div>
    );
}

export default LogView;