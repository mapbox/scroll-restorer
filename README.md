# @mapbox/scroll-restorer

Preserve the scroll state of [`document.scrollingElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement) while navigating programmatically through history states — that is, client-side routing.

## Installation

```
npm install @mapbox/scroll-restorer
```

## Usage

1. Invoke the [`start`] method when you would like to begin storing the browser's scroll position in history states, likely when your application mounts.
2. Invoke the [`stop`] method when you would like to stop the restoration of scroll position, likely when your application unmounts.

Have a look at [an example using React Router](./example).

## API

### start

`scrollRestorer.start([options])`

Starts tracking the user's scroll position.

#### options

##### autoRestore

Type: `boolean`.
Default: `true`.

When `true`, `scroll-restorer` will attempt to restore the scroll position on each `popstate` event. Set this to `false` if you want to *manually* control the scroll position restoration (e.g. you may wish to call [`restoreScroll`] at a very specific point in your application's rendering lifecycle).

##### captureScrollDebounce

Type: `number`.
Default: `50`.

The number of milliseconds by which the scroll-capturing function should be debounced.

### end

`scrollRestorer.end()`

End scroll-restorer's behavior.

### getSavedScroll

`scrollRestorer.getSavedScroll([input])`

Returns the scroll position retrieved from `window.history` or an optional `popstate` event.
When the [`autoRestore`] option of [`start`] is `true`, this method will be invoked automatically, so you only want to use it manually if you've set [`autoRestore`] to `false`.

#### input

Type: `{ state: Object }`, either `window.history` or a `popstate` event.
Default: `window.history`.

### restoreScroll

`scrollRestorer.restoreScroll([input, attempts])`

Manually restore the scroll position for a given history state or `popstate` event.

When the [`autoRestore`] option of [`start`] is `true`, this method will be invoked automatically, so you only want to use it manually if you've set [`autoRestore`] to `false`.

#### input

Type: `{ state: Object }`, either `window.history` or a `popstate` event.
Default: `window.history`.

#### attempts

Type: `number`.
Default: `5`.

The number of times to attempt adjusting the scroll position.
scroll-restorer might need to make multiple attempts if the saved scroll state refers to a position that is not yet available because content is still loading.

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

## Influences

- [delayed-scroll-restoration-polyfill](https://github.com/brigade/delayed-scroll-restoration-polyfill)
- [scroll-behavior](https://github.com/taion/scroll-behavior)

[`start`]: #start
[`stop`]: #stop
[`restoreScroll`]: #restorescroll
[`autoRestore`]: #autorestore
