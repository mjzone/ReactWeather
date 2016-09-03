var React = require('react');

// we can use stateless functional componenet. Because this component doesn't maintain a state. Just presentational.

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on react. Feel free to use anywhere!</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript I have used.
                </li>
            </ul>
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
