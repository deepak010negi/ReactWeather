var React = require('react');

var About = React.createClass ({
  render: function(){
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is the weather application built on react</p>
        <p>Here are some tools which I have used</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather by city name.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
