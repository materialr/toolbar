import { MDCToolbarFoundation } from '@material/toolbar';

import adapterUtilities from './adapter-utilities';

export default ({
  firstRowElement,
  onChange,
  propClassNames,
  rootElement,
  updateClassNames,
  updateCssVariables,
  updateCssVariablesFirstRow,
  updateCssVariablesFixedAdjust,
  updateCssVariablesTitle,
}) => {
  const {
    addClass,
    deregisterHandler,
    getFirstRowElementOffsetHeight,
    getOffsetHeight,
    getViewportScrollY,
    getViewportWidth,
    hasClass,
    notifyChange,
    registerHandler,
    removeClass,
    updateCssVariable,
  } = adapterUtilities();

  return new MDCToolbarFoundation({
    addClass: addClass(updateClassNames),
    deregisterResizeHandler: deregisterHandler(window, 'resize'),
    deregisterScrollHandler: deregisterHandler(window, 'scroll'),
    getFirstRowElementOffsetHeight: getFirstRowElementOffsetHeight(firstRowElement),
    getOffsetHeight: getOffsetHeight(rootElement),
    getViewportScrollY: getViewportScrollY(window),
    getViewportWidth: getViewportWidth(window),
    hasClass: hasClass(propClassNames),
    notifyChange: notifyChange(onChange),
    registerResizeHandler: registerHandler(window, 'resize'),
    registerScrollHandler: registerHandler(window, 'scroll'),
    removeClass: removeClass(updateClassNames),
    setStyle: updateCssVariable(updateCssVariables),
    setStyleForFlexibleRowElement: updateCssVariablesFirstRow,
    setStyleForFixedAdjustElement: updateCssVariablesFixedAdjust,
    setStyleForTitleElement: updateCssVariablesTitle,
  });
};
