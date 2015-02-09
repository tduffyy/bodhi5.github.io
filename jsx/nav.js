/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {
      focused: 0
    };
  },
  
  handleClick: function(index){
    this.setState({focused: index});
  },

  render: function(){
    return (
  <span>
    <header id='header'>
      <div className='header'>
        <div className='container clearfix'>
          <div className='one-third column'>
            <div className='logo'></div>
              </div>
                <div className='two-thirds column'>
                <a href='index-image.html#' className='mobile-navigation'><i className='icon-menu'></i></a>
                <nav id='navigation'>
                  <ul className='navigation'>
                  {this.props.items.map(function(item, index){
                  return ( 
                    <li key={index}>
                      <a href={ '#' + item.toLowerCase()} onClick={this.handleClick.bind(this, index)}>{item}</a>
                    </li> );}.bind(this))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
      </header>
      <section id='home' className='home'>
            <div className='image'>
              <div className='overlay'>
                <div className='text'>
                  <div className='inner'>
                    <h1 className='cufon'>We develop your <br/>vision into reality</h1>
                    <p className='cufon'>WE ARE BODHI5, We build the impossible!</p>
                  </div>
                </div>
                <div className='arrow'>
                  <a href={'#about'}>Discover everything about us!</a>
                </div>
              </div>
            </div>
          </section>
      </span>
    );
  }
});


