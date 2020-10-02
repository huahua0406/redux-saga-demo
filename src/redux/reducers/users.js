import * as actionTypes from '../constants';

export default function todos(state = [], action) {
	switch (action.type) {
		case actionTypes.FETCH_SUCCESS:
            return state.concat(action.data)
        case actionTypes.FETCH_FAIL:
            // Todo:
            return state
		default:
			return state
	}
}