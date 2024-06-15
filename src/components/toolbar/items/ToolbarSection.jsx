import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../Toolbar.scss';

/**
 * ToolbarSection
 * A group of items positioned together on a Toolbar.
 * @param props.children: node, List of children elements
 */
function ToolbarSection(props) {
    const {
        children,
        rightBorder,
        leftBorder
    } = props;

    const classes = classNames({
        toolbarItem: true,
        toolbarItem__rightBorder: rightBorder,
        toolbarItem__leftBorder: leftBorder
    });

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

ToolbarSection.propTypes = {
    children: PropTypes.node,
    leftBorder: PropTypes.bool,
    rightBorder: PropTypes.bool
};

ToolbarSection.defaultProps = {
    children: null,
    leftBorder: false,
    rightBorder: false
};

export default ToolbarSection;