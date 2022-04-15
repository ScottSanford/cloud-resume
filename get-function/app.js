const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
	TableName: 'cloud-resume-challenge',
	Key: {
		'ID': 'homePage'
	}
}

exports.getHandler = async function () {
	try {
		const response = await documentClient.get(params).promise()
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
			body: JSON.stringify(error)
		}
	}
}
