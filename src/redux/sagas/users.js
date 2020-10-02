import { call, takeEvery, put } from 'redux-saga/effects';
// import axios from 'axios';

import * as Api from '../../api';

// put：你就认为put就等于 dispatch 就可以了
// call：可以理解为实行一个异步函数,是阻塞型的，只有运行完后面的函数，才会继续往下
function* fetchRequest() {
	try {
        // 需要执行异步的时候，直接调用 call
        // const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
        const res = yield call(Api.gerUsers, {})
		yield put({ type: 'FETCH_SUCCESS', data: res.data })
	} catch (err) {
        console.log('err: %o', err)
		yield put({ type: 'FETCH_FAIL', errors: err })
	}
}


function* watchFetchData() {
    console.log('FETCH_REQUEST')
    // 监听 FETCH_REQUEST action
    yield takeEvery('FETCH_REQUEST', fetchRequest);
    // yield takeLatest('FETCH_REQUEST', fetchRequest);
}
 
// 使用数组导出
const rootUser = [
    watchFetchData()
]
  
export default rootUser;