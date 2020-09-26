import { put, call, take, fork } from 'redux-saga/effects'
import { takeEvery, takeLatest } from 'redux-saga/effects'

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function* incrementAsync() {
	// 延迟 1s 在执行 + 1操作
	yield call(delay, 1000)
	yield put({ type: 'INCREMENT_ASYNC' })
}

export default function* counterSaga() {
    console.log('counter sage running')
    // 监听一个type为 'FETCH_REQUESTED' 的action的执行，直到等到这个Action被触发，才会接着执行下面的 yield fork(fetchData) 语句
	// while (true) {
	// 	yield take('INCREMENT_ASYNC')
	// 	yield fork(incrementAsync)
	// }

	// 下面的写法与上面的写法上等效
	yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}