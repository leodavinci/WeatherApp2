const React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var location = this.props.location;
        var temp = this.props.temp;

        return (
            <div>
                <p>Its {temp} in {location}!!!</p>
            </div>
        );
    }
});

module.exports = WeatherMessage;
