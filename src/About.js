import React from 'react';
import './About.css';

import nitin from './images/nitin.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Fade from 'react-reveal/Fade';
import speed from './images/speed.jfif';
import responsive from './images/responsive.jfif';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';







export default function About() {
  
    return (
    <div>
        <section id="about">
        <div className="container">
            <div className="header" > <Fade left>ABOUT</Fade></div> 
                        <div className="skillquality">
                             <div className="speed" >
                                      <div className="card-skill" style={{Width:"290px"}}><Flip left><img alt="" src={speed}/></Flip>
                                      </div>
                                      <Slide left> <div className="infome">FAST</div>
                                      <p className="intro-about">Fast load times and lag free</p></Slide>
                              </div>
             
                                <div className="responsive">
                                      <div className="card-skill2"><Flip right><img alt="" src={responsive}/></Flip></div>
                                   
                                     <Slide right><div className="infome">RESPONSIVE</div>
                                      <p className="intro-about">My layouts will work on any device.</p></Slide>
                
                                </div>
                        </div>
             

                        
                                <div classname="skillwrap" >               
                                      <div className="intro">
                                         <Fade left>
                                               <div className="cardintro"><img alt="" src={nitin}/></div>
                                               <div className="infome"> Who's This Guy?</div>
                                               <p className="intro-about">i m frontend web Developer currently pursuing my B.Tech </p>
                                          </Fade>
                                       </div>

                          <div className="skill">
                                      
                                          <Fade right>
                                            <ProgressBar animated now={90} style={{height:"35px",width:"300px"}} label={"CSS"}  />
                                           <p></p>
                                            <ProgressBar animated now={90} style={{height:"35px",width:"300px"}}  label={"HTML"}  />
                                           <p></p>
                                            <ProgressBar animated now={70} style={{height:"35px",width:"300px"}}  label={"Javascript"}  />
                                            <p></p>
                                            <ProgressBar animated now={75} style={{height:"35px",width:"300px"}}  label={"React"}  />
                                            <p></p>
                                            <ProgressBar animated now={40} style={{height:"35px",width:"300px"}}  label={"Node js"}  />
                                             <p></p>
                                             <ProgressBar animated now={90} style={{height:"35px",width:"300px"}}  label={"C++"}  />
                                              <p></p>
                                              <ProgressBar animated now={70} style={{height:"35px",width:"300px"}}  label={"DS & ALGORITHM"}  />
                                                </Fade> 
                                          
                                     </div>
                           
                      </div>
             </div>  
        </section>
    </div>

    )
}
