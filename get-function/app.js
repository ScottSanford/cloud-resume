const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
	TableName: 'CloudResumeTable',
	Key: { 'ID': 'homePage' },
	UpdateExpression: 'set visitorCount = visitorCount + :inc',
	ExpressionAttributeValues: { ':inc': 1 },
	ReturnValues: 'UPDATED_NEW'
}

exports.getHandler = async function () {
	try {
		const response = await documentClient.update(params).promise()

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': '*',
				'Access-Control-Allow-Headers': '*',
			},
			body: JSON.stringify(response)
		}

	} catch (error) {
		return {
			statusCode: 500,
			body: error
		}
	}
}
