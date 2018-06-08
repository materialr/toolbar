import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (className, menuIcon) => classnames({
  'material-icons': true,
  'mdc-toolbar__icon': !menuIcon,
  'mdc-toolbar__menu-icon': menuIcon,
  [className]: !!className,
});

const ToolbarIcon = ({ className, icon, menuIcon, onClick, title, ...props }) => (
  <button
    aria-label={title}
    className={getClassName(className, menuIcon)}
    onClick={onClick}
    {...props}
  >
    {icon}
  </button>
);

ToolbarIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  menuIcon: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

ToolbarIcon.defaultProps = {
  className: undefined,
  menuIcon: false,
  onClick: undefined,
};

export default ToolbarIcon;
