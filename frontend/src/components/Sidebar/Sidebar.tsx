import React, { useState } from 'react'
import css from './Sidebar.module.css'
import profile from '../../img/profile.jpeg'
import { Link } from 'react-scroll'
import classNames from 'classnames'

type Navigation = 'about' | 'experience' | 'education' | 'skills' | 'certifications'
const navigation = ['about', 'experience', 'education', 'skills', 'certifications']

const Sidebar: React.FC = () => {

  const [isActive, setIsActive] = useState<Navigation>('about')

  return (
    <section className={css.container}>
      <h3 className={css.name}>Resume</h3>
      <div className={css.imageContainer}>
        <img src={profile} className={css.image} alt='profile' />
      </div>

      <nav className={css.navigation}>
        <input type="checkbox" className={css.navCheckbox} id="navi-toggle" />
        <label htmlFor="navi-toggle" className={css.navButton}>
            <span className={css.navIcon}>&nbsp;</span>
        </label>

        <ul className={css.navList}>
            {navigation.map((navItem) => {
              return (
                <li key={navItem}
                  className={css.navItem}
                  >
                  <Link
                    to={navItem}
                    smooth='easeInOutQuart'
                    offset={50}
                    duration={1000}
                    onClick={() => setIsActive(navItem as Navigation)}
                    className={classNames(
                      css.navLink,
                      { [css.isActive]: isActive === navItem }
                    )}>
                      {navItem}
                    </Link>
                </li>
              )
            })}
        </ul>
      </nav>

    </section>
  )
}

export default Sidebar
