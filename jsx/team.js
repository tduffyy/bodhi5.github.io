/*** @ jsx React.DOM */

var React = require('react');

//export out module

var Team = module.exports = {};

Team.List = React.createClass({

  render: function(){
    
    return (
      <section id='team' className='offset section team'>
        <div id='teamSeaction' className='innerContent'>
          <div className='clearfix'> 
            {this.props.teamMembers.map(function(member,index){
              return (
                <Team.Member
                  key={index}
                  name={member.name}
                  photo={member.photo}
                  position={member.position}
                  description={member.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
});

Team.Member = React.createClass({
  getInitialState: function(){
    return{
      hovering: false
    };
  },
  handleHover: function(e){
    var isHovering = e.type === 'mouseover';
    this.setState({hovering: isHovering});
  },
  render: function(){
    return (
      <div className='team' onMouseOver={this.handleHover} onMouseOut={this.handleHover} style={{opacity: this.state.hovering ? 0.5 : 1}}>
        <img src={'images/team/'+ this.props.photo.toLowerCase()} />
        <h2>{this.props.name}<br/><span>{this.props.position}</span></h2>
        <p className='text'>{this.props.description}</p>
      </div>
    );
  }
});
