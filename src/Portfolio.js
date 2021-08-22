import './Portfolio.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import React from 'react'
import fitness from './images/fitness.jpg';
import netflix from './images/netflix.jpeg';
import shopping from './images/shopping.jpg';
import video from './images/Video-chat.jpg';

import Zoom from 'react-reveal/Zoom';





export default function Portfolio() {
    return (
        <div>
            <section className="projects">
            <div className="proj-header"><Zoom>PROJECTS</Zoom></div>
            
            
           
        


          <div className="project-container">
          <div className="project-wrapper">
          <div className="card"><img src={fitness}/>
    <div className="info">
      <h1>FITNESS</h1>
      <p>Buy fitness equipments and accesories</p>
       <button ><a href="https://storefitness.herokuapp.com/">Read More</a></button>
    </div>
  </div>

  <div className="card"><img src={shopping}/>
    <div className="info">
      <h1>SHOPPING</h1>
      <p>Shopping frontend website</p>
      <button><a href="https://upbeat-shaw-bd4e03.netlify.app/">Read More</a></button>
    </div>
  </div>

  <div className="card"><img src={netflix}/>
    <div className="info">
      <h1>NETFLIX</h1>
      <p>Netflix frontend clone</p>
      <button href="https://netflix-clone-5dff4.web.app"><a href="https://netflix-clone-5dff4.web.app">Read More</a> </button>
    </div>
  </div>

  <div className="card"><img src={video}/>
    <div className="info">
      <h1>VIDEO-CHAT</h1>
      <p>ONE to one video calling</p>
      <button><a href="https://vigilant-sinoussi-616781.netlify.app/">Read More</a></button>
    </div>
  </div>
  
 
</div>
           





          </div>
              
        
           </section>
        </div>
    )
}
