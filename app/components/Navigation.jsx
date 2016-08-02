var React = require('react');
var {Link, IndexLink} = require('react-router'); // destructuring property of ES6.
// It will create a variable called link, that equals the link property of whatever is on the right side.
// link will allow to click on links and easily switch pages

var Navigation = React.createClass({
  render: function(){
    return (
      <div>
        <h1>This is navigation component</h1>
        <div>
          <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Get Weather</IndexLink>
        </div>
        <div>
          <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>About</Link>
        </div>
        <div>
          <Link to="/example" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Example</Link>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
// We could have used <a href='#/about'>Using a tag</a>, but Link has some extra handy features
// few ways to add style and classes to the element to the link. It take care for all the logic
// to match up the link with the visible page.

// On choosing activeStyle={{ fontWeight: 'bold'}}, If we keep using Link, 'Get Weather' will be BOLD
// everytime as evrytime the path '/' will be matched. To handle this we should use 'IndexLink'
