/** @jsx React.DOM */

var React = require('react')
  , App = require('./app')
  , data = require('./data');

React.render(<App data={data} />, document.getElementById('content'));
