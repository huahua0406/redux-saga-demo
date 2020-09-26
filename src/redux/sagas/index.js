import { all } from 'redux-saga/effects'
import counter from './counter'
import todos from './todos'
import rootUsers from './users'

export default function* rootSaga() {
    // 同时并发多个
	yield all([
        counter(),
        todos(),
        ...rootUsers
    ])
}
