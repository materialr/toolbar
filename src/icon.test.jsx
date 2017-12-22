import { shallow } from 'enzyme';
import React from 'react';

import Icon from './icon';

const ICON = 'ICON';
const TITLE = 'TITLE';

test('Icon > Loads the default classNames', () => {
  const wrapper = shallow(<Icon icon={ICON} title={TITLE} />, { disableLifecycleMethods: true });
  const expected = 'material-icons mdc-toolbar__icon';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Icon > Loads the additional classNames', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Icon className={CLASS_NAME} icon={ICON} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = `material-icons mdc-toolbar__icon ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Icon > Loads the icon as a child', () => {
  const wrapper = shallow(<Icon icon={ICON} title={TITLE} />, { disableLifecycleMethods: true });
  const expected = ICON;

  const actual = wrapper.text();

  expect(actual).toBe(expected);
});

test('Icon > Loads the menu icon classNames', () => {
  const wrapper = shallow(
    <Icon icon={ICON} isMenuIcon title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-toolbar__icon mdc-toolbar__menu-icon';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Icon > Passes on the onClick method', () => {
  const ON_CLICK = () => 'ON_CLICK';
  const wrapper = shallow(
    <Icon icon={ICON} onClick={ON_CLICK} title={TITLE} />,
    { disableLifecycleMethods: true },
  );
  const expected = ON_CLICK;

  const actual = wrapper.props().onClick;

  expect(actual).toBe(expected);
});

test('Icon > Loads the title as an aria-label', () => {
  const wrapper = shallow(<Icon icon={ICON} title={TITLE} />, { disableLifecycleMethods: true });
  const expected = TITLE;

  const actual = wrapper.props()['aria-label'];

  expect(actual).toBe(expected);
});
