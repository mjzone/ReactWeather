var React = require('react');

// we can use stateless functional componenet. Because this component doesn't maintain a state. Just presentational.

var About = (props) => {
    return (
        <div>
            <h3>About Component Yayy</h3>
        </div>
    );
}
// -- or --
//var About = (props) => <div><h3>About Component Yayy</h3></div>;


// Original Function
// var About = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h3>About Component</h3>
//             </div>
//         );
//     }
// });

module.exports = About;
