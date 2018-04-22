const React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var location = this.props.location;
        var temp = this.props.temp;

        return (
            <h1 className="text-center">Its {temp} in {location}!!!</h1>
        );
    }
});

module.exports = WeatherMessage;
