import React from 'react'
import image from '../../constant/image';
import './Project.css'
import {TbStarsFilled} from "react-icons/tb";
import {GiStrikingDiamonds} from 'react-icons/gi'
function ProjectContent() {
  return (
    <div className='projectcontact_container'>
        <div className='text_center'>
            <h1><TbStarsFilled/> Projects <TbStarsFilled/></h1>            
            <p>Discover a range of my projects with detailed case studies highlighting the challenges, strategies, and outcomes of each initiative. Gain valuable insights into my processes and methodologies for delivering successful projects, and explore how I can help you achieve your goals.</p>
        </div>

        <div className='projects_wrapper'>
            <div className='projects_menu'>
                <div>                   
                    <img src={image.histudy} alt="histudy" />
                </div>

                <div className='project_details'>
                    <h1> <GiStrikingDiamonds/> Histudy Online Courses & Educational Templates </h1>
                    <p>I have created a website using React Library, Css & Bootstrap that offers a range of online courses and educational templates in a visually appealing and modern format. The site is a clone of an existing platform and includes a variety of courses that cover diverse topics such as programming, design, marketing, and more. Additionally, I used modern web design principles and aesthetics to create an attractive and engaging user interface that encourages visitors to explore and learn. </p>
                    <button>
                        <a href="#">live Link</a> 
                    </button>
                </div>
            </div>

            <div className='projects_menu'>
                <div>
                    <img src={image.portfolio} alt="portfolio" />
                </div>
                <div className='project_details'>
                    <h1><GiStrikingDiamonds/> Portfolio Website</h1>
                    <p>I have created a portfolio website using React that includes several key sections. The home page provides an overview of my work, while the About section provides additional details about my skills, education, and expertise. In the Project section, I showcase some of my best work and provide links for visitors to explore each project in more depth. Finally, the Contact section includes various ways to contact me, such as email, phone, or social media.</p>
                    <button>
                        <a href="https://github.com/AmytMan/my-portfolio" target="_blank">Live Link</a>
                    </button>
                </div>
            </div>

            <div className='projects_menu'>
                <div>
                    <img src={image.digital} alt="digital" />
                </div>
                <div className='project_details'>
                    <h1> <GiStrikingDiamonds/> Digital Clock</h1>
                    <p>Digital clock is designed with a clean and minimalist aesthetic, making it easy to read the time at a glance. The hour, minute, and second digits are displayed in a clear, bold font that stands out against the background. The clock also features a smooth and continuous transition between each second, ensuring that the time is always up-to-date and accurate.</p>
                    <button>
                        <a href="">Live Link</a>
                    </button>
                </div>
            </div>

            <div className='projects_menu'>
                <div>
                    <img src={image.anime} alt="anime" />
                </div>
                <div className='project_details'>
                    <h1> <GiStrikingDiamonds/> Anime Generator</h1>
                    <p>I have created a project that utilizes an API to generate a variety of Anime along with their names. The project features a loading effect that is displayed while the API fetches the data. To build this project, I drew inspiration from a YouTube video tutorial. </p>
                    <button>
                        <a href="">Live Link</a>
                    </button>
                </div>
            </div>

            
        </div>        
    </div>
  )
}
export default ProjectContent