var React = require('react');
var ErrorModel = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        }
    },
    propTypes: {
        title: React.propTypes.string,
        message: React.propTypes.string.isRequired
    },
    componentDidMount: function() {
        debugger;
        var modal = new Foundation.Reveal($('#error-modal'));
        debugger;
        modal.open();
    },
    render: function() {
        var {title,message} = this.props;

        return (
            <div id="error-model" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModel;
