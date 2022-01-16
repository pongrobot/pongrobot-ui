import { useEffect, useState } from "react";
import TelemetryService from '../services/TelemetryService';
import useTelemetrySubscription from "./useTelemetrySubscription";

function useRosParam(key, defaultValue) {
    // TODO: get the last value via websocket cache
    const [value, setValue] = useState(defaultValue || null);
    const valIncoming = useTelemetrySubscription(`parameter__${key}`, value);

    const setNewValue = (newValue) => {
        console.log(newValue);
        // Set locally
        setValue(newValue);
        // Send to server
        TelemetryService.sendParameter(key, newValue);
    }

    // When value changes on server, update locally
    useEffect(() => {
        setValue(valIncoming);
    }, [valIncoming]);

    // TODO: When value changes on the server, update locally

    return [
        value,
        setNewValue
    ];
}

export default useRosParam;