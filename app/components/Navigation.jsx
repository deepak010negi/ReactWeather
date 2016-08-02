var React = require('react');
var {Link, IndexLink} = require('react-router'); // destructuring property of ES6.
// It will create a variable called link, that equals the link property of whatever is on the right side.
// link will allow to click on links and easily switch pages

var Navigation = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather Application</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Example</Link>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input text="search" placeholder="Enter City!"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;

  // <div>
  //   <h1>This is navigation component</h1>
  //   <div>
  //     <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Get Weather</IndexLink>
  //   </div>
  //   <div>
  //     <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>About</Link>
  //   </div>
  //   <div>
  //     <Link to="/example" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Example</Link>
  //   </div>
  // </div>

  // We could have used <a href='#/about'>Using a tag</a>, but Link has some extra handy features
  // few ways to add style and classes to the element to the link. It take care for all the logic
  // to match up the link with the visible page.

  // On choosing activeStyle={{ fontWeight: 'bold'}}, If we keep using Link, 'Get Weather' will be BOLD
  // everytime as evrytime the path '/' will be matched. To handle this we should use 'IndexLink'
