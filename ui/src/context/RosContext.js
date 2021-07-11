import {createContext, useEffect, useRef, useState} from "react";
import ROSLIB from 'roslib';
const RosContext = createContext(null);
export default RosContext;

export function RosContextProvider({ children }) {
    const [connected, setConnected] = useState(false);
    const ros = useRef(null);
    const tfClient = useRef(null);
    const [cameraLinkTf, setCameraLinkTf] = useState(null);
    const [hasBall, setHasBall] = useState(null);
    const topics = useRef({});
    const handlers = useRef({});

    const triggerLauncher = () => {
        topics.current['/launcher/trigger'].publish(new ROSLIB.Message());
    };
    const setLauncherRpm = (rpm) => {
        console.log(`Setting launcher RPM to ${rpm}`);
        topics.current['/launcher/rpm_cmd'].publish(new ROSLIB.Message({
            data: rpm
        }));
    }

    const setTopicHandler = (name, func) => {
        handlers.current[name] = func;
    }

    useEffect(() => {
        ros.current = new ROSLIB.Ros({
            url : 'ws://brobot:8081'
        });

        tfClient.current = new ROSLIB.TFClient({
            ros : ros.current,
            fixedFrame : 'world',
            angularThres : 0.01,
            transThres : 0.01
        });

        const topicDefs = [
            {
                name: '/launcher/velocity_cmd',
                messageType: 'std_msgs/Float32'
            },
            {
                name: '/launcher/rpm_cmd',
                messageType: 'std_msgs/Float32'
            },
            {
                name: '/launcher/trigger',
                messageType: 'std_msgs/Empty'
            },
            {
                name : '/launcher/has_ball',
                messageType : 'std_msgs/Bool'
            },
            {
                name : '/camera/depth/color/points',
                messageType : 'sensor_msgs/PointCloud2'
            }
        ]
        topicDefs.forEach(({ name, messageType }) => {
            topics.current[name] = new ROSLIB.Topic({
                ros: ros.current,
                name,
                messageType
            });
            handlers.current[name] = null;

            topics.current[name].subscribe(function(message) {
                if (handlers.current[name]) {
                    handlers.current[name](message);
                }
            });
        });

        tfClient.current.subscribe('camera_link', function(tf) {
            console.log(tf);
            setCameraLinkTf(tf);
        });

        const hasBallListener = new ROSLIB.Topic({
            ros : ros.current,
            name : '/launcher/has_ball',
            messageType : 'std_msgs/Bool'
        });

        hasBallListener.subscribe(function(message) {
            setHasBall(message.data);
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
        connected,
        cameraLinkTf,
        hasBall,
        triggerLauncher,
        setLauncherRpm,
        setTopicHandler,
        topics,
        handlers
    }}>
        {children}
    </RosContext.Provider>)
}