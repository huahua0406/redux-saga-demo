const initialState = {
    loading: false,
    list: []
}

export default function todos(state = initialState, action) {
	switch (action.type) {
        case 'SET_LOADING':
            return {
                ...initialState,
                loading: action.flag
            }
        case 'SET_TODOS':
            return {
                ...initialState,
                list: action.data
            }
		default:
			return state
	}
}
