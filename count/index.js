const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
	TableName: process.env.TABLE_NAME,
	Key: { 'ID': 'homePage' },
	UpdateExpression: 'set visitorCount = visitorCount + :inc',
	ExpressionAttributeValues: { ':inc': 1 },
	ReturnValues: 'UPDATED_NEW'
}

// function getOrigin(event) {

// 	let origin = 'https://resume.scottsanford.io'

//     if (event.headers !== null && event.headers !== undefined && event.headers['origin'] !== undefined) {

//             console.log('Received origin header: ' + event.headers.origin)

//             if(event.headers.origin === 'http://localhost:3000') {
//                 origin = event.headers.origin
//             }
//     } else {
//         console.log('No origin header received')
//     }

// 	return origin
// }

exports.count = async function (event) {
	// console.log('event', event)
	// const origin = getOrigin(event)

	try {
		const response = await documentClient.update(params).promise()

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
			body: JSON.stringify(response)
		}

	} catch (error) {
		return error
	}
}
