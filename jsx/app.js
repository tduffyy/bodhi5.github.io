
var React = require('react')
  , Nav = require('./nav')
  , About = require('./about')
  , Team = require('./team').List
  , Skills = require('./skills')
  , Porfolio = require('./portf').List
  , Quotes = require('./quotes')
  , Footer = require('./footer');


var App = React.createClass({

  render: function(){
    return (
      <div id='wrapper'>
        <Nav items={this.props.data.navItems}/>
        <About/>
        <Team teamMembers={this.props.data.teamMembers}/>
        <Quotes quotes={this.props.data.quotes}/>
        <Skills skills={this.props.data.skills}/>
        <Porfolio data={this.props.data.portfolio}/>
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
