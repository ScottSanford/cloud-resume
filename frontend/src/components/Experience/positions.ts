import mediaflyLogo from '../../img/mediafly-logo.jpeg'
import thinkMarketsLogo from '../../img/thinkmarkets-logo.jpeg'

export interface Position {
	title: string
	company: string
	companyImage: string
	date: string
	description: string[]
}

export const positions: Position[] = [
	{
		title: 'Senior Software Engineer',
		company: 'Mediafly',
		companyImage: mediaflyLogo,
		date: 'Feb 2021 - Present',
		description: [
			'Tech: React, TypeScript, AngularJS, CSS Modules, Enzyme, Terraform'
		]
	},
	{
		title: 'Frontend Engineer - Tech Lead',
		company: 'ThinkMarkets',
		companyImage: thinkMarketsLogo,
		date: 'Jun 2020 - Feb 2021',
		description: [
			'Tech: React, TypeScript, Redux, React Testing Library, CSS Modules, AWS Amplify, ChartIQ'
		]
	},
	{
		title: 'Senior Software Engineer - Core Product Team, Frontend',
		company: 'Mediafly',
		companyImage: mediaflyLogo,
		date: 'Mar 2020 - Apr 2021',
		description: [
			'Reduced product app code by 20% by restructuring app architecture, removing unnecessary code, introducing ESLint and TypeScript, utilizing self-contained modules with ES6 best practices; resulting in 95% file sizes to less than 300 lines',
			'Mentored new teammates from acquisition in adopting methodologies and best practices, reducing build cycles from months to weeks, increasing workflow efficiency by allowing developers to work across different branches',
			'Coordinated moderate complex features utilizing self-contained modules while seamlessly integrating with other features, resulting in excellent code quality and on-time delivery'
		]
	},
	{
		title: 'Software Engineer',
		company: 'Mediafly',
		companyImage: mediaflyLogo,
		date: 'Jan 2018 - Fed 2020',
		description: [
			'Authored and presented a 30+ page JavaScript Style Guide to the entire Product Team, resulting in standard documentation used across new and existing team members',
			'Facilitated and engineered a highly complex feature allowing sales reps to create templates from documents or presentations; involved multiple products, RESTful APIs, 3rd party integrations, extensive testing; used heavily by customers and company’s sales team',
		]
	},
	{
		title: 'Solutions Consultant',
		company: 'Mediafly',
		companyImage: mediaflyLogo,
		date: 'Jun 2016 - Dec 2017',
		description: [
			'Guided Sales Department in customer meetings about technical matters about the company’s Extension platform',
			'Captured and implemented designs created by the UI team, added new functionality, enhancements, and improvements to Extensions platform',
		]
	},
	{
		title: 'Marketing Technologist - Web Development',
		company: 'Mediafly',
		companyImage: mediaflyLogo,
		date: 'Jun 2014 - May 2016',
		description: [
			'Created and implemented engaging sales web applications increasing Sales Department satisfaction and efficiency',
			'Promoted to Marketing Technologist from Intern for good work ethic and my ability to achieve software excellence',
		]
	},
]
