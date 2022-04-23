import React from 'react'
import css from './Experience.module.css'
import { Position } from './positions'

interface ExperienceProps {
  position: Position
}

const Experience: React.FC<ExperienceProps> = ({ position }) => {

  const bulletPoints = position.description.map((item, i) => <li key={i} className={css.listItem}>{item}</li> )

  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={position.companyImage} alt={position.company} />
      </div>
      <div>
        <h3 className={css.title}>{position.title}</h3>
        <div className={css.company}>{position.company}</div>
        <div className={css.date}>{position.date}</div>
        <ul className={css.list}>
          {bulletPoints}
        </ul>
      </div>
	  </div>
  )
}

export default Experience
