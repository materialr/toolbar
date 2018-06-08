import { shallow } from 'enzyme';
import React from 'react';

import Section from './section';

const CHILDREN = <p>CHILDREN</p>;

test('Section > Loads the default classNames', () => {
  const wrapper = shallow(<Section>{CHILDREN}</Section>, { disableLifecycleMethods: true });
  const expected = 'mdc-toolbar__section';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Section > Adds additional classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Section alignEnd alignStart className={CLASS_NAME} shrinkToFit>{CHILDREN}</Section>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar__section mdc-toolbar__section--align-end ' +
    `mdc-toolbar__section--align-start mdc-toolbar__section--shrink-to-fit ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Section > Adds children inside the element', () => {
  const wrapper = shallow(<Section>{CHILDREN}</Section>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Section > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Section data-qa={DATA_QA}>{CHILDREN}</Section>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
