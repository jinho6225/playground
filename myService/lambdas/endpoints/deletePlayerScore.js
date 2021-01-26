const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async event => {
    console.log(event, 'event')

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'missing the Id from the path'})
    }

    let ID = event.pathParameters.ID

    const res = await Dynamo.delete(ID, tableName).catch(err => {
        console.log('error in Dynamo Delete', err);
        return null
    })
    console.log(res, 'res')
    return Responses._200({ message: 'Score Deleted Successfully'})
}