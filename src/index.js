import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.scss';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import { FocusStyleManager, NonIdealState, Spinner } from "@blueprintjs/core";
import Viewports from "./components/viewports/Viewports";
import TelemetryService from "./services/TelemetryService";
import useTelemetrySubscription from './hooks/useTelemetrySubscription';

FocusStyleManager.onlyShowFocusOnTabs();

function Root() {
    const connected = useTelemetrySubscription('online', false);

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
          {!connected && (
              <div className="OfflineOverlay">
                <NonIdealState
                  icon='offline'
                  title='Brobot Offline'
                  description='The connection to Brobot is offline. The UI will automatically reconnect when possible.'
                  action={(
                    <Spinner size={16} />
                  )}
                />
              </div>
          )}
            <Sidebar />
            <div className="LayoutVertical">
                <Header />
                <Viewports />
            </div>
        </div>
    );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
