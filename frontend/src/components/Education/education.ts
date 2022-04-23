import lakeForestCollegeLogo from '../../img/lake-forest-college.jpeg'

export interface College {
	title: string
	degree: string
	major: string
	image: string
	date: string
	activities: string[]
}

export const education: College = {
	title: 'Lake Forest College',
	degree: 'Bachelor of Science',
	major: 'Business',
	image: lakeForestCollegeLogo,
	date: '2010 - 2014',
	activities: [
		'Lambda Chi Alpha Fraternity',
		'Sports Photographer',
		'Resident Assistent'
	]
}
