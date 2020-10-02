import * as actionTypes from '../constants'

export const increment = () => {
	return {
		type: actionTypes.INCREMENT
	}
}

export const decrement = () => {
	return {
		type: actionTypes.DECREMENT
	}
}

export const incrementAsync = () => {
	return {
		type: actionTypes.INCREMENT_ASYNC
	}
}

export const incrementAsyncOnce = () => {
	return {
		type: actionTypes.INCREMENT_ASYNC_ONCE
	}
}

export const setLoading = (flag) => {
	return {
		type: actionTypes.SET_LOADING,
		flag
	}
}

export const fetchRequest = () => {
	return {
		type: actionTypes.FETCH_REQUEST
	}
}


export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data
    }
}

export const fetchFail = () => {
    return {
        type: actionTypes.FETCH_FAIL
    }
}



export const setTodos = (data) => {
	return {
		type: actionTypes.SET_TODOS,
		data
	}
}

export const fetchTodos = () => {
	return {
		type: actionTypes.FETCH_TODOS
	}
}
