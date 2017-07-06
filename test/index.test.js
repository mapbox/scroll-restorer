jest.mock('../util/get_window');

var getWindowModule = require('../util/get_window');
var scrollRestorer = require('../index');

describe('scroll-restorer', function() {
  beforeEach(function() {
    // Mock the window object.
    jest.spyOn(getWindowModule, 'getWindow').mockReturnValue({
      addEventListener: jest.fn(),
      document: {
        body: {
          scrollHeight: 100
        }
      },
      history: {
        replaceState: jest.fn(),
        scrollRestoration: 'foo',
        state: {
          scroll: {
            x: 0,
            y: 0
          }
        }
      },
      location: 'foo',
      pageXOffset: 0,
      pageYOffset: 0,
      removeEventListener: jest.fn(),
      replaceState: jest.fn(),
      // We just invoke requestAnimationFrame functions immediately.
      requestAnimationFrame: function(fn) {
        fn();
      },
      scrollTo: jest.fn()
    });
  });

  afterEach(function() {
    getWindowModule.getWindow.mockRestore();
  });

  describe('start', function() {
    it('adds a scroll event listener', function() {
      scrollRestorer.start();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      expect(addEventListenerArgs[0]).toBe('scroll');
    });

    it('adds a scroll event listener with passive option enabled', function() {
      scrollRestorer.start();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      expect(addEventListenerArgs[2]).toEqual({ passive: true });
    });

    it('adds a popstate event listener when autoRestore option is omitted', function() {
      scrollRestorer.start();
      // We should have attached popstate and scroll event listeners.
      expect(
        getWindowModule.getWindow().addEventListener
      ).toHaveBeenCalledTimes(2);
      // Find the popstate addEventListener call.
      var popStateListenerCall = getWindowModule
        .getWindow()
        .addEventListener.mock.calls.filter(function(callArgs) {
          return callArgs[0] === 'popstate';
        });
      expect(popStateListenerCall.length).toBe(1);
    });

    it('does not add a popstate event listener when autoRestore option is false', function() {
      scrollRestorer.start({ autoRestore: false });
      // We should have attached only a scroll listener.
      expect(
        getWindowModule.getWindow().addEventListener
      ).toHaveBeenCalledTimes(1);
      // We should not have attached a popstate listener.
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      expect(addEventListenerArgs[0]).not.toBe('popstate');
    });

    it('sets history.scrollRestoration to manual if property exists', function() {
      expect(getWindowModule.getWindow().history.scrollRestoration).toEqual(
        'foo'
      );
      scrollRestorer.start();
      expect(getWindowModule.getWindow().history.scrollRestoration).toEqual(
        'manual'
      );
    });

    it('does not set history.scrollRestoration if property does not exists', function() {
      delete getWindowModule.getWindow().history.scrollRestoration;

      scrollRestorer.start();
      expect(getWindowModule.getWindow().history.scrollRestoration).toEqual(
        undefined
      );
    });
  });

  describe('captureScroll', function() {
    beforeEach(function() {
      jest.useFakeTimers();
    });

    afterEach(function() {
      jest.useRealTimers();
    });

    it('calls #replaceState if the saved offset values have changed', function() {
      // We're pretending that the user scrolled the window by 20px on both axes.
      getWindowModule.getWindow().pageXOffset = 20;
      getWindowModule.getWindow().pageYOffset = 20;

      scrollRestorer.start();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      // Let's verify that this is the scroll event listener.
      expect(addEventListenerArgs[0]).toEqual('scroll');
      // Let's invoke the debounced event handler directly.
      addEventListenerArgs[1]();
      // We fake the passage of time to invoke our debounced function.
      jest.runAllTimers();
      // Assert that replaceState was invoked with the "new" scroll offset values.
      expect(
        getWindowModule.getWindow().history.replaceState
      ).toHaveBeenCalledWith(
        { scroll: { x: 20, y: 20 } },
        null,
        getWindowModule.getWindow().location
      );
    });

    it('does not call #replaceState if the saved offset values have not changed', function() {
      scrollRestorer.start();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      // Let's verify that this is the scroll event listener.
      expect(addEventListenerArgs[0]).toEqual('scroll');
      // Let's invoke the debounced event handler directly.
      addEventListenerArgs[1]();
      // We fake the passage of time to invoke our debounced function.
      jest.runAllTimers();
      expect(
        getWindowModule.getWindow().history.replaceState
      ).not.toHaveBeenCalled();
    });
  });

  describe('getSavedScroll', function() {
    it('returns value from provided input', function() {
      expect(scrollRestorer.getSavedScroll({ state: { scroll: 'foo' } })).toBe(
        'foo'
      );
    });

    it('returns value from window.history when input is not defined', function() {
      expect(scrollRestorer.getSavedScroll()).toEqual({ x: 0, y: 0 });
    });

    it('returns undefined when input.state is undefined', function() {
      expect(scrollRestorer.getSavedScroll({ foo: 'bar' })).toEqual(undefined);
    });
  });

  describe('restoreScroll', function() {
    it('calls #scrollTo with a position retrieved from state in window.history', function() {
      // We're pretending that a scroll position has been saved previously.
      getWindowModule.getWindow().history.state.scroll = { x: 0, y: 20 };
      scrollRestorer.restoreScroll();

      expect(getWindowModule.getWindow().scrollTo).toHaveBeenCalledWith(0, 20);
    });

    it('calls #scrollTo with a position retrieved from a popstate event', function() {
      var popstateEvent = { state: { scroll: { x: 0, y: 40 } } };
      scrollRestorer.restoreScroll(popstateEvent);

      expect(getWindowModule.getWindow().scrollTo).toHaveBeenCalledWith(0, 40);
    });

    it('does not call #scrollTo when unnecessary', function() {
      // We're pretending that the user scrolled the window by 20px on the y axis.
      getWindowModule.getWindow().pageXOffset = 0;
      getWindowModule.getWindow().pageYOffset = 20;
      // We're pretending that the same scroll position has already been saved.
      getWindowModule.getWindow().history.state.scroll = { x: 0, y: 20 };

      scrollRestorer.start();
      scrollRestorer.restoreScroll();
      scrollRestorer.end();

      expect(getWindowModule.getWindow().scrollTo).not.toHaveBeenCalled();
    });

    it('returns early if no saved scroll positions exist', function() {
      getWindowModule.getWindow().requestAnimationFrame = jest.fn();
      scrollRestorer.restoreScroll({ foo: 'bar' });
      expect(
        getWindowModule.getWindow().requestAnimationFrame
      ).not.toHaveBeenCalled();
    });
  });

  describe('end', function() {
    it('removes the scroll event listener with identical arguments', function() {
      scrollRestorer.start();
      scrollRestorer.end();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[0];
      var removeEventListenerArgs = getWindowModule.getWindow()
        .removeEventListener.mock.calls[0];
      // Let's verify that this is the scroll event listener.
      expect(addEventListenerArgs[0]).toEqual('scroll');
      // Let's verify that our handler function is === when adding and removing.
      expect(addEventListenerArgs[1]).toBe(removeEventListenerArgs[1]);
      expect(addEventListenerArgs).toEqual(removeEventListenerArgs);
    });

    it('removes the popstate event listener with identical arguments', function() {
      scrollRestorer.start({ autoRestore: true });
      scrollRestorer.end();
      var addEventListenerArgs = getWindowModule.getWindow().addEventListener
        .mock.calls[1];
      var removeEventListenerArgs = getWindowModule.getWindow()
        .removeEventListener.mock.calls[1];
      // Let's verify that this is the popstate event listener.
      expect(addEventListenerArgs[0]).toEqual('popstate');
      // Let's verify that our handler function is === when adding and removing.
      expect(addEventListenerArgs[1]).toBe(removeEventListenerArgs[1]);
      expect(addEventListenerArgs).toEqual(removeEventListenerArgs);
    });
  });
});
