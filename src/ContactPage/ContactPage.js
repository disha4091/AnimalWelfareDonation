import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
    function changepage(){
        var url = "https://forms.gle/AHnTJwpspD8zDhQMA" ;
        window.location.href= url;
    }
    return (
        <div>
        <div className="outer">
        <div className="inner">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQlMHUT8Eq3Gchhtk-MIODy7kIe6bb7oBU2qEcmWcJgWXtuQ/viewform?embedded=true" width="640" height="838" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        

        <br></br><br></br><br></br><br></br>

        </div>
        <div classname="alternate">
        <p>Due to screen-resolution, click here to contact us</p>
        <button onClick={changepage}>Contact us</button>
        </div>
        </div>
        
    )
}

export default ContactPage
