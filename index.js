'use strict';

var xtend = require('xtend');
var debounce = require('debounce');

var removeListenerFunctions;

function end() {
  for (var i = 0, l = removeListenerFunctions.length; i < l; i++) {
    removeListenerFunctions[i]();
  }
}

function start(options) {
  options = xtend(
    {
      captureScrollDebounce: 50,
      syncScrollDebounce: 100,
      syncScrollAttempts: 5
    },
    options
  );

  if (
    typeof window === 'undefined' ||
    window.requestAnimationFrame === undefined ||
    window.history === undefined
  ) {
    return;
  }

  // cf. https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  var attemptsRemaining = options.syncScrollAttempts;

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

  var syncScroll = debounce(
    function(input) {
      if (!input || !input.state || !input.state.scroll) return;
      var scrollState = input.state.scroll;
      window.requestAnimationFrame(function() {
        var savedX = scrollState.x;
        var savedY = scrollState.y;
        if (attemptsRemaining < 1) return;
        if (
          savedY < window.document.body.scrollHeight &&
          (savedX !== window.pageXOffset || savedY !== window.pageYOffset)
        ) {
          window.scrollTo(savedX, savedY);
        } else {
          attemptsRemaining -= 1;
          syncScroll();
        }
      });
    },
    options.syncScrollDebounce,
    true
  );

  syncScroll(window.history);
  window.addEventListener('scroll', captureScroll, { passive: true });
  window.addEventListener('popstate', syncScroll);

  removeListenerFunctions = [
    function() {
      window.removeEventListener('scroll', captureScroll, { passive: true });
    },
    function() {
      window.removeEventListener('popstate', syncScroll);
    }
  ];
}

module.exports = {
  start: start,
  end: end
};
