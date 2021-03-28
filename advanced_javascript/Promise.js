/*
before promise, we use callback

callback pyramid

promise is same purpose of callback
*/

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('Error, it broke')
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'IS it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values)
})

promise
    .then(result => result + '!')
    .then(result2 => result + '?')
    .catch(err => console.log(err))
    .then(result3 => console.log(result3 + '!!'))


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]


Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch((err) => console.log('error', err))