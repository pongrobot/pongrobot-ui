import BaseSubscriptionService from "./BaseSubscriptionService";
import axios from "axios";
import { encode } from "@msgpack/msgpack";


class TelemetryService extends BaseSubscriptionService {
    constructor() {
        super();

        this.data = {
            parameters: {

            },
            telemetry: {
                cpu: null,
                memory: null,
                disk: null
            }
        };
        this.online = false;
        this.url = `ws://${window.location.hostname}:8080/data`;
        console.log('Initializing Socket API server...');
        this.ws = null;
        this.connectSocket();
        this.shuttingDown = false;

        this.onlineInterval = setInterval(async () => {
            if (this.online === false) {
                // If we are offline, periodically try to reconnect the socket.
                this.connectSocket();
            }
        }, 2000);
    }

    shutdown() {
        this.shuttingDown = true;
        clearInterval(this.onlineInterval);
        this.disconnectSocket();
    }

    setOnline(online) {
        if (online !== this.online) {
            this.online = online;
            this._callSubscribers('online', online);
            if (online) {
                console.log('Connected to Telemetry Server!');
            } else {
                console.log('Disconnected from Telemetry Server!');
            }
        }
    }

    connectSocket() {
        // Check that existing socket is closed, we only want one connection at a time.
        if (this.ws) {
            if (this.ws.readyState !== 3) {
                this.disconnectSocket();
                this.setOnline(false);
            }
        }

        this.ws = new WebSocket(this.url);
        this.ws.onerror = () => {
            // Connection to socket has failed, the server is probably offline.
            // Handled by onclose listener.
        };
        this.ws.onmessage = (event) => {
            //TODO: Handle incoming message
            // Store the value of the message in the cache
            // Notify subscribers of the update
        };
        this.ws.onclose = () => {
            // Connection to socket has failed or been closed.
            // Set the websocket and telemetry connection as offline.
            this.setOnline(false);
        };
        this.ws.onopen = () => {
            // Connection to socket has been established.
            // Set the server and telemetry connection as online.
            this.setOnline(true);
        };
        if (this.shuttingDown) {
            this.disconnectSocket();
        }
    }

    disconnectSocket() {
        this.ws.close(1000);
    }

    sendSocketMessage(body) {
        // TODO: Send raw message over socket
        if (this.online) {
            this.ws.send(JSON.stringify(body));
        }
    }

    sendCommand(cmdName) {
        this.sendSocketMessage({
            type: 0,
            key: cmdName,
            value: 0.0
        });
    }

    sendParameter(paramName, paramValue) {
        this.sendSocketMessage({
            type: 1,
            key: paramName,
            value: paramValue
        });
    }
}

export default new TelemetryService();