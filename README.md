# scroll-restorer

🚧🚧 **WORK IN PROGRESS!** 🚧🚧

Preserve scroll state while navigating through history states in client-side routes.

## Usage

1. Invoke the `start` method when you would like to begin storing the browser's scroll position in history states, likely when your application mounts.
2. Invoke the `stop` method when you would like to stop the restoration of scroll position, likely when your application umounts.

An example using React Router may be found at https://github.com/mapbox/scroll-restorer/tree/master/example.

## API

`scroll-restorer` exposes a singleton with four methods:
- `#start`: Start tracking the user's scroll position. It accepts a single optional argument, which is an object that may contain the following properties:
  - `autoRestore` _(defaults to `true`)_: When `true`, `scroll-restorer` will attempt to restore the scroll position on each `popstate` event.
  - `captureScrollDebounce` _(defaults to `50`)_: The number of milliseconds by which the scroll capturing function should be debounced.
- `#end`: End `scroll-restorer`'s behavior.
- `#getSavedScroll`: Retrieve the scroll position from `window.history` or an optional `popstate` event, provided as the only argument.
- `#restoreScroll`: Manually restore the scroll position. It accepts two optional arguments:
  - The history state or event from which the history state will be retrieved (this value is passed to `#getSavedScroll` and _defaults to `window.history`_).
  - The number of times to attempt adjusting the scroll position of the browser's viewport _(defaults to `5`)_.

## Influences

- [delayed-scroll-restoration-polyfill](https://github.com/brigade/delayed-scroll-restoration-polyfill)
- [scroll-behavior](https://github.com/taion/scroll-behavior)
