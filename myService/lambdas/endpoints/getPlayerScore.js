const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async event => {
    console.log(event, 'event')

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'missing the Id from the path'})
    }

    let ID = event.pathParameters.ID

    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null
    })
    console.log(user, 'user')
    
    if (!user) {
        return Responses._400({message: 'no User by ID'})
    }

    return Responses._200({user})
}