const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async (event, context, cb) => {

    if (!event['Details']['Parameters'] || !event['Details']['Parameters'].ID) {
        return Responses._400({message: 'missing the Id from the path'})
    }

    let ID = event['Details']['Parameters'].ID.substring(2)

    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null
    })
    
    if (!user) {
        return Responses._400({message: 'no User by ID'})
    }
    user.statusCode = 200;
    return cb(null, user)
}