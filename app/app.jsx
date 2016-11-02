const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
