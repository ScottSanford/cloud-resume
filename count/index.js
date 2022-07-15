const { UpdateItemCommand } = require('@aws-sdk/client-dynamodb')
const { unmarshall } = require('@aws-sdk/util-dynamodb')
const getOrigin = require('./get-origin')
const { dynamoDBClient } = require('./ddb-client')

const params = {
	TableName: process.env.TABLE_NAME,
	Key: { 'ID': { S: 'homePage' } },
	UpdateExpression: 'SET visitorCount = visitorCount + :inc',
	ExpressionAttributeValues: { ':inc': { N: '1' } },
	ReturnValues: 'UPDATED_NEW'
}

exports.count = async function (event) {

	try {
		const command = new UpdateItemCommand(params)
		const response = await dynamoDBClient.send(command)

		const { $metadata, Attributes } = response

		return {
			statusCode: $metadata.httpStatusCode,
			headers: {
				'Access-Control-Allow-Origin': getOrigin(event),
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
			body: JSON.stringify(unmarshall(Attributes))
		}

	} catch (error) {
		return {
			errorType: error.name,
			requestId: error.$metadata.requestId,
			statusCode: error.$metadata.httpStatusCode,
			message: error.message
		}
	}
}
