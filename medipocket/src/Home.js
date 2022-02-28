import React from 'react';
import './Home.css'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
function Home() {
  return (
      
  <div className='home'>
      <div className='empty'>
      <div className='left_component'>
  <div className='navbar'>
      <div className='menu'>
          {/* <MenuIcon className='menu_icon'/> */}
      </div>
     
    <div  className='image'>
      <img className='logo'
      src="img.png"
      alt=""
      />
      </div>
      </div>
      </div>
      </div>
      
    <div className='home__container'>
        <div className='row1'>
            
            <div className="box1">
                <p>SPECIALISTS</p>
                <img className="img1" src="https://webstockreview.net/images/clipart-doctor-professions-12.png" />
            </div>
            
            <div className="box2">
                <p>MY HEALTH</p>
                <img className='img2' src='https://i.pinimg.com/originals/48/79/56/4879569b75c3c0e1afec9dc800486cb0.jpg' />
            </div>
            </div>
            <div className="row3">
            <button className='slideleft__arrow'><AiFillCaretLeft /></button>
            <button className='slideright__arrow'><AiFillCaretRight /></button>
            </div>
            <div className='row2'>
            <div className="box3">
                <p>QR CODE</p>
                <img className='img3' src='https://pngimg.com/uploads/qr_code/qr_code_PNG3.png' />
            </div>
            <div className="box4">
                <p>RECORDS</p>
                <img className='img4'  src='https://cdn.onlinewebfonts.com/svg/img_94634.png' />
                

            </div>
            <Link to="/upload">
            <button  className='add__record'>Add Record</button>
            </Link>
            </div>
            
    </div>
  </div>
  );
}

export default Home;
