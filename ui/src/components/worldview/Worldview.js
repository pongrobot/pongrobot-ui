import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import * as THREE from 'three';
import {Button, ButtonGroup, ResizeSensor} from "@blueprintjs/core";
import { useRaf } from 'rooks';
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls, PerspectiveCamera, Plane,GizmoHelper, GizmoViewport, GizmoViewcube} from '@react-three/drei';
import Toolbar from "../toolbar/Toolbar";
import ToolbarSection from "../toolbar/items/ToolbarSection";
import ToolbarSpacer from "../toolbar/items/ToolbarSpacer";


function Particles({ pointCount }) {
    const [positions, colors] = useMemo(() => {
        let positions = [],
            colors = []
        for (let i = 0; i < pointCount; i++) {
            positions.push(5 - Math.random() * 10)
            positions.push(5 - Math.random() * 10)
            positions.push(5 - Math.random() * 10)
            colors.push(1)
            colors.push(0.5)
            colors.push(0.5)
        }
        return [new Float32Array(positions), new Float32Array(colors)]
    }, [pointCount])

    const attrib = useRef()
    const hover = useCallback(e => {
        e.stopPropagation()
        attrib.current.array[e.index * 3] = 1
        attrib.current.array[e.index * 3 + 1] = 1
        attrib.current.array[e.index * 3 + 2] = 1
        attrib.current.needsUpdate = true
    }, [])

    const unhover = useCallback(e => {
        attrib.current.array[e.index * 3] = 1
        attrib.current.array[e.index * 3 + 1] = 0.5
        attrib.current.array[e.index * 3 + 2] = 0.5
        attrib.current.needsUpdate = true
    }, [])

    return (
        <points onPointerOver={hover} onPointerOut={unhover}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute ref={attrib} attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial attach="material" vertexColors size={10} sizeAttenuation={false} />
        </points>
    )
}

function Worldview() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(500);
    const controlsRef = useRef(null);
    const camera = useRef();

    console.log(controlsRef.current);
    return (
        <div className="Worldview">
            <div className="Worldview__Controls bp3-elevation-2">
                <ButtonGroup vertical>
                    <Button disabled icon="plus" />
                    <Button disabled icon="minus" />
                    <Button icon="home" onClick={() => controlsRef.current.reset()} />
                    <Button disabled icon="help" />
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
                    <Particles pointCount={200} />
                    <axesHelper/>
                    <gridHelper args={[100, 100, "#5C7080", "#738694"]} />
                    <PerspectiveCamera ref={camera} position={[0, 5, 5]} />
                    <OrbitControls screenSpacePanning maxDistance={10} ref={controlsRef} camera={camera.current} />
                </Canvas>
            </div>
        </div>
    );
}

export default Worldview;