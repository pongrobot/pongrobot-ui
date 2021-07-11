import {useState} from "react";
import './CollapsibleSection.scss';
import {Button, Collapse, Icon} from "@blueprintjs/core";
import classNames from "classnames";

function CollapsibleSection({ title, children, padding, flex, startOpen, icon }) {
    const [collapsed, setCollapsed] = useState(!startOpen);

    const containerClassNames = classNames({
        CollapsibleSection: true,
        CollapsibleSection__Flex: flex && !collapsed
    });

    const buttonClassNames = classNames({
        CollapsibleSection__Header: true,
        CollapsibleSection__Header__Collapsed: collapsed
    })

    return (
        <div className={containerClassNames}>
            <Button className={buttonClassNames} onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? 'chevron-down' : 'chevron-right'} rightIcon={icon}>
                <div className="unselectable">
                    {title}
                </div>
            </Button>
            <Collapse isOpen={!collapsed}>
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