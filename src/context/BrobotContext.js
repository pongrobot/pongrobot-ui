import React from 'react';
import useRosParam from '../hooks/useRosParam';
import {useLocalStorage} from "react-use";

const BrobotContext = React.createContext(null);


function BrobotContextProvider({children}) {
    const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebar', false);
    const [maxDepth, setMaxDepth] = useRosParam('max-depth', 3);
    const [minDepth, setMinDepth] = useRosParam('min-depth', 0.5);
    const [maxHeight, setMaxHeight] = useRosParam('max-height', 1.5);
    const [fudgeFactor, setFudgeFactor] = useRosParam('vesc-fudge', 100);

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
            setSidebarOpen
        }}>
            {children}
        </BrobotContext.Provider>
    );
}

export { BrobotContextProvider };
export default BrobotContext;