import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";

import {Button, ButtonGroup, Card, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
import { useRaf } from 'rooks';

import * as ROS3D from 'ros3d/build/ros3d.esm';
import ROSLIB from 'roslib';

import Toolbar from "../toolbar/Toolbar";
import ToolbarSection from "../toolbar/items/ToolbarSection";
import ToolbarSpacer from "../toolbar/items/ToolbarSpacer";

import RosContext from "../../context/RosContext";
import { decode } from 'base64-arraybuffer';

function Worldview() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(500);
    const controlsRef = useRef(null);
    const viewport = useRef();
    const camera = useRef();

    const pointCloud = useRef({
        positions: [],
        colors: []
    });

    const {
        ros,
        tfClient
    } = useContext(RosContext);

    useEffect(() => {
        if (!ros.current) {
            return
        }
        var viewer = new ROS3D.Viewer({
            divID : 'worldview_viewport',
            width : 640,
            height : 480,
            antialias : true,
            background: '#F5F8FAFF'
        });

        viewer.addObject(new ROS3D.Grid({
            color:'#0181c4',
            cellSize: 0.5,
            num_cells: 20
        }));

        var markerClient1 = new ROS3D.MarkerClient({
            ros : ros.current,
            tfClient: tfClient.current,
            topic : '/launcher/trajectory',
            rootObject : viewer.scene
        });
        var cloudClient = new ROS3D.PointCloud2({
            ros: ros.current,
            tfClient: tfClient.current,
            rootObject: viewer.scene,
            topic: '/camera/depth/color/points',
            material: { size: 0.05, color: 0xff00ff }
        });
    }, [ros, tfClient]);

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