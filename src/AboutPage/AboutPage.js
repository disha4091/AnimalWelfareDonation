import React from 'react'
import './AboutPage.css'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
const AboutPage = () => {
    return (
        <div className="container">
        <br></br><br></br>
            <h1>We aim to have a world friendly for animals.</h1>
            <p>Animal welfare has become a major issue and has grown internationally
             The human concern and the salty and rights of animals is the meaning of
             the concept of animal welfare. To prevent the cruelty, malicious intent 
             neginct and torture to pets and stray animals by people. Towards animal
             welfare comes the aspect of animal crusty Animal cruelty is a fairly recent
             subject that has affected society As the human attitude changes society 
             change its approach towards the animal When we speak about "humanity,
             it's our innate empathy that prompts u care not only for members of our 
             families, friends and even for other peoples, but also for those newdy
             and poor animals. This altruistic instinct motivates so many good works
              in society, and there are millions who help by sheltering the poor, 
              feeding the hungry, or curing the ill It's that same impulse that also 
              prompts many to have a compassionate instinct for animals-and not just 
              those in our homes or even in our communities, but animais facing threat 
              or crisis anywhere. What saddens me is that it appears you have never 
              experienced the love of animals</p>

              <p>The relationship between animals and humans lifts ones spirit, 
              acknowledges the intrinsic connections beter humans and nature, and 
              forces us to take responsibility for those around us, be they human 
              or animal The towe and devotion felt by both human and animal for 
              each other is unmistakable, for those lucky enough to experienc it. 
              Those who have never felt this overwhelming love that fills your 
              heart and soul with joy are missing an incredible experience This 
              center is to provide sick, wounded and abandoned animals with food 
              shelter. medication, kindness, safety and care for as long as they 
              need it.</p>  
              <br></br>
              <br></br>

              <h3>Lets help them!</h3>
              <p>To donate click <a href="http:////rzp.io/l/vBi8b3KdQU">here</a>.</p>
              

            <div class="row">
            <div class="column">
                <img src={img3} alt="Snow"/>
            </div>
            <div class="column">
                <img src={img4} alt="Forest" />
            </div>
            <div class="column">
                <img src={img5} alt="Mountains" />
            </div>
            
        </div>
        <br></br><br></br><br></br><br></br>
        </div>
    )
}

export default AboutPage
