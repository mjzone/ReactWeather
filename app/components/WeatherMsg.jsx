var React = require('react');

// var WeatherMsg = (props) => {
//     var {cityName, temp} = props;
//     return (
//         <div>
//             <span>It is {temp} in {cityName}</span>
//         </div>
//     )
// }
/* we can refactory more */
var WeatherMsg = ({cityName, temp}) => { // destructuing on the fly.
    return (
        <div>
            <h3 className="text-center">It is {temp} in {cityName}</h3>
        </div>
    )
}

module.exports = WeatherMsg;
