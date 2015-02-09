/*** @ jsx React.DOM */
var React = require('react');
//export out module
module.exports = React.createClass({
  
  getInitialState: function(){
    return{
      focused: 0 
    };
  },

  getSkillDiv: function (skill, index) {
    return (
      <div key={index} className={'one-third column service' + (this.state.hoveringIndex === index ? ' selected' : '')}  onMouseOver={this.handleHover.bind(this,index)} onMouseOut={this.handleHover.bind(this,index)}>
        <div className='inner'>
          <div className='icon'><img src={'images/services/' + skill.image}/></div>
            <h3>{skill.skill}</h3>
            <p>{skill.description}</p>
        </div>
      </div>
    );
  },

  handleHover: function(index,e){
    this.setState({hoveringIndex: (e.type === 'mouseover') ? index : null });
  },
  
  render: function(){

    return (
      <section id='services' className='offset section' >
        <div className='innerContent '>
          <div className='container clearfix'>
            <div className='sixteen columns'>
              <h1 className='title'>What We Do</h1>
            </div>
            {this.props.skills.map(function(skill,index){
              return this.getSkillDiv(skill, index);
            }.bind(this))}
          </div>
        </div>
      </section>
    );
  }
});

