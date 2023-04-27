import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProjectContent from './ProjectContent'
import Footer from '../../components/footer/Footer'
function Project() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className=''>
        <ProjectContent/>
        <Footer/>
      </div>
      
      
    </div>
  )
}

export default Project