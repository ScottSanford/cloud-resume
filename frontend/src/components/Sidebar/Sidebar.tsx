import React from 'react'
import css from './Sidebar.module.css'
import profile from '../../img/profile.jpeg'
import { Link } from 'react-scroll'

const SMOOTH_VALUE = 'easeInOutQuart'
const OFFSET = 50
const DURATION = 1000

const Sidebar: React.FC = () => {
  return (
    <nav className={css.container}>
      <div className={css.imageContainer}>
        <img src={profile} className={css.image} alt='profile' />
      </div>
      <div>
      <ul className={css.navList}>
          <li className={css.navItem}><Link to='about' smooth={SMOOTH_VALUE} offset={OFFSET} duration={DURATION} className={css.navLink}>About</Link></li>
          <li className={css.navItem}><Link to='experience' smooth={SMOOTH_VALUE} offset={OFFSET} duration={DURATION} className={css.navLink}>Experience</Link></li>
          <li className={css.navItem}><Link to='education' smooth={SMOOTH_VALUE} offset={OFFSET} duration={DURATION} className={css.navLink}>Education</Link></li>
          <li className={css.navItem}><Link to='skills' smooth={SMOOTH_VALUE} offset={OFFSET} duration={DURATION} className={css.navLink}>Skills</Link></li>
          <li className={css.navItem}><Link to='certifications' smooth={SMOOTH_VALUE} offset={OFFSET} duration={DURATION} className={css.navLink}>Certifications</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Sidebar
