var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
    render: function(){
        return (
            <div>
                <h3 className="text-center page-title">Examples</h3>
                <p>Here are few example locations to try out..</p>
                <ol>
                    <li>
                        <Link to='/?location=bareilly'>Bareilly</Link>
                    </li>
                    <li>
                        <Link to='/?location=bangalore'>Bangalore</Link>
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports = Example;
