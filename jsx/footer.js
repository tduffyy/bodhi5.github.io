/**@jsx React.DOM**/

var React = require('react');
module.exports = React.createClass({
  render: function(){
    return(
      <section id='contact' className='section contact'>
      <div className='overlay offset contact-info'>
        <div className='innerContent'>
          <div className='container clearfix'>
            <div className='sixteen columns'>
             <h1 className='title'>Get In Touch</h1>
              <p>Bodhi5, Inc.</p>
              <p>1820 E.Garry Ave, Suite 105</p>
              <p>Santa Ana, CA 92705</p>
              <p>email: <a style={{color: '#B3862F'}} href={'mailto:info@bodhi5.com'}>{'info@bodhi5.com'}</a></p>
              <p>P: (949) 484-6587</p>
            </div>
          </div>
        </div>
      </div>
    <footer className='footer'>
      <div className='footer'>
        <div className='container clearfix'>
          <div className='one-third column'>
            <div className='footer-logo'>
            </div>
          </div>
          <div className='two-thirds column'>
            <div className='right social'>
              <ul>
                <li className='google'> 
                  <a href='https://plus.google.com/+Bodhi5Inc/posts'>
                    <i className='step fi-social-google-plus size-24'></i>
                  </a>
                </li>
                <li className='twitter'> 
                  <a href='https://twitter.com/bodhi_5'>
                   <i className='step fi-social-twitter size-24'></i>
                  </a>
                </li>
                <li className='github'>
                  <a href='https://github.com/orgs/Bodhi5/'>
                    <i className='step fi-social-github size-24'></i>
                  </a>
                </li>
                <li className='medium'>
                  <a href='https://medium.com/@bodhi_5'>
                    <i className='step fi-social-medium size-24'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
    );
  }
});