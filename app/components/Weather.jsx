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
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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
  componentDidMount: function() {
    var location = this.props.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/'; // this is bring us to the home page
    }
  },
  componentWillReceiveProps: function(newProps) {
    // This functio will be called when component's props get updated
    var location = newProps.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/'; // this is bring us to the home page
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
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
