import React, { Component } from 'react';
import {
  HashRouter as Router,
  NavLink,
  Redirect,
  Route
} from 'react-router-dom';

import DummyContent from './DummyContent';
import scrollRestorer from '../../index';

class ScrollRestorerExample extends Component {
  componentDidMount() {
    scrollRestorer.start();
  }

  componentWillUnmount() {
    scrollRestorer.stop();
  }

  render() {
    return (
      <Router>
        <div className="page relative">
          <nav className="page__header fixed top left right bg-gray-faint border-b border--gray-light px24 py12">
            <ul>
              <li className="inline-block mr12">
                <NavLink
                  className="link"
                  activeClassName="is-active"
                  to="/examples/1"
                >
                  Example 1
                </NavLink>
              </li>
              <li className="inline-block mr12">
                <NavLink
                  className="link"
                  activeClassName="is-active"
                  to="/examples/2"
                >
                  Example 2
                </NavLink>
              </li>
              <li className="inline-block mr12">
                <NavLink
                  className="link"
                  activeClassName="is-active"
                  to="/examples/3"
                >
                  Example 3
                </NavLink>
              </li>
              <li className="inline-block mr12">
                <NavLink
                  className="link"
                  activeClassName="is-active"
                  to="/examples/4"
                >
                  Example 4
                </NavLink>
              </li>
              <li className="inline-block">
                <NavLink
                  className="link"
                  activeClassName="is-active"
                  to="/examples/5"
                >
                  Example 5
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="page__body mt72 p24 pt0">
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/examples/1" />;
              }}
            />
            <Route
              exact
              path="/examples/"
              render={() => {
                return <Redirect to="/examples/1" />;
              }}
            />
            <Route path="/examples/:exampleID" component={DummyContent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default ScrollRestorerExample;
