import React from 'react'
import Experience from '../Experience/Experience'
import { positions } from '../Experience/positions'
import css from './Resume.module.css'
import SACert from '../../img/solutions-architect-cert.png'
import DeveloperCert from '../../img/developer-cert.png'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import { collegeExperience } from '../Education/college'
import { Element } from 'react-scroll'

interface ResumeProps {
  visits?: number
}

const Resume: React.FC<ResumeProps> = ({ visits }) => {
  return (
    <div className={css.container}>
      <Element className={css.section} name='about'>
          <h1>Scott <span className={css.lastName}>Sanford</span></h1>
          <div className={css.subHeading}>Chicago, IL</div>
          <p className={css.paragraphText}>
            Ever since I was a little kid, I loved taking blocks and building something creative with them.
            I knew from an early age I wanted to become an engineer.
          </p>
          <p className={css.paragraphText}>
            Fast forward, my passion for engineering transformed into building software applications (web development).
            I remember building my first programming project as it felt like I had superpowers!
            I have been obsessed with the idea of using the software as a tool to design and solve practical problems.
            The software transforms the world we live in and is also a never-ending problem that I am passionately engaged in solving.
          </p>
          <p className={css.paragraphText}>
            Most recently, I quickly worked my way up from Intern to Senior Software Engineer at one of fastest-growing software companies in the world.
            In our fast-paced environment, I focused on building beautiful software, designing engaging experiences while also maintaining clean,
            well-tested tested code that have reduced clients time by 15% preparing for sales meetings.
            I have managed complex technical features and applications ranging from seed, client, and mature SAAS projects.
            My most recent project reduced our overall project code by 20%. I also thoroughly enjoy working and learning
            from other software engineers as I keep an open mind to learn new development techniques.
          </p>
          <p className={css.paragraphText}>
            Even when I leave work, I continue to listen to software podcasts and read and write code.
            Most recently, my wife and I struggled to remember grocery store items so I built a real-time
            shopping list app for us (we still forget items). If I am not coding, I am probably playing
            fantasy football or cheering on the Chicago Bears.
          </p>
          <p className={css.paragraphText}>Visits: <b>{visits}</b></p>
          <div className={css.socialIcons}></div>
      </Element>

      <Element className={css.section} name='experience'>
        <h2 className={css.experience}>Experience</h2>
        {positions.map((position) => <Experience key={position.date} position={position} />)}
      </Element>

      <Element className={css.section} name='education'>
        <h2 className={css.experience}>Education</h2>
        <Education education={collegeExperience} />
      </Element>

      <Element className={css.section} name='skills'>
        <h2 className={css.experience}>Skills</h2>
        <Skills />
      </Element>

      <Element className={css.section} name='certifications'>
        <h2 className={css.experience}>Certifications</h2>
        <div className={css.certs}>
          <img src={SACert} alt='AWS Solutions Architect - Associate Certification' />
          <img src={DeveloperCert} alt='AWS Developer - Associate Certification' />
        </div>
      </Element>
    </div>
  )
}

export default Resume
