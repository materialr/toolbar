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
