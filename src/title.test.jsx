import { shallow } from 'enzyme';
import React from 'react';

import Title from './title';

const CHILDREN = <p>CHILDREN</p>;

test('Title > Loads the default classNames', () => {
  const wrapper = shallow(<Title>{CHILDREN}</Title>, { disableLifecycleMethods: true });
  const expected = 'mdc-toolbar__title';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Title > Adds additional classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Title className={CLASS_NAME}>{CHILDREN}</Title>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-toolbar__title ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Title > Adds children inside the element', () => {
  const wrapper = shallow(<Title>{CHILDREN}</Title>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
