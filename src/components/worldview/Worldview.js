import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Button, ButtonGroup, Card, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraHelper } from 'three';
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei';
import BrobotContext from '../../context/BrobotContext';

function CameraHelp({ camera }) {

    useHelper(camera, CameraHelper, 1, 'hotpink');

    return (<></>);
}
function Worldview() {
    const controlsRef = useRef(null);
    const viewport = useRef(null);
    const [camera, setCamera] = useState(null);
    const brobotCamera = useRef();

    const {
        maxDepth,
        minDepth,
        maxHeight
    } = useContext(BrobotContext);

    return (
        <div className="Worldview">
            <div className="Worldview__Controls bp3-elevation-2">
                <ButtonGroup vertical>
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
                <Canvas>
                    <PerspectiveCamera makeDefault ref={setCamera} position={[0, 5, 5]} />
                    <PerspectiveCamera ref={brobotCamera} position={[0, 1, 5]} near={minDepth} far={maxDepth} fov={42.5} aspect={1.63294118} />
                    <OrbitControls ref={controlsRef} camera={camera} />
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[1, 5, 2]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                    <gridHelper size={10} divisions={10} />
                    <CameraHelp camera={brobotCamera} />
                </Canvas>
            </div>
        </div>
    );
}


export default Worldview;