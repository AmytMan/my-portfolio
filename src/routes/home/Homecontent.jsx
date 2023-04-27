import React from 'react'
import  image  from '../../constant/image.jsx';
import './Home.css';
function Homecontent() {
  return (
    <div>
        <div className='home_wrapper'>
        <div className='home_background_image'>
          <img src={image.bg1} alt="" />
        </div>

        <div className='home_container'>
          <h5>Hello I'm</h5>        
          <div className="text">
            <span style={{ '--i': 1 }}>A</span>
            <span style={{ '--i': 2 }}>M</span>
            <span style={{ '--i': 3 }}>I</span>
            <span style={{ '--i': 4 }}>T</span>
            {" "}{" "}
            <span style={{ '--i': 5 }}>C</span>
            <span style={{ '--i': 6 }}>H</span>
            <span style={{ '--i': 7 }}>A</span>
            <span style={{ '--i': 8 }}>N</span>
            <span style={{ '--i': 9 }}>D</span>
            {" "}{" "}
            <span style={{ '--i': 10 }}>M</span>
            <span style={{ '--i': 11 }}>A</span>
            <span style={{ '--i': 12 }}>N</span>
            <span style={{ '--i': 13 }}>D</span>
            <span style={{ '--i': 14 }}>A</span>
            <span style={{ '--i': 15 }}>L</span>
          </div>           
          <h4>Frontend Developer with a passion for crafting user-friendly and visually appealing website interfaces.</h4>
        </div>

        <div>
          <div className='arrowdown_animation'>
            <img src={image.arrowdown} alt="" />        
          </div>
        </div>
    </div>
    </div>
  )
}

export default Homecontent