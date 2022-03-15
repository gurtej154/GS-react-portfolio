import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years knowledge</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Freelancer</h5>
              <small>50+ clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
          Hi, my name is Gurtej Singh, and I am an individual of all trades!
          </p>

          <p>
            Family, friends, work-colleagues call me “Gurjet, Gurj, G, G-Man, G-Unit, Gertesh", But you can call me whatever you think suits me best! 
            </p>

            <p>
So, a bit about me, I am freelancer, full-stack developer, draftsman, graphic designer, UI-UX designer and content creator. Most of the skills and experiences I have gained are mostly through self-taught mechanisms. 
I am passionate and articulate individual with a desire to develop ideas from scratch and seeing them thrive into something evolutionary.  
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About