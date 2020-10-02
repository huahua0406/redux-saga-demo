import * as actionTypes from '../constants';

const initialState = {
    loading: false,
    list: []
}

export default function todos(state = initialState, action) {
	switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...initialState,
                loading: action.flag
            }
        case actionTypes.SET_TODOS:
            return {
                ...initialState,
                list: action.data
            }
		default:
			return state
	}
}
