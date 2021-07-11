import './Sidebar.scss'
import {useState} from "react";
import {Button, ButtonGroup} from "@blueprintjs/core";
import classNames from "classnames";
import CollapsibleSection from "../collapsible-section/CollapsibleSection";

function Sidebar() {
    /*
    TODO; set up a reverse portal to render the sidebar;
    sidebar is either embedded in the flex layout for large screens, or an overlay for small screens.
     */

    const [isOpen, setIsOpen] = useState(true);

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
                        icon={isOpen ? 'menu-closed' : 'menu'}
                        minimal
                    />
                </div>
                {isOpen && (
                    <div className="SidebarContent">
                        <CollapsibleSection padding title={"Actions"}>
                            <h1>System</h1>
                            <ButtonGroup fill>
                                <Button small>Shutdown</Button>
                                <Button small>Restart</Button>
                            </ButtonGroup>
                            <h1>ROS</h1>
                            <Button small fill>Restart ROS Services</Button>
                            <h1>Robot</h1>
                            <ButtonGroup fill vertical>
                                <Button small fill>Zero Yaw Gimbal</Button>
                                <Button small fill>Launch Ball</Button>
                                <Button small fill>Spin Up Motors (5sec)</Button>
                            </ButtonGroup>
                        </CollapsibleSection>
                        <CollapsibleSection padding title={"Parameters"}>
                            <h1>Perception</h1>
                            <p>Passthrough max depth</p>
                            <p>Passthrough min depth</p>
                            <p>Obj max height</p>
                            <p>Plane segmentation EPS angle</p>
                            <p>Plane segmentation dist threshold</p>
                            <p>Cluster point tolerance</p>
                            <p>Cluster min size</p>
                            <p>Cluster max size</p>
                            <h1>Actuation</h1>
                            <p>VESC ramp time</p>
                            <p>VESC cooldown time</p>
                            <p>VESC command timeout</p>
                            <p>VESC fudge factor</p>
                            <p>VESC timeout time</p>
                            <p>VESC RPM accel limit</p>
                        </CollapsibleSection>
                    </div>
                )}
            </div>
        </>
    )
}

export default Sidebar;