import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { count, LambdaError } from '../index'
import { dynamoDBClient } from '../ddb-client'

jest.mock('../ddb-client')
jest.mock('../get-origin', () => {
	return jest.fn().mockImplementation(() => {
		return 'testorigin'
	})
})

const mockedDynamoDBClient = dynamoDBClient as jest.Mocked<typeof dynamoDBClient>

const eventMock = {} as APIGatewayEvent

const ddbSuccessMockValue = {
	$metadata: {
		httpStatusCode: 200
	},
	Attributes: {
		visitorCount: {N: 100}
	}
}

const ddbFailedMockValue = {
	name: 'ValidationException',
	$metadata: {
	  httpStatusCode: 400,
	  requestId: 'FO7LSETO465K4IKVG5I8Q5JQQ7VV4KQNSO5AEMVJF66Q9ASUAAJG',
	  attempts: 1,
	  totalRetryDelay: 0
	},
	message: 'The provided expression refers to an attribute that does not exist in the item'
}

describe('Lambda Function - Count', () => {

	beforeEach(() => {
		mockedDynamoDBClient.send.mockResolvedValue(ddbSuccessMockValue as never)
	})

	it('should return a 200 status code', async () => {

		const response = await count(eventMock)
		expect(response.statusCode).toBe(200)
	})

	it('should return a visitor count of 100', async () => {

		const response = await count(eventMock) as APIGatewayProxyResult
		const body = JSON.parse(response.body)
		expect(body.visitorCount).toBe(100)
	})

	it('should return an error if the call fails', async () => {
		mockedDynamoDBClient.send.mockRejectedValue(ddbFailedMockValue as never)
		const response = await count(eventMock) as LambdaError

		expect(response.errorType).toBe('ValidationException')
		expect(response.statusCode).toBe(400)
		expect(response.requestId).toBe('FO7LSETO465K4IKVG5I8Q5JQQ7VV4KQNSO5AEMVJF66Q9ASUAAJG')
		expect(response.message).toContain('The provided expression')
	})
})
