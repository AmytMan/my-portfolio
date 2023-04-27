import React from 'react'
import { Route,Routes } from 'react-router-dom'
import  Home  from './routes/home/Home';
import About from './routes/about/About';
import Project from './routes/project/Project'
import Contact from './routes/Contacts/Contact';
import Error from './routes/nopage/Error';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/project" element={<Project/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
