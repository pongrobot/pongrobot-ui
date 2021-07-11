import {createContext, useEffect, useRef, useState} from "react";
import ROSLIB from 'roslib';
const RosContext = createContext(null);
export default RosContext;

export function RosContextProvider() {
    const [connected, setConnected] = useState(false);
    const ros = useRef(null);

    useEffect(() => {
        ros.current = new ROSLIB.Ros({
            url : 'ws://localhost:9090'
        });

        ros.current.on('connection', function() {
            console.log('Connected to websocket server.');
            setConnected(true);
        });

        ros.current.on('error', function(error) {
            console.log('Error connecting to websocket server: ', error);
            setConnected(false);
        });

        ros.current.on('close', function() {
            console.log('Connection to websocket server closed.');
            setConnected(false);
        });
    }, []);




    return (<RosContext.Provider value={{
        connected
    }}>

    </RosContext.Provider>)
}