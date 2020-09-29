import { call, takeEvery, put, fork, delay } from 'redux-saga/effects';
import axios from 'axios'
import * as actions from '../actions'

function* fetchTodos() {
    yield put(actions.setLoading(true));
    yield delay(1000);
    yield put(actions.setLoading(false));
    const res = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos'); 
    // axios.get('https://jsonplaceholder.typicode.com/users') 
    yield put(actions.setTodos(res.data));
}

function* todos() {
    yield takeEvery('FETCH_TODOS', fetchTodos);
}

export default todos