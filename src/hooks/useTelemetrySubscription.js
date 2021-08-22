import { useEffect, useMemo, useState } from 'react';
import TelemetryService from '../services/TelemetryService';

/**
 * useTelemetrySubscription: A hook that registers a subscription
 * against the Telemetry API.
 * @param subscriptionName: The topic name of the subscription.
 * @param defaultValue: Default value if the state hasn't been set.
 * @returns The data from the subscription.
 */
function useTelemetrySubscription(subscriptionName, defaultValue) {
    const memoizedUniqueId = useMemo(() => Math.random().toString(36).substring(2, 15)
            + Math.random().toString(36).substring(2, 15), []);

    // Note that this initial data is only used by useState on the first render!
    let initialState = defaultValue;
    if (Object.prototype.hasOwnProperty.call(TelemetryService.data, subscriptionName)) {
        initialState = TelemetryService.data[subscriptionName];
    }
    const [data, setData] = useState(initialState);

    // Register subscription
    useEffect(() => {
        TelemetryService.subscribe(subscriptionName, memoizedUniqueId, (newData) => {
            //window.logger.info(`Got new data on subscription ${subscriptionName}-${memoizedUniqueId}`);
            setData(newData);
        });
        return () => {
            TelemetryService.unsubscribe(subscriptionName, memoizedUniqueId);
        };
    }, []);

    return data;
}

export default useTelemetrySubscription;