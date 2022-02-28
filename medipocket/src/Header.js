import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { NavLink } from "react-router-dom";
function Header() {
  return(
    <div className='empty'>
  <div className='left_component'>
  <div className='navbar'>
      <div className='menu'>
          <MenuIcon className='menu_icon'/>
      </div>
     <NavLink to="/" className="item_link"> 
    <div  className='image'>
      <img className='logo'
      src="img.png"
      alt=""
      />
     

    </div></NavLink>
   
    <NavLink to="/" className="item_link"> 

    <div className='header_dash'>
    <GridViewIcon className='_icon'/>
        <span className='header_text'>
            Dashboard
        </span>
     </div></NavLink> 

    <NavLink to="/" className="item_link">
    <div className='header_dash'>
    <PersonIcon className='_icon'/>
        <span className='header_text'>
            User
        </span>
    </div></NavLink>

    <NavLink to="/" className="item_link">   
    <div className='header_dash'>
        <MessageIcon className='_icon'/>
        <span className='header_text'>
            Messages
        </span>
    </div></NavLink> 

    {/* <div className='header_dash'>
        <span className='header_text'>
            Analysics
        </span>
    </div> */}

<NavLink to="/" className="item_link">
    <div className='header_dash'>
    <FolderIcon className='_icon'/>
        <span className='header_text'>
            
            File Manager
        </span>
    </div></NavLink> 

    <NavLink to="/" className="item_link">
    <div className='header_dash'>
    <ShoppingCartIcon className='_icon'/>
        <span className='header_text'>
            Order
        </span>
    </div></NavLink> 

    <NavLink to="/" className="item_link">
    <div className='header_dash'>
    <ScheduleIcon className='_icon'/>
        <span className='header_text'>
            Schedule
        </span>
    </div></NavLink> 

    
    <NavLink to="/" className="item_link">
    <div className='header_dash'>
        <SettingsIcon className='_icon'/>
        <span className='header_text'>
            Settings
        </span>
    </div></NavLink> 






  </div>
  </div>



  <div className='right_component'>
      
  <NavLink to="/" className="item_link">
    <div className='header_search'>
    
    <input className='search_input'
      type="text" />
    
    <SearchIcon
          className="header_searchIcon" />
    
    
     
    </div></NavLink>
    </div>

    {/* <div className='profile_content'>
        <div className='profile_details'>
            <img src="" alt=''/>
        <div className='name' >
            <div className=' 
            </div>  
        </div> 
    </div> */}

    <div className='health_card'>
        <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnzkDj_OvBuG3d4sueuTlFpYsJffnFhHHXA&usqp=CAU.jpg"
         alt=""/> 
        <div className='profile_name'>
            <p>HARSH SHARMA</p>
            <span>Male</span>
             
        </div>
        <div className='details'>
            <div className='age'>
                <span>20</span>
            
            
            
            <div className='bloodgroup'>
                <span>A+</span>
            </div>

            </div>

            <div className='height'>
                <span>5'8</span>

            <div className='weight'>
                <span>69kg</span>
            </div>
            </div>

            <div className='bmi'>
                <span>20</span>

            <div className='vision'>
                <span>6/6</span>
            </div>
            
            
            </div>
        </div>
    </div>



  </div>
  );
}

export default Header;