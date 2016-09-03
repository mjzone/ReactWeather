var React = require('react'),
    {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('Not Yet Implemented');
    },
    render: function(){
        return (
                  <div className="tob-bar">
                      <div className="tob-bar-left">
                          <ul className="menu">
                              <li className="menu-text">Weather App</li>
                              <li>
                                  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bolder'}}> Get Weather</IndexLink>
                              </li>
                              <li>
                                  <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About</Link>
                              </li>
                              <li>
                                  <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="tob-bar-right">
                          <form onSubmit={this.onSearch}>
                              <ul className="menu">
                                  <li>
                                      <input type="search" placeholder="Search weather"/>
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
module.exports = Nav;
