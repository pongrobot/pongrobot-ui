

function useRosParam() {
    // TODO: get the last value via websocket cache
    const value = useState(null);

    // Update the ROS parameter
    const setValue = () => {
        // This updates the parameter locally, and also sends it to the remote server.
    };

    return {
        loading: value === null,
        value,
        setValue
    };
}

export default useRosParam;