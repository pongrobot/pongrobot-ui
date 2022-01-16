import React from 'react';
import useRosParam from '../hooks/useRosParam';

const BrobotContext = React.createContext(null);


function BrobotContextProvider({children}) {
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
            setFudgeFactor
        }}>
            {children}
        </BrobotContext.Provider>
    );
}

export { BrobotContextProvider };
export default BrobotContext;