import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Toolbar.scss';

/**
 * Toolbar
 * A horizontal toolbar intended for use at the top or bottom of a window layout.
 * @param props.children: node, List of children elements
 * @param props.bottom: boolean, whether the toolbar should be styled with a top or bottom shadow
 */
function Toolbar(props) {
    const {
        children,
        bottom,
        className
    } = props;

    const toolbarClassNames = classNames({
        toolbar: true,
        toolbar__top: !bottom,
        toolbar__bottom: bottom,
    }, className);

    return (
        <div className={toolbarClassNames}>
            {children}
        </div>
    );
}

Toolbar.propTypes = {
    children: PropTypes.node,
    bottom: PropTypes.bool,
    className: PropTypes.string
};

Toolbar.defaultProps = {
    children: null,
    bottom: false,
    className: null
};

export default Toolbar;