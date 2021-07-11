import {useState} from "react";
import './CollapsibleSection.scss';
import {Button, Collapse} from "@blueprintjs/core";
import classNames from "classnames";

function CollapsibleSection({ title, children, padding }) {
    const [collapsed, setCollapsed] = useState(true);

    const buttonClassNames = classNames({
        CollapsibleSection__Header: true,
        CollapsibleSection__Header__Collapsed: collapsed
    })

    return (
        <div className="CollapsibleSection">
            <Button className={buttonClassNames} onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? 'chevron-down' : 'chevron-right'}>
                <div className="unselectable">
                    {title}
                </div>
            </Button>
            <Collapse isOpen={collapsed}>
                <div className="CollapsibleSection__Content"  style={{
                        padding: padding ? '8px' : '0px'
                    }}>
                    {children}
                </div>
            </Collapse>
        </div>
    )
}

export default CollapsibleSection;