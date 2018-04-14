import { mount, shallow } from 'enzyme';
import React from 'react';

import toolbarFoundation from './foundation';
import Row from './row';
import Title from './title';
import Toolbar from './toolbar';

const CHILDREN = <Row><Title>CHILDREN</Title></Row>;
const ON_CHANGE = () => 'ON_CHANGE';

test('Toolbar > renders default classNames', () => {
  const wrapper = shallow(
    <Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Toolbar > Adds additional classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Toolbar
      className={CLASS_NAME}
      fixed
      fixedLastRowOnly
      flexible={4}
      onChange={ON_CHANGE}
      waterfall
    >
      {CHILDREN}
    </Toolbar>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-toolbar mdc-toolbar--fixed mdc-toolbar--fixed-lastrow-only ' +
    'mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior ' +
      CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Toolbar > Renders child elements passed in', () => {
  const wrapper = shallow(
    <Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Toolbar > Creates the toolbar foundation', () => {
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const expected = toolbarFoundation({
    firstRowElement: instance.firstRow,
    onChange: ON_CHANGE,
    propClassNames: instance.getClassNamesFromProps().split(' '),
    rootElement: instance.toolbar,
    updateClassNames: instance.updateClassNames,
    updateCssVariables: instance.updateCssVariables,
    updateCssVariablesFirstRow: instance.updateCssVariablesFirstRow,
    updateCssVariablesFixedAdjust: instance.updateCssVariablesFixedAdjust,
    updateCssVariablesTitle: instance.updateCssVariablesTitle,
  });
  expected.init();

  const actual = instance.toolbarFoundation;

  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
});

test('Toolbar > Destroys the toolbar foundation when the component is unmounted', () => {
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const destroy = jest.fn();
  instance.toolbarFoundation.destroy = destroy;

  wrapper.unmount();

  expect(destroy).toHaveBeenCalledTimes(1);
});

test('Toolbar > Updates cssVariables in state when \'updateCssVariables()\' is called', () => {
  const CSS_VARIABLES = ['CSS_VARIABLE'];
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const expected = CSS_VARIABLES;

  instance.updateCssVariables(CSS_VARIABLES);
  const actual = instance.state.cssVariables;

  expect(actual).toEqual(expected);
});

test('Toolbar > Does not update cssVariables in state when \'updateCssVariables()\' is called on an unmounted component', () => {
  const CSS_VARIABLES = ['CSS_VARIABLE'];
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  instance.setState = jest.fn();

  instance.componentIsMounted = false;
  instance.updateCssVariables(CSS_VARIABLES);

  expect(instance.setState).toHaveBeenCalledTimes(0);
});

test('Toolbar > Updates classNames in state when \'updateClassNames()\' is called', () => {
  const CLASS_NAMES = ['CLASS_NAME'];
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const expected = CLASS_NAMES;

  instance.updateClassNames(CLASS_NAMES);
  const actual = instance.state.classNames;

  expect(actual).toEqual(expected);
});

test('Toolbar > Does not update classNames in state when \'updateClassNames()\' is called on an unmounted component', () => {
  const CLASS_NAMES = ['CLASS_NAME'];
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  instance.setState = jest.fn();

  instance.componentIsMounted = false;
  instance.updateClassNames(CLASS_NAMES);

  expect(instance.setState).toHaveBeenCalledTimes(0);
});

test('Toolbar > Updates first row css variables if \'updateCssVariablesFirstRow\' is called', () => {
  const NAME = 'NAME';
  const VALUE = 'VALUE';
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const setProperty = jest.fn();
  instance.firstRow.style.setProperty = setProperty;

  instance.updateCssVariablesFirstRow(NAME, VALUE);

  expect(setProperty).toHaveBeenCalledWith(NAME, VALUE);
});

test('Toolbar > Updates fixed adjust css variables if \'updateCssVariablesFixedAdjust\' is called', () => {
  const ELEMENT = document.createElement('p');
  const NAME = 'NAME';
  const VALUE = 'VALUE';
  const wrapper = mount(
    <Toolbar
      fixedAdjustElement={ELEMENT}
      onChange={ON_CHANGE}
    >
      {CHILDREN}
    </Toolbar>,
  );
  const instance = wrapper.instance();
  const setProperty = jest.fn();
  instance.props.fixedAdjustElement.style.setProperty = setProperty;

  instance.updateCssVariablesFixedAdjust(NAME, VALUE);

  expect(setProperty).toHaveBeenCalledWith(NAME, VALUE);
});

test('Toolbar > Does not update fixed adjust css variables if \'updateCssVariablesFixedAdjust\' is called with no element', () => {
  const NAME = 'NAME';
  const VALUE = 'VALUE';
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();

  instance.updateCssVariablesFixedAdjust(NAME, VALUE);

  // not sure how to test this as the element needs to exist to test on it?
  expect(true).toBe(true);
});

test('Toolbar > Updates title css variables if \'updateCssVariablesTitle\' is called', () => {
  const NAME = 'NAME';
  const VALUE = 'VALUE';
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const setProperty = jest.fn();
  instance.title.style.setProperty = setProperty;

  instance.updateCssVariablesTitle(NAME, VALUE);

  expect(setProperty).toHaveBeenCalledWith(NAME, VALUE);
});

test('Toolbar > Does not update title css variables if \'updateCssVariablesTitle\' is called with no element', () => {
  const NAME = 'NAME';
  const VALUE = 'VALUE';
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}><Row>CHILDREN</Row></Toolbar>);
  const instance = wrapper.instance();

  instance.updateCssVariablesTitle(NAME, VALUE);

  // not sure how to test this as the element needs to exist to test on it?
  expect(true).toBe(true);
});

test('Toolbar > Recreates the toolbar foundation when the fixed changes', () => {
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const toolbarCreate = jest.fn();
  const toolbarDestroy = jest.fn();
  instance.toolbarCreate = toolbarCreate;
  instance.toolbarDestroy = toolbarDestroy;

  wrapper.setProps({ fixed: true });

  expect(toolbarCreate).toHaveBeenCalledTimes(1);
  expect(toolbarDestroy).toHaveBeenCalledTimes(1);
});

test('Toolbar > Recreates the toolbar foundation when the fixed adjust changes', () => {
  const ELEMENT = document.createElement('p');
  const wrapper = mount(<Toolbar onChange={ON_CHANGE}>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const toolbarCreate = jest.fn();
  const toolbarDestroy = jest.fn();
  instance.toolbarCreate = toolbarCreate;
  instance.toolbarDestroy = toolbarDestroy;

  wrapper.setProps({ fixedAdjustElement: ELEMENT });

  expect(toolbarCreate).toHaveBeenCalledTimes(1);
  expect(toolbarDestroy).toHaveBeenCalledTimes(1);
});
