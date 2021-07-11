import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import * as THREE from 'three';
import {Button, ButtonGroup, Card, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
import { useRaf } from 'rooks';
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls, PerspectiveCamera, Plane,GizmoHelper, GizmoViewport, GizmoViewcube} from '@react-three/drei';
import Toolbar from "../toolbar/Toolbar";
import ToolbarSection from "../toolbar/items/ToolbarSection";
import ToolbarSpacer from "../toolbar/items/ToolbarSpacer";
import RosContext from "../../context/RosContext";
import { decode } from 'base64-arraybuffer';

function PointCloud() {
    const pointCloud = useRef({
        positions: [],
        colors: []
    });

    const rosContext = useContext(RosContext);
    console.log(rosContext);

    useEffect(() => {
        if (rosContext) {
            const pointCloudHandler = (msg) => {
                const positions = [];
                const colors = [];

                const {
                    data,
                    fields,
                    width,
                    point_step
                } = msg;
                const dataArrayBuf = decode(data);
                const dataView = new DataView(dataArrayBuf);

                for (let i = 0; i < width; i += point_step) {
                    positions.push(dataView.getFloat32(i));
                    positions.push(dataView.getFloat32(i + 4));
                    positions.push(dataView.getFloat32(i + 8));
                    const rgbSlice = dataView.getFloat32(i + 16);
                    colors.push(0.0);
                    colors.push(1.0);
                    colors.push(1.0);
                }
                pointCloud.current = {
                    positions: new Float32Array(positions),
                    colors: new Float32Array(colors)
                };

                console.log(pointCloud.current);

                // Point cloud consists of the following format:
                // Bytes 0 - 3: Float32 (x)
                // Bytes 4 - 7: Float32 (y)
                // Bytes 8 - 11: Float32 (z)
                // Bytes 12 - 15: Float32 (rgb)
            };

            rosContext.setTopicHandler('/camera/depth/color/points', pointCloudHandler)
        }
    }, [rosContext]);

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute attachObject={["attributes", "position"]} count={pointCloud.current.positions.length / 3} array={pointCloud.current.positions} itemSize={3} />
                <bufferAttribute attachObject={["attributes", "color"]} count={pointCloud.current.colors.length / 3} array={pointCloud.current.colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial attach="material" vertexColors size={10} sizeAttenuation={false} />
        </points>
    );
}
function Worldview() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(500);
    const controlsRef = useRef(null);
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
            <div className="Worldview__Renderer">
                <Canvas shadowMap>
                    <fogExp2 attach="fog" args={['#E1E8ED', 0.05]} />
                    <hemisphereLight args={[0xffffff, 0xffffff, 0.6]}/>
                    <ambientLight />
                    <directionalLight castShadow color="#F5F8FA" position={[0, 0, 5]} />
                    <Box castShadow position={[0, 2, 0]}>
                        <meshPhongMaterial />
                    </Box>
                    <Plane receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} args={[100,100]}>
                        <meshLambertMaterial />
                    </Plane>
                    <axesHelper/>
                    <PointCloud />
                    <gridHelper args={[100, 100, "#5C7080", "#738694"]} />
                    <PerspectiveCamera ref={camera} position={[0, 10, 0]} />
                    <OrbitControls screenSpacePanning maxDistance={10} ref={controlsRef} camera={camera.current} />
                </Canvas>
            </div>
        </div>
    );
}

export default Worldview;