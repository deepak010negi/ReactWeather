var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass ({
  render: function(){
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are few example locations to try out</p>
        <ol>
          <li>
            <Link to='/?location=Dallas'>Dallas</Link>
          </li>
          <li>
            <Link to='/?location=Pune'>Pune</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Example;
