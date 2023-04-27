import React,{useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Homecontent from './Homecontent';
import About_content from '../about/About_content';
import ProjectContent from '../project/ProjectContent'
import Contact_content from '../Contacts/Contact_content'
import Footer from '../../components/footer/Footer';
import {BsArrowUpCircle} from 'react-icons/bs'
function Home() {
  const homeRef = useRef(null);

  function scrollToHome() {
    scrollToElement(homeRef.current);
  }

  function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className='margin_top'>
        <div ref={homeRef}>
          <Homecontent/>
        </div>

        <div >
          <About_content /> 
        </div>

        <div>
          <ProjectContent/>
        </div> 

        <div className="contact_content_wrapper"  >  
          <div>
            <Contact_content/> 
          </div> 
          <div className='scroll_top' onClick={scrollToHome}>
            <BsArrowUpCircle/>  Click to Scroll top
          </div>        
        </div>

        <div>
          <Footer/>
        </div>  
      </div>
    </div>    
  )
}
export default Home