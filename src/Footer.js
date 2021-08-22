import './Footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import {BsChevronDoubleUp}from 'react-icons/bs';



import React from 'react'

export default function Footer() {
    return (
        <div>

              <div className="back-chevron">
              <a href=""><div className="chevron" ><BsChevronDoubleUp/></div></a>   
             </div>
            <footer>
             

            <div class="icon-wrap">
    
         
          <a href="https://linkedlin.com/nitin-yadav-bb81171a4">
          <div className="icons"   style={{fontSize: '40px', color: "#00bfff"}}>
      <FaLinkedinIn />
           </div>
           
           </a>

           <a href="https://github.com/knitin2604">
               <div className="icons" style={{fontSize: '40px', color: "#00bfff"}}><FaGithubSquare/></div>
           </a>
           <a className="icons"  href="https://instagram.com/Rao_nitin.leo">
               <div  style={{fontSize: '40px', color: "#00bfff"}}><FaInstagramSquare/></div>
           </a>

         
        </div>
        <div className="foot-font">NITIN YADAV @2021</div>
           

            </footer> 
        </div>
    )
}
