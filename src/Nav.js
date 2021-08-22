import React from 'react'
import './Nav.css';
import Zoom from 'react-reveal/Zoom';
import development from './images/development.jfif';




export default function Nav() {
  
    return (
        <div>

          <div className="home">
          <Zoom bottom> 
            <div className="col-8 form-group mx-auto" style={{width:"600px",height:"5px",}}><img alt="" className="home-image" src={development}/></div>
          
          </Zoom>
                   <div class="flex-home">

          <div class="text">
            Hello, I'm <span class="highlight">NITIN YADAV</span>.
            <br/>
            <Zoom left>I'm a Frontend web developer.</Zoom>
          </div>

          
             
          
          </div>
          </div>
          



         
          
           
         
        </div>
    )
}
