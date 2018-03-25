import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (className, isMenuIcon) => classnames({
  'material-icons': true,
  'mdc-toolbar__icon': !isMenuIcon,
  'mdc-toolbar__menu-icon': isMenuIcon,
  [className]: !!className,
});

const ToolbarIcon = ({ className, icon, isMenuIcon, onClick, title }) => (
  <button aria-label={title} className={getClassName(className, isMenuIcon)} onClick={onClick}>
    {icon}
  </button>
);

ToolbarIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isMenuIcon: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

ToolbarIcon.defaultProps = {
  className: undefined,
  isMenuIcon: false,
  onClick: undefined,
};

export default ToolbarIcon;
