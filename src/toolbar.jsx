import { MDCToolbar } from '@material/toolbar';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/toolbar/mdc-toolbar.scss';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.elementRoot = undefined;
    this.toolbar = undefined;
    this.getClassNames = this.getClassNames.bind(this);
  }
  componentDidMount() {
    this.toolbar = new MDCToolbar(this.elementRoot);
  }
  componentWillUnmount() {
    this.toolbar.destroy();
  }
  getClassNames() {
    const { className, fixed, fixedLastRowOnly, flexible, waterfall } = this.props;
    const isFlexible = flexible > 1;
    return classnames({
      'mdc-toolbar': true,
      'mdc-toolbar--fixed': fixed || fixedLastRowOnly || waterfall,
      'mdc-toolbar--fixed-lastrow-only': fixedLastRowOnly,
      'mdc-toolbar--flexible': isFlexible,
      'mdc-toolbar--flexible-default-behavior': isFlexible,
      'mdc-toolbar--waterfall': waterfall,
      [className]: !!className,
    });
  }
  render() {
    const {
      getClassNames,
      props: {
        children,
        className,
        fixed,
        fixedLastRowOnly,
        flexible,
        waterfall,
        ...props
      },
    } = this;
    return (
      <header
        className={getClassNames()}
        ref={(elementRoot) => { this.elementRoot = elementRoot; }}
        {...props}
      >
        {children}
      </header>
    );
  }
}

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  fixedLastRowOnly: PropTypes.bool,
  flexible: PropTypes.oneOf([1, 2, 3, 4]),
  waterfall: PropTypes.bool,
};

Toolbar.defaultProps = {
  className: undefined,
  fixed: false,
  fixedLastRowOnly: false,
  flexible: 1,
  waterfall: false,
};

export default Toolbar;
