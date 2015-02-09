/**@jsx React.DOM**/

var React = require('react');

var About = React.createClass({

  render: function(){
    return(
      <section id='about' className='offset section about'>
        <div className='innerContent'>
          <div className='container clearfix'>
            <div className='sixteen columns about'>
              <h1 className='title'>About Us</h1>
              <p className='text'>Bodhi5 is a full-service software engineering firm based in Orange County California. We've built a reputation of turning dreams into reality while staying on budget and on time. Our dedicated team of professionals treats every project as their own, nurturing it from idea to finished product and beyond!</p>
              <button type='button'>View Our Work</button>
            </div>
          </div>
        </div>
     </section>
    );
  }
});

module.exports = About;
