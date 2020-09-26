export default function todos(state = [], action) {
	switch (action.type) {
		case 'FETCH_TODOS':
			return state.concat([action.data])
		default:
			return state
	}
}
