import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = className => classnames({
  'mdc-toolbar__title': true,
  [className]: !!className,
});

const ToolbarTitle = ({ children, className, ...props }) =>
  <span className={getClassName(className)} {...props}>{children}</span>;

ToolbarTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ToolbarTitle.defaultProps = {
  className: undefined,
};

export default ToolbarTitle;
