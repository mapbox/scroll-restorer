// This makes window mockable in Jest tests
function getWindow() {
  return window;
}

module.exports = { getWindow: getWindow };
