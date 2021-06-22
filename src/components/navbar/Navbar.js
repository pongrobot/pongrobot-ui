import {Box} from "@chakra-ui/react";


function Navbar() {
    return (
        <Box
            flex="0 0 auto"
            bg="blue.600"
            p={2}
            color="white"
            boxShadow="lg"
        >
            Brobot Control Panel
        </Box>
    );
}

export default Navbar;