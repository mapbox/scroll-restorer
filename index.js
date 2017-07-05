'use strict';

var debounce = require('debounce');
var xtend = require('xtend');

var removeListenerFunctions;

function end() {
  for (var i = 0, l = removeListenerFunctions.length; i < l; i++) {
    removeListenerFunctions[i]();
  }
}

function getSavedScroll(input) {
  input = input || window.history;
  if (!input || !input.state) return;
  return input.state.scroll;
}

function restoreScroll(input, attemptsRemaining) {
  attemptsRemaining = attemptsRemaining == null ? 5 : attemptsRemaining;
  var savedScroll = getSavedScroll(input);
  if (!savedScroll) return;
  window.requestAnimationFrame(function() {
    var savedX = savedScroll.x;
    var savedY = savedScroll.y;
    if (attemptsRemaining === 0) return;
    var pageXOffset = window.pageXOffset;
    var pageYOffset = window.pageYOffset;
    if (
      savedY < window.document.body.scrollHeight &&
      (savedX !== pageXOffset || savedY !== pageYOffset)
    ) {
      window.scrollTo(savedX, savedY);
    } else {
      restoreScroll(input, attemptsRemaining - 1);
    }
  });
}

function start(options) {
  options = xtend(
    {
      autoRestore: false,
      captureScrollDebounce: 50
    },
    options || {}
  );

  var captureScroll = debounce(function() {
    window.requestAnimationFrame(function() {
      var x = window.pageXOffset;
      var y = window.pageYOffset;
      var historyState = window.history.state;
      var savedX = historyState && historyState.scroll && historyState.scroll.x;
      var savedY = historyState && historyState.scroll && historyState.scroll.y;
      if (savedX !== x || savedY !== y) {
        var nextHistoryState = xtend(historyState, {
          scroll: { x: x, y: y }
        });
        window.history.replaceState(nextHistoryState, null, window.location);
      }
    });
  }, options.captureScrollDebounce);

  // cf. https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Scroll positions are saved into the history entry's state; then when that
  // the history changes (the popstate event), we try restoring any saved
  // scroll position.

  window.addEventListener('scroll', captureScroll, { passive: true });
  if (options.autoRestore) {
    window.addEventListener('popstate', restoreScroll);
  }

  removeListenerFunctions = [
    function() {
      window.removeEventListener('scroll', captureScroll, {
        passive: true
      });
    }
  ];
  if (options.autoRestore) {
    removeListenerFunctions.push(function() {
      window.removeEventListener('popstate', restoreScroll);
    });
  }
}

module.exports = {
  start: start,
  end: end,
  restoreScroll: restoreScroll,
  getSavedScroll: getSavedScroll
};
