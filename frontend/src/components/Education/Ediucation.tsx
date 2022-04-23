import React from 'react'
import css from './Education.module.css'
import { College } from './education'

interface EducationProps {
  education: College
}

const Education: React.FC<EducationProps> = ({ education }) => {

  const bulletPoints = education.activities.map((item, i) => <li key={i} className={css.listItem}>{item}</li> )

  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={education.image} alt={education.title} />
      </div>
      <div>
        <h3 className={css.title}>{education.title}</h3>
        <div className={css.date}>{education.date}</div>

        <div className={css.company}>{education.major}, {education.degree}</div>
        <ul className={css.list}>
          {bulletPoints}
        </ul>
      </div>
	  </div>
  )
}

export default Education
