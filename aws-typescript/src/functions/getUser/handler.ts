import 'source-map-support/register';

import type { APIGatewayProxyHandler } from "aws-lambda"
import { middyfy } from '@libs/lambda';

const Responses = require('../../common/API_Responses')
const Dynamo = require('../../common/Dynamo')

const tableName: string = process.env.tableName

const getUser: APIGatewayProxyHandler = async (event, context, callback) => {
  if (!event['Details'].Parameters || !event['Details'].Parameters.phoneNumber) {
      return callback(null, Responses._400({message: 'missing the phoneNumber from the path'}))
  }
  let phoneNumber: string = event['Details'].Parameters.phoneNumber.substring(2)

  const user = await Dynamo.get(phoneNumber, tableName).catch(err => {
      console.log('error in Dynamo Get', err);
      return;
  })
  
  if (!user) {
      return callback(null, Responses._400({message: 'no User by phoneNumber'}))
  }

  user.statusCode = 200
  console.log(user, 'user')
  return callback(null, user)
}

export const main = middyfy(getUser);
