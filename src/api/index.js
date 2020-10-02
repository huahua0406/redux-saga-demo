import request from '../utils/request';

// axios.get('https://jsonplaceholder.typicode.com/users')
export function gerUsers(){
    return request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
}