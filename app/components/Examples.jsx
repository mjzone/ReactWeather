var React = require('react'),
    {Link} = require('react-router');

var Examples = (props)=>{
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p> Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=SriLanka">SriLanka, SL</Link>
                </li>
                <li>
                    <Link to="/?location=Norway">Norway, NO</Link>
                </li>
                <li>
                    <Link to="/?location=Germany">Germany, GE</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;
