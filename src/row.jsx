import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = className => classnames({
  'mdc-toolbar__row': true,
  [className]: !!className,
});

const ToolbarRow = ({ children, className }) =>
  <div className={getClassName(className)}>{children}</div>;

ToolbarRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ToolbarRow.defaultProps = {
  className: undefined,
};

export default ToolbarRow;
