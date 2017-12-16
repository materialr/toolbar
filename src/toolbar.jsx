import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '@material/toolbar/mdc-toolbar.scss';

import toolbarFoundation from './foundation';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.componentIsMounted = undefined;
    this.firstRow = undefined;
    this.title = undefined;
    this.toolbar = undefined;
    this.toolbarFoundation = undefined;
    this.state = {
      classNames: [],
      cssVariables: {},
    };
    this.getClassNames = this.getClassNames.bind(this);
    this.getClassNamesAsString = this.getClassNamesAsString.bind(this);
    this.getClassNamesFromProps = this.getClassNamesFromProps.bind(this);
    this.getCssVariables = this.getCssVariables.bind(this);
    this.setFirstRow = this.setFirstRow.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.toolbarCreate = this.toolbarCreate.bind(this);
    this.toolbarDestroy = this.toolbarDestroy.bind(this);
    this.updateClassNames = this.updateClassNames.bind(this);
    this.updateCssVariables = this.updateCssVariables.bind(this);
    this.updateCssVariablesFirstRow =
      this.updateCssVariablesFirstRow.bind(this);
    this.updateCssVariablesFixedAdjust =
      this.updateCssVariablesFixedAdjust.bind(this);
    this.updateCssVariablesTitle = this.updateCssVariablesTitle.bind(this);
  }
  componentDidMount() {
    this.componentIsMounted = true;
    this.setFirstRow();
    this.setTitle();
    this.toolbarCreate();
  }
  componentDidUpdate({ fixedAdjustElement }) {
    const { fixedAdjustElement: currentFixedAdjustElement } = this.props;
    if (currentFixedAdjustElement !== fixedAdjustElement) {
      this.toolbarDestroy();
      this.toolbarCreate();
    }
  }
  componentWillUnmount() {
    this.componentIsMounted = false;
  }
  getClassNames() {
    return this.state.classNames.join(' ');
  }
  getClassNamesAsString() {
    return `${this.getClassNamesFromProps()} ${this.getClassNames()} ${this.props.className}`
      .trim().replace('  ', ' ');
  }
  getClassNamesFromProps() {
    const { fixed, fixedLastRowOnly, flexible, waterfall } = this.props;
    const isFlexible = flexible > 1;
    return classnames({
      'mdc-toolbar': true,
      'mdc-toolbar--fixed': fixed || fixedLastRowOnly || waterfall,
      'mdc-toolbar--fixed-lastrow-only': fixedLastRowOnly,
      'mdc-toolbar--waterfall': waterfall,
      'mdc-toolbar--flexible': isFlexible,
      'mdc-toolbar--flexible-default-behavior': isFlexible,
    });
  }
  getCssVariables() {
    return {
      ...this.state.cssVariables,
      '--mdc-toolbar-ratio-to-extend-flexible': this.props.flexible,
    };
  }
  setFirstRow() {
    this.firstRow = this.toolbar.querySelector('.mdc-toolbar__row:first-child');
  }
  setTitle() {
    this.title = this.toolbar.querySelector('.mdc-toolbar__title');
  }
  toolbarCreate() {
    this.toolbarFoundation = toolbarFoundation({
      firstRowElement: this.firstRow,
      onChange: this.props.onChange,
      propClassNames: this.getClassNamesFromProps().split(' '),
      rootElement: this.toolbar,
      updateClassNames: this.updateClassNames,
      updateCssVariables: this.updateCssVariables,
      updateCssVariablesFirstRow: this.updateCssVariablesFirstRow,
      updateCssVariablesFixedAdjust: this.updateCssVariablesFixedAdjust,
      updateCssVariablesTitle: this.updateCssVariablesTitle,
    });
    this.toolbarFoundation.init();
  }
  toolbarDestroy() {
    this.toolbarFoundation.destroy();
    this.toolbarFoundation = undefined;
  }
  updateClassNames(classNames) {
    if (this.componentIsMounted) {
      this.setState({ classNames });
    }
  }
  updateCssVariables(cssVariables) {
    if (this.componentIsMounted) {
      this.setState({ cssVariables });
    }
  }
  updateCssVariablesFirstRow(name, value) {
    if (this.firstRow) {
      this.firstRow.style.setProperty(name, value);
    }
  }
  updateCssVariablesFixedAdjust(name, value) {
    const { fixedAdjustElement } = this.props;
    if (fixedAdjustElement) {
      fixedAdjustElement.style.setProperty(name, value);
    }
  }
  updateCssVariablesTitle(name, value) {
    if (this.title) {
      this.title.style.setProperty(name, value);
    }
  }
  render() {
    return (
      <header
        className={this.getClassNamesAsString()}
        ref={(toolbar) => { this.toolbar = toolbar; }}
        style={this.getCssVariables()}
      >
        {this.props.children}
      </header>
    );
  }
}

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  fixedAdjustElement: PropTypes.instanceOf(HTMLElement),
  fixedLastRowOnly: PropTypes.bool,
  flexible: PropTypes.oneOf([1, 2, 3, 4]),
  onChange: PropTypes.func.isRequired,
  waterfall: PropTypes.bool,
};

Toolbar.defaultProps = {
  className: '',
  fixed: false,
  fixedAdjustElement: undefined,
  fixedLastRowOnly: false,
  flexible: 1,
  waterfall: false,
};

export default Toolbar;
