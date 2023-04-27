import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import image from "../../constant/image";

function About_content() {
    const [clicked , setClicked] = useState(false);
  const clickHandler= ()=>{
    setClicked(!clicked)
  }
  
  return (
    <div className='about_container'>
      <div >
        <div className='about_intro'>
          <h1>Who Am I ?</h1>
          <p>Hello, my name is Amit Chand Mandal and I am a <span className='text animation'></span> <br /> I specialize in building user interfaces for web applications using the React library, along with other related technologies like HTML, CSS, and JavaScript.
          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
          <Link to='/contact'>
            <button>Contact</button>
          </Link>
        </div>  
      </div>

      <div>       
        <h1 >Education</h1>
        <hr />
        <p>I have a Bachelor's degree in Electronics and Communication Engineering from Thapathali Campus(TU).I gained a strong foundation in engineering principles and their practical applications. I also had the opportunity to work on several group projects where I honed my communication and collaboration skills.</p>
      </div>

      <div>
       <div >
          <h1 >Tranning and Certificates</h1>  
          <hr />         
          <p>  I completed a three-month web development training program at Minderiser Institute, where I gained a solid understanding of HTML, CSS, JavaScript, and other programming languages. It was a challenging but rewarding experience, and I feel proud to have accomplished this significant milestone in my journey as a web developer. I am confident that I can now create visually appealing and functional websites and look forward to applying my newfound skills to real-world projects.</p>           
          <p>I am excited to share that I have completed an online course through Coursera, a leading online education website. During this course, I gained valuable knowledge and skills related to web development, including HTML, CSS, React, JavaScript, and version control. It was an enriching experience that allowed me to learn at my own pace and from the comfort of my own home. I am grateful for the opportunity to have participated in this course and for the support and guidance provided by the instructors. The skills that I have acquired through this course will undoubtedly serve me well in my future endeavors as a web developer.</p>
          <button  onClick={clickHandler} >Click to see Certificates</button>
        </div>

              
          <div className={`certificates ${clicked ? "show":"hide"}`}>
            <div className='certificate'>
              <h5> FrontEnd Development</h5>
              <img src={image.frontend} alt="fronte" />
              <div className='btn_position'>
                <a href="https://coursera.org/share/bd9b0a43f446b23f386127312c2da168" target='_blank'>view </a>
              </div>
            </div>
            
            <div className='certificate'>
              <h5>HTML & CSS in Depth</h5>
              <img src={image.css} alt="" />
              <div className='btn_position'>
                <a href="https://coursera.org/share/4cae5673d759593a510695a5585b624b" target='_blank'>view</a>
              </div>            
            </div>

            <div className='certificate'>
              <h5>Version Control</h5>
              <img src={image.version} alt="" />
              <div className='btn_position'>
                <a href="https://coursera.org/share/51ba699c1a143404f0d0d5224e30fe80" target='_blank'>view</a>
              </div>            
            </div>

            <div  className='certificate'>
              <h5>Progrmming With Javascript</h5>
              <img src={image.javascript} alt="" />
              <div className="btn_position">
                <a href="https://coursera.org/share/04585c3ff175c62884d283ff0436276f"target='_blank'> view  </a>
              </div>
            </div>

            <div className='certificate'>
              <h5>React</h5>
              <img src={image.reactbasic} alt="" />
              <div className='btn_position'>
                <a href="https://coursera.org/share/42e04cc45bdba26ec5dbe3fa6daafd2a" target='_blank'>view</a>
              </div>
            </div>                    
        </div>
      </div>

      {/* <div>
        <a href="src\assets\cv.pdf "download >Download my cv</a>
      </div> */}

      <div className='skills_container'>
        <h1>What Skill's I have</h1>
        <h3>Front End Web Development</h3>
        <div className='skills_list'>
          <div>
            <h5> 
              <img src={image.html} alt="" /> HTML</h5> 
             <h5>
              <img src={image.cssicon} alt="" /> CSS</h5>
           <h5>
              <img src={image.javascripticon} alt="" /> Javascript</h5> 
          </div>
          <div>
             <h5>
              <img src={image.responsive} alt="" /> Responsive Design</h5> 
           <h5> 
              <img src={image.bootstrap} alt="" />  Bootstrap</h5>
            <h5>
              <img src={image.tailwind} alt="" /> Tailwind</h5> 
          </div>
          <div>
            <h5>
              <img src={image.git} alt="" /> GIT </h5>
            <h5>
              <img src={image.github} alt="" /> Github</h5>
            <h5>
              <img src={image.reacticon} alt="" /> React</h5>     
          </div>          
        </div>
      </div>
    </div>
  )
}

export default About_content