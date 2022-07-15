module.exports = function getOrigin(event) {

	let origin = 'https://resume.scottsanford.io'

	if (!event.headers && !event.headers.origin) {
		return origin
	}

	if(event.headers.origin === 'http://localhost:3000'
		|| event.headers.origin === 'https://testresume.scottsanford.io'
	) {
		origin = event.headers.origin
	}

	return origin
}
