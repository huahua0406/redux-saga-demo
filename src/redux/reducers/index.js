import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import users from './users'

export default combineReducers({
	todos,
    counter,
    users
})
