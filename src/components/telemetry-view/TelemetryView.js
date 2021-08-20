import './TelemetryView.scss';
import {useContext, useEffect, useRef} from "react";
import jpeg from 'jpeg-js';

function rgb8ImageToBase64Jpeg (msg) {
    var raw = atob(msg.data)
    var array = new Uint8Array(new ArrayBuffer(raw.length))
    for (let i = 0; i < raw.length; i++) {
        array[i] = raw.charCodeAt(i)
    }

    var frameData = Buffer.alloc(msg.width * msg.height * 4)
    for (let i = 0; i < msg.width * msg.height; i++) {
        frameData[4 * i + 0] = array[3 * i + 0]
        frameData[4 * i + 1] = array[3 * i + 1]
        frameData[4 * i + 2] = array[3 * i + 2]
        frameData[4 * i + 3] = 0
    }
    var rawImageData = {
        data: frameData,
        width: msg.width,
        height: msg.height
    }
    return jpeg.encode(rawImageData, 50).data.toString('base64')
}


function TelemetryView() {
    return (
        <div className="TelemetryView">
            <h4>Raw Telemetry Data</h4>
            <pre className="bp3-code" style={{
                maxHeight: '400px',
                overflow: 'auto'
            }}>
            </pre>
        </div>
    );
}

export default TelemetryView;