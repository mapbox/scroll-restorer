# @mapbox/scroll-restorer

Preserve the scroll state of [`document.scrollingElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement) while navigating through history states in client-side routes.

## Usage

1. Invoke the `start` method when you would like to begin storing the browser's scroll position in history states, likely when your application mounts.
2. Invoke the `stop` method when you would like to stop the restoration of scroll position, likely when your application umounts.

An example using React Router may be found at https://github.com/mapbox/scroll-restorer/tree/master/example.

## React & React Router Example

```jsx
import React, {Component} from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import scrollRestorer from '@mapbox/scroll-restorer';

class ScrollRestorerExample extends Component {
  componentDidMount() {
    // Initiate the scroll position restoration behavior.
    scrollRestorer.start();
  }

  componentWillUnmount() {
    // Cease the scroll position restoration behavior.
    scrollRestorer.stop();
  }

  getContent(numParagraphs) {
    const paragraphArr = new Array(numParagraphs).fill();

    return (
      <div>
        <h1>Here are {numParagraphs} paragraph elements, enjoy!</h1>
        {paragraphArr.map((_, index) => <p key={index}>Paragraph #{index}.</p>)}
      </div>
    );
  }

  render() {
    return (
      <HashRouter>
        <div>
          <nav style={{background: '#fff', position: 'fixed', top: 0, left: 0, width: '100%'}}>
            <Link to="/">Home</Link> &nbsp;
            <Link to="/page-a">Page A</Link> &nbsp;
            <Link to="/page-b">Page B</Link> &nbsp;
            <Link to="/page-c">Page C</Link>
          </nav>
          <main style={{marginTop: '40px'}}>
            <Route exact path="/" render={() => <h1>This is the home page.</h1>} />
            <Route exact path="/page-a" render={() => this.getContent(5)} />
            <Route exact path="/page-b" render={() => this.getContent(20)} />
            <Route exact path="/page-c" render={() => this.getContent(100)} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default ScrollRestorerExample;
```

## API

`scroll-restorer` exposes a singleton with four methods:
- `#start`: Start tracking the user's scroll position. It accepts a single optional argument, which is an object that may contain the following properties:
  - `autoRestore` _(defaults to `true`)_: When `true`, `scroll-restorer` will attempt to restore the scroll position on each `popstate` event. Set this to `false` if you want to control the scroll position restoration manually (e.g. you may wish to call `#restoreScroll` at a very specific point in your application's rendering lifecycle).
  - `captureScrollDebounce` _(defaults to `50`)_: The number of milliseconds by which the scroll capturing function should be debounced.
- `#end`: End `scroll-restorer`'s behavior.
- `#getSavedScroll`: Retrieve the scroll position from `window.history` or an optional `popstate` event, provided as the only argument. When `autoRestore` is `true`, this method will be invoked automatically.
- `#restoreScroll`: Manually restore the scroll position for a given history state or `popstate` event. When `autoRestore` is `true`, this method will be invoked automatically. `#restoreScroll` accepts two optional arguments:
  - The history state or `popstate` event from which the scroll position will be retrieved (this value is passed to `#getSavedScroll` and _defaults to `window.history`_).
  - The number of times to attempt adjusting the scroll position of the browser's viewport _(defaults to `5`)_.

## Influences

- [delayed-scroll-restoration-polyfill](https://github.com/brigade/delayed-scroll-restoration-polyfill)
- [scroll-behavior](https://github.com/taion/scroll-behavior)
