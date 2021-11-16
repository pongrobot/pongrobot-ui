import { useEffect, useState } from "react";


function useRosParam(key, defaultValue) {
    // TODO: get the last value via websocket cache
    const [value, setValue] = useState(defaultValue || null);

    // When value changes locally, send it to the server
    useEffect(() => {

    }, []);

    // TODO: When value changes on the server, update locally

    return [
        value,
        setValue
    ];
}

export default useRosParam;