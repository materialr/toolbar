let cssVariables = {};
let classNames = [];

export const addClass = updateClassNames => (className) => {
  classNames = [...classNames, className];
  updateClassNames(classNames);
};

export const deregisterHandler = (element, event) => handler =>
  element.removeEventListener(event, handler);

export const getFirstRowElementOffsetHeight = firstRowElement => () => firstRowElement.offsetHeight;

export const getOffsetHeight = root => () => root.offsetHeight;

export const getViewportScrollY = window => () => window.pageYOffset;

export const getViewportWidth = window => () => window.innerWidth;

export const hasClass = propClassNames => className =>
  [...classNames, ...propClassNames].includes(className);

export const notifyChange = onChange => ({ flexibleExpansionRatio }) =>
  onChange(flexibleExpansionRatio);

export const registerHandler = (element, event) => handler =>
  element.addEventListener(event, handler);

export const removeClass = updateClassNames => (className) => {
  classNames = classNames.filter(currentClassName => currentClassName !== className);
  updateClassNames(classNames);
};

export const updateCssVariable = updateCssVariables => (variable, value) => {
  cssVariables = { ...cssVariables, [variable]: value };
  updateCssVariables(cssVariables);
};
