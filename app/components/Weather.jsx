var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMsg = require('WeatherMsg'),
    WeatherService = require('WeatherService');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(name) {
        var self = this;
        self.setState({isLoading: true});
        WeatherService.getTemp(name).then(function(res) {
            self.setState({cityName: name, temp: res, isLoading: false})
        }, function(err) {
            alert(err);
        });
    },
    render: function() {
        var {isLoading, cityName, temp} = this.state;

        var renderMessage = function(){
            if(isLoading){
                return <h3>Fethching weather...</h3>
            }else if(temp && cityName){
                return <WeatherMsg cityName={cityName} temp={temp}/>;
            }
        };

        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
