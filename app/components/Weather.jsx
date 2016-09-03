var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMsg = require('WeatherMsg'),
    WeatherService = require('WeatherService'),
    ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(name) {
        var self = this;
        self.setState({isLoading: true, errorMessage: undefined});
        WeatherService.getTemp(name).then(function(res) {
            self.setState({cityName: name, temp: res, isLoading: false});
        }, function(e) {
            self.setState({isLoading: false, errorMessage: e.message});
        });
    },
    render: function() {
        var {isLoading, cityName, temp, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fethching weather...</h3>;
            } else if (temp && cityName) {
                return <WeatherMsg cityName={cityName} temp={temp}/>;
            }
        };

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal title='Oops..' message={errorMessage}/>
                )
            }
        };

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
