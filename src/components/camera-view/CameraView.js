import './CameraView.scss';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useContext, useEffect, useRef } from 'react';
import {Button, ButtonGroup, Card, NonIdealState, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
import useTelemetrySubscription from '../../hooks/useTelemetrySubscription';
import BrobotContext from '../../context/BrobotContext';


function CameraView({ active }) {
    const connected = useTelemetrySubscription('online', false);
    const ref = useRef(null);
    
    useEffect(() => {
        const onResize = () => {
            if (ref.current) {
                ref.current.centerView();
            }
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    const {
        sidebarOpen,
    } = useContext(BrobotContext);

    useEffect(() => {
        setTimeout(() => {
            ref.current.centerView();
        }, 250);
    }, [connected, active, sidebarOpen]);


    return (
        <div className="CameraView__Container">
            <div className="Worldview__Controls bp3-elevation-2" style={{
                zIndex: 1
            }}>
                <ButtonGroup vertical>
                    <Button icon="home" onClick={() => ref.current.centerView()} />
                    <Button icon="zoom-to-fit" onClick={() => ref.current.centerView()} />
                    <Button icon="zoom-in" onClick={() => ref.current.zoomIn()} />
                    <Button icon="zoom-out" onClick={() => ref.current.zoomOut()} />
                    <Popover position={Position.LEFT} content={<div style={{
                        padding: '10px'
                    }}>
                        <p>

                            <b>Camera Controls</b>
                        </p>
                        <p>Click + Drag: Pan</p>
                        <p>Scroll Wheel / Two Fingers: Zoom</p>
                    </div>}>
                        <Tooltip content="Help" position={Position.LEFT}>
                            <Button icon="help" />
                        </Tooltip>
                    </Popover>
                </ButtonGroup>
            </div>
            <TransformWrapper
                ref={ref}
                limitToBounds={false}
                centerOnInit={true}
                initialPositionX={window.innerWidth / 2 - (640 / 2) }
                initialPositionY={window.innerHeight / 2 - (480 / 2) - 35}
                minScale={0.2}
            
            >
                <TransformComponent centerOnInit={true} wrapperStyle={{
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>                
                    <div className="CameraView__Placeholder">
                        <img src="http://brobot:8080/stream?topic=/camera/color/image_raw" />
                        <NonIdealState title="Camera Feed Offline" description="Brobot is offline." icon="offline" />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}

export default CameraView;