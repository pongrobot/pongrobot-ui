import './Viewports.scss';
import Worldview from "../worldview/Worldview";
import React, {useState} from "react";
import {Button} from "@blueprintjs/core";
import LogView from "../log-view/LogView";
import TelemetryView from "../telemetry-view/TelemetryView";
import CameraView from '../camera-view/CameraView';

function TabButton({ active, onClick, children }) {
    if (active) {
        return (
            <Button className="Viewports__Tab Viewports__Tab__Active" minimal onClick={onClick}>{children}</Button>
        );
    } else {
        return (
            <Button className="Viewports__Tab" minimal onClick={onClick}>{children}</Button>
        );
    }
}
function Viewports() {
    const [tab, setTab] = useState("worldview");
    return (
        <div className="Viewports">
            <div className="Viewports__Tabs">
                <TabButton active={tab === 'worldview'} onClick={() => setTab("worldview")}>Worldview</TabButton>
                <TabButton active={tab === 'camera'} onClick={() => setTab("camera")}>Camera</TabButton>
                <TabButton active={tab === 'telemetry'} onClick={() => setTab("telemetry")}>Telemetry</TabButton>
            </div>
            <div className="Viewports__Content" style={{
                display: tab === 'worldview' ? 'flex' : 'none'
            }}>
                <Worldview />
            </div>
            <div className="Viewports__Content" style={{
                display: tab === 'logs' ? 'flex' : 'none'
            }}>
                <LogView />
            </div>
            <div className="Viewports__Content" style={{
                display: tab === 'telemetry' ? 'flex' : 'none'
            }}>
                <TelemetryView />
            </div>
            <div className="Viewports__Content" style={{
                display: tab === 'camera' ? 'flex' : 'none'
            }}>
                {(tab === 'camera') && (
                    <CameraView active={tab === 'camera'} />
                )}
            </div>
        </div>
    )
}

export default Viewports;