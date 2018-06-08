import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (alignEnd, alignStart, className, shrinkToFit) => classnames({
  'mdc-toolbar__section': true,
  'mdc-toolbar__section--align-end': alignEnd,
  'mdc-toolbar__section--align-start': alignStart,
  'mdc-toolbar__section--shrink-to-fit': shrinkToFit,
  [className]: !!className,
});

const ToolbarSection = ({ alignEnd, alignStart, children, className, shrinkToFit, ...props }) => (
  <section className={getClassName(alignEnd, alignStart, className, shrinkToFit)} {...props}>
    {children}
  </section>
);

ToolbarSection.propTypes = {
  alignEnd: PropTypes.bool,
  alignStart: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shrinkToFit: PropTypes.bool,
};

ToolbarSection.defaultProps = {
  alignEnd: false,
  alignStart: false,
  className: undefined,
  shrinkToFit: false,
};

export default ToolbarSection;
