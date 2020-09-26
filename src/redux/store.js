import { createStore, applyMiddleware } from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware() // 创建了一个saga中间件实例
const middlewares = [sagaMiddleware, loggerMiddleware]; // 处理多个saga
// 下边这两行代码和下面一行创建store的方式是一样的
// const createStoreWithMiddleware = applyMiddleware(middlewares)(createStore)
// const store = createStoreWithMiddleware(rootReducer)
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// 运行sage
sagaMiddleware.run(rootSaga)

export default store;
