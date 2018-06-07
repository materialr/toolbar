import { shallow } from 'enzyme';
import React from 'react';

import Row from './row';

test('Row > Loads the default classNames', () => {
  const wrapper = shallow(<Row>Row</Row>, { disableLifecycleMethods: true });
  const expected = 'mdc-toolbar__row';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Row > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(<Row className={CLASS_NAME}>Row</Row>, { disableLifecycleMethods: true });
  const expected = `mdc-toolbar__row ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Row > Passes through additional props', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(<Row data-qa={DATA_QA}>Row</Row>, { disableLifecycleMethods: true });
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
