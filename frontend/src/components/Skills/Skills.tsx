import React from 'react'
import css from './Skills.module.css'


const Skills: React.FC = () => {

	return (
		<>
			<div className={css.section}>
				<h3 className={css.title}>Passionate About</h3>
				<ul className={css.list}>
					<li>Amazon Web Services (AWS) Cloud</li>
					<li>Infrastructure as Code: AWS Serverless Application Model (SAM) & Cloud Development Kit (CDK)</li>
					<li>Frontend Technologies: TypeScript & React</li>
				</ul>
			</div>
			<div className={css.section}>
				<h3 className={css.title}>Proficient In</h3>
				<ul className={css.list}>
					<li>HTML/CSS</li>
					<li>JavaScript/TypeScript</li>
					<li>NodeJS</li>
					<li>CI/CD: Bitbucket, Github, Jenkins, GitHub Actions</li>
					<li>AWS & AWS Serverless</li>
					<li>Team Collaboration: JIRA & Slack</li>
				</ul>
			</div>
		</>
	)
}

export default Skills
