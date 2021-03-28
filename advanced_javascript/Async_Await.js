/**
kind of syntatic sugar
 */

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}
fetchUsers()

//previous version of Promise
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]

const getData = async function() {
    try {
        const [ users, todos, posts ] = await Promise.all(urls.map(url => {
            fetch(url).then(res => res.json())
        }))
        console.log(users)
        console.log(todos)
        console.log(posts)
    } catch (error) {
        console.log('oops')
    }
}