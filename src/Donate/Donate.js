import React from 'react'
import './Donate.css'
const Donate = () => {
    function changepage(){
        var url = "https://rzp.io/l/vBi8b3KdQU" ;
        window.location.href= url;
    }
    return (
        <div>
        <div className="donateimg">
            <button onClick={changepage}>Donate now</button>
        </div>
        <br></br>
        <div className="container">
            <h1>Help us to make the world a better place for animals.</h1>
            <p>Your contribution will enable us to 
            provide shelter and food to the animals in need. We also provide 
            medical services to the animals having health conditions. </p>
            <p>You can contribute <a href="http:////rzp.io/l/vBi8b3KdQU">here</a>.</p>
        </div>
        <br></br><br></br><br></br><br></br>
        </div>
    )
}

export default Donate
