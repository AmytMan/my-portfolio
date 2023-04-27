import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import image from '../../constant/image';
import './Navbar.css'

function Navbar() {
  const [clicked , setClicked] = useState(false);

  const clickhandler=()=>{
    setClicked(!clicked)
  }
  return (
    <div className='position_fixed'>
    <div className=' navbar_wrapper'>
      <div >
        <Link to='/'className='myprofile_image'>
          <img src={image.mypic} alt="profile_Pic" /> 
            <a href='/'>Amit Mandal</a> 
        </Link> 
      </div>

      <div>
      <ul className={clicked ? "navbar_items_hide":"navbar_items"}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      </div>

      <div className="menu_icon_wrapper" onClick={clickhandler}>
        <div className='menu_icon'>
          {
            clicked ? ( <FaTimes size={20} style={{color:"red"}}/>) :  (<FaBars size={20} style={{color:"white"}}/>)
          }
        </div>
      </div>      
    </div>
     {/* small device content  */}

    <div className={clicked ? 'small_device_wrapper':'hide'} onClick={clickhandler}>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
  )
}

export default Navbar