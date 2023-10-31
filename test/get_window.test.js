/**
 * @jest-environment jsdom
 */

var getWindowModule = require('../util/get_window');

describe('get-window', function () {
  it('returns the window object', function () {
    expect(getWindowModule.getWindow()).toBe(window);
  });
});
