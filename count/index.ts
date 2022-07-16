import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import {
  UpdateItemCommand,
  UpdateItemCommandInput,
} from '@aws-sdk/client-dynamodb'
import { unmarshall } from '@aws-sdk/util-dynamodb'
import getOrigin from './get-origin'
import { dynamoDBClient } from './ddb-client'

const params: UpdateItemCommandInput = {
  TableName: process.env.TABLE_NAME,
  Key: { ID: { S: 'homePage' } },
  UpdateExpression: 'SET visitorCount = visitorCount + :inc',
  ExpressionAttributeValues: { ':inc': { N: '1' } },
  ReturnValues: 'UPDATED_NEW',
}

export interface LambdaError {
  errorType: string
  requestId: string
  statusCode: number
  message: string
}

export const count = async function (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult | LambdaError> {
  try {
    const command = new UpdateItemCommand(params)
    const response = await dynamoDBClient.send(command)

    const { $metadata, Attributes } = response

    return {
      statusCode: $metadata.httpStatusCode || 200,
      headers: {
        'Access-Control-Allow-Origin': getOrigin(event),
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(unmarshall(Attributes!)),
    }
  } catch (error: any) {
    return {
      errorType: error.name,
      requestId: error.$metadata.requestId,
      statusCode: error.$metadata.httpStatusCode,
      message: error.message,
    }
  }
}
