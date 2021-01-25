const Responses = require('../common/API_Responses')

exports.handler = async event => {
    console.log(event, 'event')

    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'missing the Id from the path'})
    }

    let ID = event.pathParameters.ID

    if (data[ID]) {
        return Responses._200(data[ID])
    }
    return Responses._400({message: 'no ID in data'})

}

const data = {
    123: {name: 'Jinho', age: 33, jon: 'engineer'},
    456: {name: 'Jiyeon', age: 31, jon: 'RN'},
    789: {name: 'Hogeon', age: 1, jon: 'baby'}
}