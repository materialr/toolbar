import * as toolbar from '@material/toolbar';
import { mount, shallow } from 'enzyme';
import React from 'react';

import Toolbar from './toolbar';

const CHILDREN = <p>CHILDREN</p>;

test('Renders the default classNames', () => {
  const wrapper = shallow(<Toolbar>{CHILDREN}</Toolbar>, { disableLifecycleMethods: true });
  const expected = 'mdc-toolbar';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders additional classNames from props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Toolbar className={CLASS_NAME}>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-toolbar ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a fixed toolbar', () => {
  const wrapper = shallow(<Toolbar fixed>{CHILDREN}</Toolbar>, { disableLifecycleMethods: true });
  const expected = 'mdc-toolbar mdc-toolbar--fixed';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a fixed last row toolbar', () => {
  const wrapper = shallow(
    <Toolbar fixedLastRowOnly>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar mdc-toolbar--fixed mdc-toolbar--fixed-lastrow-only';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a flexile toolbar', () => {
  const wrapper = shallow(
    <Toolbar flexible={4}>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders a waterfall toolbar', () => {
  const wrapper = shallow(
    <Toolbar waterfall>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders children elements', () => {
  const wrapper = shallow(<Toolbar>{CHILDREN}</Toolbar>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Creates the MDCToolbar component on mount', () => {
  const MDCToolbar = jest.fn();
  toolbar.MDCToolbar = MDCToolbar;
  const wrapper = mount(<Toolbar>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const expected = instance.elementRoot;

  const actual = MDCToolbar.mock.calls[0][0];

  expect(actual).toBe(expected);
});

test('Destroys the MDCToolbar component on unmount', () => {
  const destroy = jest.fn();
  const wrapper = mount(<Toolbar>{CHILDREN}</Toolbar>);
  const instance = wrapper.instance();
  const expected = 1;
  instance.toolbar.destroy = destroy;

  wrapper.unmount();
  const actual = destroy.mock.calls.length;

  expect(actual).toBe(expected);
});

test('Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Toolbar data-qa={DATA_QA}>{CHILDREN}</Toolbar>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
