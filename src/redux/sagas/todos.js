import { call, takeEvery, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios'


function* fetchTodos() {
    const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos'); // axios.get('https://jsonplaceholder.typicode.com/users')      
    console.log(todos);
}

function* todos() {
    yield takeEvery('FETCH_TODOS', fetchTodos);
}

export default todos