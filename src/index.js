import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ChakraProvider, extendTheme, HStack} from "@chakra-ui/react";
import './assets/css/main.scss';
import Navbar from "./components/navbar/Navbar";
import Worldview from "./components/worldview/Worldview";
import SidebarContainer from "./components/sidebar/Sidebar";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    }
});

function MainScreen() {
    return (
        <ChakraProvider theme={theme}>
            <HStack align="stretch" justify="stretch" flex="1" spacing={0}>
                <SidebarContainer />
                <Worldview />
            </HStack>
        </ChakraProvider>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>,
  document.getElementById('root')
);