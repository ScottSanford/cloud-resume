import React from 'react'
import css from './Sidebar.module.css'
import classNames from 'classnames'
import profile from '../../img/profile.jpeg'


const Sidebar: React.FC = () => {
  return (
    <nav className={css.container}>
      <div className={css.imageContainer}>
        <img src={profile} className={css.image} />
      </div>
      <div>
      <ul className={css.navList}>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger', 'active')} href="#about">About</a></li>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger')} href="#experience">Experience</a></li>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger')} href="#education">Education</a></li>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger')} href="#skills">Skills</a></li>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger')} href="#certifications">Certifications</a></li>
          <li className={css.navItem}><a className={classNames(css.navLink, 'js-scroll-trigger')} href="#articles">Articles</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Sidebar
