import {Box, useBreakpointValue} from "@chakra-ui/react";
import * as portals from 'react-reverse-portal';
import {useMemo} from "react";


function Sidebar() {
    return (
        <>
        <h1>Sidebar</h1>
        </>
    )
}

function SidebarContainer() {
    const portalNode = useMemo(() => portals.createHtmlPortalNode(), []);

    const screenSize = useBreakpointValue({ base: "default", md: "large" });

    return (
        <>
            <portals.InPortal node={portalNode}>
                <Sidebar/>
            </portals.InPortal>
            {screenSize === "large" ? (
                <Box flex="0 0 auto" width={200} boxShadow="lg" zIndex={1} bg="gray.900">
                    <portals.OutPortal node={portalNode} />
                </Box>
            ) : (
                <Box flex="0 0 auto" width={100}>
                    <portals.OutPortal node={portalNode} />
                </Box>
            )}
        </>
    );
}

export default SidebarContainer;