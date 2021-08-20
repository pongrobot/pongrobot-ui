import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Button, ButtonGroup, Card, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
function Worldview() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(500);
    const controlsRef = useRef(null);
    const viewport = useRef();
    const camera = useRef();

    return (
        <div className="Worldview">
            <div className="Worldview__Controls bp3-elevation-2">
                <ButtonGroup vertical>
                    <Button disabled icon="plus" />
                    <Button disabled icon="minus" />
                    <Button icon="home" onClick={() => controlsRef.current.reset()} />
                    <Popover position={Position.LEFT} content={<div style={{
                        padding: '10px'
                    }}>
                        <p>

                            <b>Camera Controls</b>
                        </p>
                        <p>Left Click + Drag: Orbit</p>
                        <p>Right Click + Drag: Pan</p>
                        <p>Mouse Wheel: Zoom</p>
                    </div>}>
                        <Tooltip content="Help" position={Position.LEFT}>
                            <Button icon="help" />
                        </Tooltip>
                    </Popover>
                </ButtonGroup>
            </div>
            <div className="Worldview__Renderer" ref={viewport} id={"worldview_viewport"}>
            </div>
        </div>
    );
}


export default Worldview;