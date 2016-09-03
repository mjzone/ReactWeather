var React = require('react'),
    {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
               <div>
                   <h3>This is nav bar</h3>
                   <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bolder'}}> Get Weather</IndexLink>
                   <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About</Link>
                   <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples</Link>
               </div>
           );
}
module.exports = Nav;
