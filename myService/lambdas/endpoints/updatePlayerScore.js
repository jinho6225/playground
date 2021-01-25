const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async event => {
    console.log(event, 'event')

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'missing the Id from the path'})
    }

    let ID = event.pathParameters.ID
    const { Score } = JSON.parse(event.body)

    const res = await Dynamo.update({
        tableName,
        primaryKey: 'ID',
        primaryKeyValue: ID,
        updateKey: "Score",
        updateValue: Score,
    })
    return Responses._200({})
}