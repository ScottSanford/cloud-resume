const lambda = require('../index')
const { dynamoDBClient } = require('../ddb-client')

jest.mock('../ddb-client')
jest.mock('../get-origin', () => {
	return jest.fn().mockImplementation(() => {
		return 'testorigin'
	})
})

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
		dynamoDBClient.send.mockResolvedValue(ddbSuccessMockValue)
	})

	it('should return a 200 status code', async () => {

		const response = await lambda.count()
		expect(response.statusCode).toBe(200)
	})

	it('should return a visitor count of 100', async () => {

		const response = await lambda.count()
		const body = JSON.parse(response.body)
		expect(body.visitorCount).toBe(100)
	})

	it('should return an error if the call fails', async () => {
		dynamoDBClient.send.mockRejectedValue(ddbFailedMockValue)
		const response = await lambda.count()

		expect(response.errorType).toBe('ValidationException')
		expect(response.statusCode).toBe(400)
		expect(response.requestId).toBe('FO7LSETO465K4IKVG5I8Q5JQQ7VV4KQNSO5AEMVJF66Q9ASUAAJG')
		expect(response.message).toContain('The provided expression')
	})
})
