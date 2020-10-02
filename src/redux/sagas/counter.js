import { put, delay } from 'redux-saga/effects'
import { takeEvery, takeLatest} from 'redux-saga/effects'

function* incrementAsync() {
	// 延迟 1s 在执行 + 1操作
	yield delay(1000)
	yield put({ type: 'INCREMENT' })
}

function* incrementAsyncOnce(){
    // 模拟异步
    yield delay(1000);
    yield put({ type: 'INCREMENT' })
}

export default function* counterSaga() {
    console.log('counter sage running')
    // 监听一个type为 'INCREMENT_ASYNC' 的action的执行，直到等到这个Action被触发，才会接着执行下面的 yield fork(fetchData) 语句
	// while (true) {
	// 	yield take('INCREMENT_ASYNC')
	// 	yield fork(incrementAsync)
	// }

	// 下面的写法与上面的写法上等效
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    
    // 如果使用 takeLatest 只会执行最后一次
    yield takeLatest('INCREMENT_ASYNC_ONCE', incrementAsyncOnce)
}
