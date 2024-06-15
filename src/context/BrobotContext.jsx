import React from 'react';
import useRosParam from '../hooks/useRosParam';
import {useLocalStorage} from "react-use";

const BrobotContext = React.createContext(null);


function BrobotContextProvider({children}) {
    const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebar', false);
    const [maxDepth, setMaxDepth] = useRosParam('max-depth', 3);
    const [minDepth, setMinDepth] = useRosParam('min-depth', 0.5);
    const [maxHeight, setMaxHeight] = useRosParam('max-height', 1.5);
    const [fudgeFactor, setFudgeFactor] = useRosParam('vesc-fudge', 1.0);

    const [epsAngle, setEpsAngle] = useRosParam('eps-angle', 0.2);
    const [distanceThreshold, setDistanceThreshold] = useRosParam('distance-threshold', 0.02);
    const [tolerance, setTolerance] = useRosParam('cluster-tolerance', 0.007);
    const [minClusterSize, setMinClusterSize] = useRosParam('min-cluster-size', 100);
    const [maxClusterSize, setMaxClusterSize] = useRosParam('max-cluster-size', 20000);

    return (
        <BrobotContext.Provider value={{
            maxDepth,
            setMaxDepth,
            minDepth,
            setMinDepth,
            maxHeight,
            setMaxHeight,
            fudgeFactor,
            setFudgeFactor,
            sidebarOpen,
            setSidebarOpen,
            epsAngle,
            setEpsAngle,
            distanceThreshold,
            setDistanceThreshold,
            tolerance,
            setTolerance,
            minClusterSize,
            setMinClusterSize,
            maxClusterSize, 
            setMaxClusterSize
        }}>
            {children}
        </BrobotContext.Provider>
    );
}

export { BrobotContextProvider };
export default BrobotContext;