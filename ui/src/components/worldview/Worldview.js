import './Worldview.scss';
import WorldviewControls from "./WorldviewControls";
import {useCallback, useEffect, useRef, useState} from "react";
import * as THREE from 'three';
import {ResizeSensor} from "@blueprintjs/core";
import { useRaf } from 'rooks';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';

function Worldview() {
    const [viewportWidth, setViewportWidth] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(500);
    return (
        <div className="Worldview">
            <ResizeSensor onResize={(e) => {
                setViewportWidth(e[0].contentRect.width);
                setViewportHeight(e[0].contentRect.height);
            }}>
                <div className="Worldview__ResizeContainer">
                    <div className="Worldview__Renderer" style={{
                        width: viewportWidth,
                        height: viewportHeight
                    }}>
                        <Canvas>
                            <ambientLight intensity={0.1} />
                            <directionalLight color="red" position={[0, 0, 5]} />
                            <mesh>
                                <boxGeometry />
                                <meshPhongMaterial />
                            </mesh>
                            <gridHelper size={20} divisions={20} />
                            <OrbitControls screenSpacePanning />
                        </Canvas>
                    </div>
                </div>
            </ResizeSensor>
        </div>
    );
}

export default Worldview;