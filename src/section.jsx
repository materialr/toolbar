import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassName = (alignEnd, alignStart, className, shrikToFit) => classnames({
  'mdc-toolbar__section': true,
  'mdc-toolbar__section--align-end': alignEnd,
  'mdc-toolbar__section--align-start': alignStart,
  'mdc-toolbar__section--shrink-to-fit': shrikToFit,
  [className]: !!className,
});

const ToolbarSection = ({ alignEnd, alignStart, children, className, shrikToFit }) => (
  <section className={getClassName(alignEnd, alignStart, className, shrikToFit)}>
    {children}
  </section>
);

ToolbarSection.propTypes = {
  alignEnd: PropTypes.bool,
  alignStart: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shrikToFit: PropTypes.bool,
};

ToolbarSection.defaultProps = {
  alignEnd: false,
  alignStart: false,
  className: undefined,
  shrikToFit: false,
};

export default ToolbarSection;
