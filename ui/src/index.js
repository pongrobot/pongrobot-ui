import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.scss';
import Header from "./components/header/Header";
import Worldview from "./components/worldview/Worldview";
import Sidebar from "./components/sidebar/Sidebar";

import { FocusStyleManager } from "@blueprintjs/core";
import CollapsibleSection from "./components/collapsible-section/CollapsibleSection";
import Viewports from "./components/viewports/Viewports";

FocusStyleManager.onlyShowFocusOnTabs();

function Root() {
    /**
     * Sidebar
     *
     * Three main views we want to show:
     * - 3D/2D viewport
     * - System and ros service logs
     * - Telemetry data, topic monitoring
     *
     */
    return (
        <div className="LayoutHorizontal">
            <Sidebar />
            <div className="LayoutVertical">
                <Header />
                <Viewports />
            </div>
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
