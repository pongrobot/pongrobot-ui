import './Sidebar.scss'
import {useState} from "react";
import {Button} from "@blueprintjs/core";
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
                <div className="SidebarOverlay" />
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
                    <>
                        <CollapsibleSection padding title={"Actions"}>Test</CollapsibleSection>
                        <CollapsibleSection padding title={"Parameters"}>Test</CollapsibleSection>
                        <CollapsibleSection padding title={"Status"}>Test</CollapsibleSection>
                    </>
                )}
            </div>
        </>
    )
}

export default Sidebar;