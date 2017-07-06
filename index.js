'use strict';

var debounce = require('debounce');
var xtend = require('xtend');
var getWindow = require('./util/get_window').getWindow;

var removeListenerFunctions;

function end() {
  for (var i = 0, l = removeListenerFunctions.length; i < l; i++) {
    removeListenerFunctions[i]();
  }
}

function getSavedScroll(input) {
  input = input || getWindow().history;
  if (!input || !input.state) return;
  return input.state.scroll;
}

function restoreScroll(input, attemptsRemaining) {
  attemptsRemaining = attemptsRemaining == null ? 5 : attemptsRemaining;
  var savedScroll = getSavedScroll(input);
  if (!savedScroll) return;
  getWindow().requestAnimationFrame(function() {
    var savedX = savedScroll.x;
    var savedY = savedScroll.y;
    if (attemptsRemaining === 0) return;
    var pageXOffset = getWindow().pageXOffset;
    var pageYOffset = getWindow().pageYOffset;
    if (
      savedY < getWindow().document.body.scrollHeight &&
      (savedX !== pageXOffset || savedY !== pageYOffset)
    ) {
      getWindow().scrollTo(savedX, savedY);
    } else {
      restoreScroll(input, attemptsRemaining - 1);
    }
  });
}

function start(options) {
  options = xtend(
    {
      autoRestore: true,
      captureScrollDebounce: 50
    },
    options || {}
  );

  var captureScroll = debounce(function() {
    getWindow().requestAnimationFrame(function() {
      var x = getWindow().pageXOffset;
      var y = getWindow().pageYOffset;
      var historyState = getWindow().history.state;
      var savedX = historyState && historyState.scroll && historyState.scroll.x;
      var savedY = historyState && historyState.scroll && historyState.scroll.y;
      if (savedX !== x || savedY !== y) {
        var nextHistoryState = xtend(historyState, {
          scroll: { x: x, y: y }
        });
        getWindow().history.replaceState(
          nextHistoryState,
          null,
          getWindow().location
        );
      }
    });
  }, options.captureScrollDebounce);

  // cf. https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  if ('scrollRestoration' in getWindow().history) {
    getWindow().history.scrollRestoration = 'manual';
  }

  // Scroll positions are saved into the history entry's state; then when that
  // the history changes (the popstate event), we try restoring any saved
  // scroll position.

  getWindow().addEventListener('scroll', captureScroll, { passive: true });
  if (options.autoRestore) {
    getWindow().addEventListener('popstate', restoreScroll);
  }

  removeListenerFunctions = [
    function() {
      getWindow().removeEventListener('scroll', captureScroll, {
        passive: true
      });
    }
  ];
  if (options.autoRestore) {
    removeListenerFunctions.push(function() {
      getWindow().removeEventListener('popstate', restoreScroll);
    });
  }
}

module.exports = {
  start: start,
  end: end,
  restoreScroll: restoreScroll,
  getSavedScroll: getSavedScroll
};
