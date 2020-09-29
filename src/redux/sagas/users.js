import { call, takeEvery, takeLatest, put, fork, delay } from 'redux-saga/effects';
import axios from 'axios'

// import Api from '...'
// https://github.com/redux-saga/redux-saga
// Api.user

// put：你就认为put就等于 dispatch 就可以了
// call：可以理解为实行一个异步函数,是阻塞型的，只有运行完后面的函数，才会继续往下
function* fetchUsers() {
	try {
        // 需要执行异步的时候，直接调用 call
        const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users') // axios.get('https://jsonplaceholder.typicode.com/users')
		yield put({ type: 'FETCH_USERS', data: users })
	} catch (e) {
		yield put({ type: 'FETCH_FAIL', errors: e })
	}
}


function* user() {
    console.log('FETCH_USERS')
    // 监听 FETCH_USERS action
    yield takeEvery('FETCH_USERS', fetchUsers);
    // yield takeLatest('FETCH_USERS', fetchUsers);
}
 
// 使用数组导出
const rootUser = [
    user(),
    // todo: a(), b(), c()
]
  
export default rootUser;