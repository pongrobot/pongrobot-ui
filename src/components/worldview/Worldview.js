import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Button, ButtonGroup, Card, Popover, Position, ResizeSensor, Tooltip} from "@blueprintjs/core";
import { Canvas, useFrame } from '@react-three/fiber';
import { CameraHelper } from 'three';
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, useHelper } from '@react-three/drei';
import BrobotContext from '../../context/BrobotContext';
import useTelemetrySubscription from '../../hooks/useTelemetrySubscription';
import { useInterval } from 'react-use';
import { extend } from "@react-three/fiber";
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

function CameraHelp({ camera }) {

    useHelper(camera, CameraHelper, 1, 'hotpink');

    return (<></>);
}


const numPoints = (640 * 480 * 0.5);

function CameraPointCloud() {
    const ref = useRef(null);
    const blob = useTelemetrySubscription('point_cloud', null);

    const [cloudData, setCloudData] = useState(() => {
        const data = {
            vertices: [],
            colors: []
        };
        for (let i = 0; i < numPoints; i++) {
            data.vertices.push(0,0,0);
            data.colors.push(0.0, 0.0, 0.0);
        }
        return data;
    });

    useEffect(() => {
        if (!blob) {
            return;
        }
        const data = {
            vertices: [],
            colors: []
        };
        const buffer = Buffer.from(blob);
        for (let i = 0; i < numPoints; i++) {
            /*
            let startIndex = i * 13;
            let x = buffer.readFloatLE(startIndex + 0);
            let y = buffer.readFloatLE(startIndex + 4);
            let z = buffer.readFloatLE(startIndex + 8);

            let colorRaw = buffer.readUInt8(startIndex + 12);
            let red =   ((colorRaw & 0xE0) >> 5) / 8.0;
            let green = ((colorRaw & 0x1C) >> 2) / 8.0;
            let blue =  ((colorRaw & 0x03) >> 0) / 4.0;
            */

            let startIndex = i * 8;
            let x = (buffer.readUInt16LE(startIndex + 0) / 65535.0) * 10.0 - 5.0;
            let y = ((buffer.readUInt16LE(startIndex + 2) / 65535.0) * 10.0) - 0.0;
            let z = ((buffer.readUInt16LE(startIndex + 4) / 65535.0) * 10.0) - 5.0;

            let colorRaw = buffer.readUInt8(startIndex + 6);
            let red =   ((colorRaw & 0xE0) >> 5) / 8.0;
            let green = ((colorRaw & 0x1C) >> 2) / 8.0;
            let blue =  ((colorRaw & 0x03) >> 0) / 4.0;

            data.vertices.push(z, -y ,x);
            data.colors.push(red, green, blue);
        }
        setCloudData(data);
    }, [blob]);
   
    const PointsShaderMaterial = shaderMaterial(
        // Uniform -> Allow to pass data in object level from react component to glsl
        {
            uColor: new THREE.Color(0.0, 0.0, 1.0)
        },
        // Vertex Shader -> Corner points of polygons
        glsl`
            attribute vec3 color;
            varying lowp vec3 vColor;
            void main() {
                gl_PointSize = 10.0;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                vColor = color;
            }
        `,
        // Fragment Shader -> Color the polygon surface
        glsl`
            uniform vec3 uColor;
            varying lowp vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, 1.0); // modify to uColor if using uniform
            }
        `
    );
    extend({ PointsShaderMaterial });

    return (
        <points frustumCulled={false}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={numPoints}
              array={new Float32Array(cloudData.vertices)}
              itemSize={3}
              onUpdate={self => {
                self.needsUpdate = true
                self.verticesNeedUpdate = true
              }}
            />
            <bufferAttribute
              attachObject={['attributes', 'color']}
              count={numPoints}
              array={new Float32Array(cloudData.colors)}
              itemSize={3}
              onUpdate={self => {
                self.needsUpdate = true
                self.verticesNeedUpdate = true
              }}
            />
          </bufferGeometry>
          <pointsShaderMaterial attach="material" />
        </points>
    );
}

function TableMarker() {
    const tableMarkerVertices = useTelemetrySubscription('table_marker', []);
    // Compute bounding box from points
    // Display table as a rectangle
    let minX = 100000;
    let minY = 100000;
    let minZ = 100000;
    let maxX = -100000;
    let maxY = -100000;
    let maxZ = -100000;
    tableMarkerVertices.forEach((point) => {
        minX = Math.min(minX, point.x);
        maxX = Math.max(maxX, point.x);
        minY = Math.min(minY, point.y);
        maxY = Math.max(maxY, point.y);
        minZ = Math.min(minZ, point.z);
        maxZ = Math.max(maxZ, point.z);
    });
    let wx = maxX - minX;
    let wy = maxY - minY;
    let wz = maxZ - minZ;

    return (
        <mesh position={[minX + wx/2, minZ + wz/2, -(minY + wy/2)]}>
            <boxGeometry attach="geometry" args={[wx, wz, wy]} />
            <meshBasicMaterial attach="material" color={0xff00ff} opacity={0.75} transparent={true} />
        </mesh>
    );
}

function ThickAxisHelper({ position, rotation }) {
    const thickness = 0.01;
    const length = 0.25;
    return (
        <group position={position || [0,0,0]} rotation={rotation || [0,0,0]}>
            <mesh rotation={[0, 0, 0]} position={[0, length/2, 0]}>
                <cylinderBufferGeometry attach="geometry" args={[thickness, thickness, length, 32]} />
                <meshBasicMaterial attach="material" color={0x0000ff} opacity={0.75} transparent={true} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -length/2]}>
                <cylinderBufferGeometry attach="geometry" args={[thickness, thickness, length, 32]} />
                <meshBasicMaterial attach="material" color={0x00ff00} opacity={0.75} transparent={true} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[length/2, 0, 0]}>
                <cylinderBufferGeometry attach="geometry" args={[thickness, thickness, length, 32]} />
                <meshBasicMaterial attach="material" color={0xff0000} opacity={0.75} transparent={true} />
            </mesh>
        </group>
    );
}

function Worldview() {
    const controlsRef = useRef(null);
    const viewport = useRef(null);
    const [camera, setCamera] = useState(null);
    const brobotCamera = useRef();

    const cameraFrame = useTelemetrySubscription('camera_frame', {
        x: 0,
        y: 0,
        z: 0,
        rx: 0,
        ry: 0,
        rz: 0
    });

    const cupMarkers = useTelemetrySubscription('cup_marker', []);
    cupMarkers.shift();

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
                    <group 
                        position={[cameraFrame.x, cameraFrame.z, -cameraFrame.y]}
                        rotation={[cameraFrame.rx, cameraFrame.rz, -cameraFrame.ry]}
                    >
                        <ThickAxisHelper />
                        <PerspectiveCamera
                            rotation={[0,  - Math.PI / 2, 0]}
                            ref={brobotCamera}
                            near={minDepth}
                            far={maxDepth}
                            fov={42.5}
                            aspect={1.63294118}
                        />
                        <group position={[-0.225/2,0.02 - 0.150/2,0]}>
                            <mesh>
                            <boxGeometry args={[0.225, 0.150, 0.225]}  />
                            <meshBasicMaterial attach="material" color={0xcccccc} opacity={0.75} transparent={true} />
                            </mesh>
                            <mesh position={[0,0.150,0]}>
                            <cylinderGeometry args={[0.225/2, 0.225/2, 0.180, 32]}  />
                            <meshBasicMaterial attach="material" color={0xcccccc} opacity={0.75} transparent={true} />
                            </mesh>
                        </group>
                        <CameraPointCloud />
                    </group>
                    <OrbitControls ref={controlsRef} camera={camera} 
                    />
                    <ambientLight intensity={0.1} />
                    <directionalLight color="white" position={[1, 5, 2]} />
                    <gridHelper size={10} divisions={10} rotation={[0, 0, 0]} />
                    <CameraHelp camera={brobotCamera} />
                    <ThickAxisHelper />
                    <TableMarker />
                    {cupMarkers.map((item) => (
                        <mesh position={[item.x, item.z, -item.y]}>
                            <cylinderBufferGeometry attach="geometry" args={[0.05, 0.05, 0.1, 32]} />
                            <meshNormalMaterial attach="material" />
                            <ThickAxisHelper />
                        </mesh>
                    ))}
                </Canvas>
            </div>
        </div>
    );
}


export default Worldview;