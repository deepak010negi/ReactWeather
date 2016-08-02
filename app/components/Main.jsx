var React = require('react');
var Navigation = require('Navigation');
//var Weather = require('Weather');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
        //<Weather/>
  }
});

module.exports = Main;
