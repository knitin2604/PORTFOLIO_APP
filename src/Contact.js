import './Contact.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import emailjs from "emailjs-com";



import React from 'react'

export default function Contact() {
         
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_smwvqj9', 'template_0nmw8ek', e.target, 'user_UPE76rcLkmEChWW5InOY2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
        <div>
        
        


        <section id="contact">

        <div className="container">

          
        <div className="contact-header">
            <Bounce left>CONTACT</Bounce>
          </div>


        

          <div className="contact-line">
            <LightSpeed left> Have a question or want to work together?</LightSpeed>
           
          </div>
           
          
          


                     <div className="container">
            <form onSubmit={sendEmail}>
              <Zoom>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                    </Zoom>
                </form>
            </div>
          

        </div>
          
        

        </section>

                                      

        </div>
    )
}
