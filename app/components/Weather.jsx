var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass ({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      // this binding will be lost when we are in this function
      // this.setState({
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      //alert(errorMessage);
    });
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function(){
    // var isLoading = this.state.isLoading;
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

// This component is going to be a container component and its child components , i.e.
// WeatherForm and WeatherMessage are presentational components
