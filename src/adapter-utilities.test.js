import adapterUtilities from './adapter-utilities';

const adapterUtilitiesInstance = adapterUtilities();

const CLASS_NAME_1 = 'CLASS_NAME_1';
const CLASS_NAME_2 = 'CLASS_NAME_2';
const CSS_VARIABLE_2 = 'CSS_VARIABLE_2';
const CSS_VARIABLE_VALUE_2 = 'CSS_VARIABLE_VALUE_2';

test('Adapter utilities > \'addClass()\' adds a className and sends the list to \'updateClassNames()\'', () => {
  const expectedFirst = [CLASS_NAME_1];
  const expectedSecond = [CLASS_NAME_1, CLASS_NAME_2];
  const updateClassNames = jest.fn();

  adapterUtilitiesInstance.addClass(updateClassNames)(CLASS_NAME_1);
  adapterUtilitiesInstance.addClass(updateClassNames)(CLASS_NAME_2);

  expect(updateClassNames.mock.calls[0][0]).toEqual(expectedFirst);
  expect(updateClassNames.mock.calls[1][0]).toEqual(expectedSecond);
});

test('Adapter utilities > \'deregisterHandler\' removes an event listener', () => {
  const removeEventListener = jest.fn();
  const element = { removeEventListener };
  const EVENT = 'EVENT';
  const HANDLER = 'HANDLER';

  adapterUtilitiesInstance.deregisterHandler(element, EVENT)(HANDLER);

  expect(removeEventListener).toHaveBeenCalledWith(EVENT, HANDLER);
});

test('Adapter utilities > \'getFirstRowElementOffsetHeight\' returns the offset height of the element', () => {
  const OFFSET_HEIGHT = 'OFFSET_HEIGHT';
  const element = { offsetHeight: OFFSET_HEIGHT };
  const expected = OFFSET_HEIGHT;

  const actual = adapterUtilitiesInstance.getFirstRowElementOffsetHeight(element)();

  expect(actual).toBe(expected);
});

test('Adapter utilities > \'getOffsetHeight\' returns the offset height of the element', () => {
  const OFFSET_HEIGHT = 'OFFSET_HEIGHT';
  const element = { offsetHeight: OFFSET_HEIGHT };
  const expected = OFFSET_HEIGHT;

  const actual = adapterUtilitiesInstance.getOffsetHeight(element)();

  expect(actual).toBe(expected);
});

test('Adapter utilities > \'getViewportScrollY\' returns scroll amount', () => {
  const PAGE_Y_OFFSET = 'PAGE_Y_OFFSET';
  const element = { pageYOffset: PAGE_Y_OFFSET };
  const expected = PAGE_Y_OFFSET;

  const actual = adapterUtilitiesInstance.getViewportScrollY(element)();

  expect(actual).toBe(expected);
});

test('Adapter utilities > \'getViewportWidth\' returns scroll amount', () => {
  const INNER_WIDTH = 'INNER_WIDTH';
  const element = { innerWidth: INNER_WIDTH };
  const expected = INNER_WIDTH;

  const actual = adapterUtilitiesInstance.getViewportWidth(element)();

  expect(actual).toBe(expected);
});

test('Adapter utilities > \'hasClass\' returns whether the class exists', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const expectedFirst = true;
  const expectedSecond = true;
  const expectedThird = false;

  const actualFirst = adapterUtilitiesInstance.hasClass([CLASS_NAME])(CLASS_NAME);
  const actualSecond = adapterUtilitiesInstance.hasClass([CLASS_NAME])(CLASS_NAME_2);
  const actualThird = adapterUtilitiesInstance.hasClass([CLASS_NAME])('not');

  expect(actualFirst).toBe(expectedFirst);
  expect(actualSecond).toBe(expectedSecond);
  expect(actualThird).toBe(expectedThird);
});

test('Adapter utilities > \'notifyChange\' notifies of change', () => {
  const ON_CHANGE = jest.fn();
  const FLEXBLE_EXPANSION_RATIO = 'FLEXBLE_EXPANSION_RATIO';
  const change = { flexibleExpansionRatio: FLEXBLE_EXPANSION_RATIO };

  adapterUtilitiesInstance.notifyChange(ON_CHANGE)(change);

  expect(ON_CHANGE).toHaveBeenCalledWith(FLEXBLE_EXPANSION_RATIO);
});

test('Adapter utilities > \'registerHandler\' adds an event listener', () => {
  const addEventListener = jest.fn();
  const element = { addEventListener };
  const EVENT = 'EVENT';
  const HANDLER = 'HANDLER';

  adapterUtilitiesInstance.registerHandler(element, EVENT)(HANDLER);

  expect(addEventListener).toHaveBeenCalledWith(EVENT, HANDLER);
});

test('\'removeClass()\' removes a classNames ands sends the list of classNames to \'updateClassNames()\'', () => {
  const expectedFirst = [CLASS_NAME_1];
  const expectedSecond = [];
  const updateClassNames = jest.fn();

  adapterUtilitiesInstance.removeClass(updateClassNames)(CLASS_NAME_2);
  adapterUtilitiesInstance.removeClass(updateClassNames)(CLASS_NAME_1);

  expect(updateClassNames.mock.calls[0][0]).toEqual(expectedFirst);
  expect(updateClassNames.mock.calls[1][0]).toEqual(expectedSecond);
});

test('\'updateCssVariable()\' adds a css variable', () => {
  const CSS_VARIABLE_1 = 'CSS_VARIABLE_1';
  const CSS_VARIABLE_VALUE_1 = 'CSS_VARIABLE_VALUE_1';
  const updateCssVariables = jest.fn();
  const expectedFirst = { [CSS_VARIABLE_1]: CSS_VARIABLE_VALUE_1 };
  const expectedSecond = {
    [CSS_VARIABLE_1]: CSS_VARIABLE_VALUE_1,
    [CSS_VARIABLE_2]: CSS_VARIABLE_VALUE_2,
  };

  adapterUtilitiesInstance.updateCssVariable(updateCssVariables)(
    CSS_VARIABLE_1,
    CSS_VARIABLE_VALUE_1,
  );
  adapterUtilitiesInstance.updateCssVariable(updateCssVariables)(
    CSS_VARIABLE_2,
    CSS_VARIABLE_VALUE_2,
  );

  expect(updateCssVariables.mock.calls[0][0]).toEqual(expectedFirst);
  expect(updateCssVariables.mock.calls[1][0]).toEqual(expectedSecond);
});

test('\'updateCssVariable()\' changes a css variable', () => {
  const CSS_VARIABLE_1 = 'CSS_VARIABLE_1';
  const CSS_VARIABLE_VALUE_1_NEW = 'CSS_VARIABLE_VALUE_1_NEW';
  const updateCssVariables = jest.fn();
  const expected = {
    [CSS_VARIABLE_1]: CSS_VARIABLE_VALUE_1_NEW,
    [CSS_VARIABLE_2]: CSS_VARIABLE_VALUE_2,
  };

  adapterUtilitiesInstance.updateCssVariable(updateCssVariables)(
    CSS_VARIABLE_1,
    CSS_VARIABLE_VALUE_1_NEW,
  );

  expect(updateCssVariables).toBeCalledWith(expected);
});
