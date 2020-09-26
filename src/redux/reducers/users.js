export default function todos(state = [], action) {
	switch (action.type) {
		case 'FETCH_USERS':
			return state.concat([action.data])
		default:
			return state
	}
}