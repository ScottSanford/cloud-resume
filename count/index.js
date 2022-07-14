const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
	TableName: process.env.TABLE_NAME,
	Key: { 'ID': 'homePage' },
	UpdateExpression: 'set visitorCount = visitorCount + :inc',
	ExpressionAttributeValues: { ':inc': 1 },
	ReturnValues: 'UPDATED_NEW'
}

function getOrigin(event) {

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

exports.count = async function (event) {

	try {
		const response = await documentClient.update(params).promise()

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': getOrigin(event),
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
			body: JSON.stringify(response)
		}

	} catch (error) {
		return error
	}
}
