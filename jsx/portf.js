
var React = require('react');

var Portfolio = module.exports = {};

Portfolio.List = React.createClass({

  render: function(){    
    return (
      <section id='work' className='offset section works'>
        <div className='innerContent'>
          <div className='container clearfix'>
            <div className='sixteen columns'>
              <h1 className='title'>What We have Done</h1>
            </div>
          </div>
        </div>
        <div className='innerContent'>
          <div className='container clearfix'>
            <div className='container clearfix'>
              {this.props.data.map(function(project,index){
                return (<Portfolio.Item data={project}/> );
              }.bind(this))}
            </div>
          </div>
        </div>
      </section>
    );
  }
});

Portfolio.Item = React.createClass({

  getInitialState: function () {
    return {
      displayClass: ''
    };
  },
  
  handleHover: function (e) {
    this.setState({ displayClass: (e.type === 'mouseover') ? 'selected': '' });
  },

  render: function () {
    return (
      <div className='one-third column work'>
        <div 
          className={'info ' + this.state.displayClass} 
          onMouseOver={this.handleHover} 
          onMouseOut={this.handleHover}>

          <div className='inner'>
            <h3 className='inStore'>{this.props.data.name}</h3>
            <p className='subtitle'>{this.props.data.subtitle}</p>
            <p className='hiddentext'>{this.props.data.description}</p>
          </div>
          <div className='appStore'>
            {!this.props.data.appstore ? null :<a href={this.props.data.appstore}><img src='images/appstore.png'/></a>}
            {!this.props.data.googleplay ? null :<a href={this.props.data.appstore}><img src='images/googleplay.png'/></a>}
          </div>
        </div>
        <img src={'images/work/thumbs/' + this.props.data.image}  />
      </div>
    );
  }
});

module.exports = Portfolio;