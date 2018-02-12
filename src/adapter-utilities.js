export default () => {
  let cssVariables = {};
  let classNames = [];

  return {
    addClass: updateClassNames => (className) => {
      classNames = [...classNames, className];
      updateClassNames(classNames);
    },
    deregisterHandler: (element, event) => handler =>
      element.removeEventListener(event, handler),
    getFirstRowElementOffsetHeight: firstRowElement => () => firstRowElement.offsetHeight,
    getOffsetHeight: root => () => root.offsetHeight,
    getViewportScrollY: window => () => window.pageYOffset,
    getViewportWidth: window => () => window.innerWidth,
    hasClass: propClassNames => className =>
      [...classNames, ...propClassNames].includes(className),
    notifyChange: onChange => ({ flexibleExpansionRatio }) =>
      onChange(flexibleExpansionRatio),
    registerHandler: (element, event) => handler =>
      element.addEventListener(event, handler),
    removeClass: updateClassNames => (className) => {
      classNames = classNames.filter(currentClassName => currentClassName !== className);
      updateClassNames(classNames);
    },
    updateCssVariable: updateCssVariables => (variable, value) => {
      cssVariables = { ...cssVariables, [variable]: value };
      updateCssVariables(cssVariables);
    },
  };
};
