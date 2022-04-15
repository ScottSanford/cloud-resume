const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
	TableName: 'cloud-resume-challenge',
	Key: { 'ID': 'homePage' },
	UpdateExpression: 'set visitorCount = visitorCount + :inc',
	ExpressionAttributeValues: { ':inc': 1 },
	ReturnValues: 'UPDATED_NEW'
}

exports.putHandler = async function () {
	try {
		const response = await documentClient.update(params).promise()

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': '*',
				'Access-Control-Allow-Headers': '*',
			},
			body: response
		}

	} catch (error) {
		return {
			statusCode: 500,
			body: error
		}
	}
}
