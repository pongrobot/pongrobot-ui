import {Box, Flex} from "@chakra-ui/react";

import ReglWorldview from '../../lib/regl-worldview/ReglWorldview';
const { Cubes, Worldview, Axes, Grid } = ReglWorldview;

function WorldviewContainer() {
    const markers = [
        {
            pose: {
                orientation: { x: 0, y: 0, z: 0, w: 1 },
                position: { x: 0, y: 0, z: 0 },
            },
            scale: { x: 15, y: 15, z: 15 },
            color: { r: 1, g: 0, b: 1, a: 0.9 },
        },
    ];

    return (
        <Box flex="1" overflow={"hidden"}>
            <Worldview showDebug backgroundColor={[26 / 255, 32 / 255, 44 / 255, 1]}>
                <Grid count={10} />
                <Cubes>{markers}</Cubes>
                <Axes />
            </Worldview>
        </Box>
    );
}

export default WorldviewContainer;