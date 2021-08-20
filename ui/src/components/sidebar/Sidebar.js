import './Sidebar.scss'
import {useContext, useState} from "react";
import {Button, ButtonGroup, FormGroup, Intent, NumericInput, Slider} from "@blueprintjs/core";
import classNames from "classnames";
import CollapsibleSection from "../collapsible-section/CollapsibleSection";
import {useLocalStorage} from "react-use";

function Sidebar() {
    const [isOpen, setIsOpen] = useLocalStorage('sidebar', false);

    const classes = classNames({
        'bp3-dark': true,
        Sidebar: true,
        Sidebar__Open: isOpen,
        Sidebar__Closed: !isOpen
    })

    return (
        <>
            {isOpen && (
                <div className="SidebarOverlay" onClick={() => setIsOpen(false)} />
            )}
            {!isOpen && (
                <div className="SidebarOpenButton bp3-dark" onClick={() => setIsOpen(true)}>
                    <Button
                    onClick={() => setIsOpen(true)}
                    icon={'menu-open'}
                    minimal
                    />
                </div>
            )}
            <div className={classes}>
                <div className="SidebarHeader">
                    {isOpen && (
                        <>
                        Controls
                        </>
                    )}
                    <div className="SidebarHeader__Spacer" />
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        icon={isOpen ? 'menu-closed' : 'menu-open'}
                        minimal
                    />
                </div>
                {isOpen && (
                    <div className="SidebarContent dark-scrollbar">
                        <CollapsibleSection padding title={"Actions"} startOpen>
                            <h1>System</h1>
                            <ButtonGroup fill vertical>
                                <ButtonGroup fill>
                                <Button intent={Intent.DANGER} icon="power" onClick={() => {}}>Shutdown</Button>
                                <Button intent={Intent.WARNING} icon="refresh" onClick={() => {}}>Restart</Button>
                                </ButtonGroup>
                                <Button>Restart ROS</Button>
                            </ButtonGroup>
                            <br />
                            <h1>Hardware Utilities</h1>
                            <ButtonGroup fill vertical>
                                <Button fill>Zero Yaw Gimbal</Button>
                                <Button fill onClick={() => {}}>Launch Ball</Button>
                                <Button fill onClick={() => {}}>Spin Up Motors</Button>
                            </ButtonGroup>
                        </CollapsibleSection>
                        <CollapsibleSection padding title={"Perception Options"}>
                            <h1>Sensing Boundaries</h1>
                            <FormGroup label="Passthrough max depth" fill>
                                <NumericInput />
                            </FormGroup>
                            <FormGroup label="Passthrough min depth" fill>
                                <NumericInput />
                            </FormGroup>
                            <FormGroup label="Obj max height" fill>
                                <NumericInput />
                            </FormGroup>
                            <br />

                            <h1>Segmentation</h1>
                            <br />

                            <p>Plane segmentation EPS angle</p>
                            <p>Plane segmentation dist threshold</p>
                            <p>Cluster point tolerance</p>
                            <p>Cluster min size</p>
                            <p>Cluster max size</p>
                            <br />

                        </CollapsibleSection>
                        <CollapsibleSection padding title={"Actuation Options"}>
                            <h1>Actuation</h1>
                            <p>VESC ramp time</p>
                            <p>VESC cooldown time</p>
                            <p>VESC command timeout</p>
                            <p>VESC fudge factor</p>
                            <p>VESC timeout time</p>
                            <p>VESC RPM accel limit</p>
                            <br />
                        </CollapsibleSection>
                    </div>
                )}
            </div>
        </>
    )
}

export default Sidebar;