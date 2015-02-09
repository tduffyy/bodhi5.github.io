/***@ jsx React.DOM **/
var React = require('react');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      index: 0
    };
  },

  componentDidMount: function () {
    this.setState({
        interval: setInterval(function () {
        this.changeQuote();
      }.bind(this),1000 * 5)
    });  },

  changeQuote: function () {
    var _nextQuote = this.state.index + 1;
    var _index = _nextQuote < this.props.quotes.length ? _nextQuote : 0;
    this.setState({index: _index });
  },

  render: function(){
    var _quote = this.props.quotes[this.state.index];

    return(
      <section className='quotes'>
        <div className='overlay offset'>
          <div className='container clearfix'>
            <div className='sixteen columns'>
              <div className='quotes-icon'></div>
              <blockquote>{_quote.text}</blockquote>
              <h2 style={{ color: 'white'}}>{_quote.author}</h2>
            </div>
          </div>
        </div>
      </section>
    );
   }
});
