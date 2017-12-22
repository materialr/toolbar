global.cancelAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
