import 'source-map-support/register';

import type { APIGatewayProxyHandler } from "aws-lambda"
import { middyfy } from '@libs/lambda';

const Responses = require('../../common/API_Responses')
const Dynamo = require('../../common/Dynamo')

// import schema from './schema';
const tableName: string = process.env.tableName

const getUser: APIGatewayProxyHandler = async (event) => {
  console.log(event, 'event')

  if (!event.pathParameters || !event.pathParameters.phoneNumber) {
      return Responses._400({message: 'missing the phoneNumber from the path'})
  }

  let phoneNumber = event.pathParameters.phoneNumber

  const user = await Dynamo.get(phoneNumber, tableName).catch(err => {
      console.log('error in Dynamo Get', err);
      return null
  })
  
  if (!user) {
      return Responses._400({message: 'no User by phoneNumber'})
  }
  return Responses._200({user})
}

export const main = middyfy(getUser);
