const view = (state, action) => {
	switch (action.type) {
		case 'ADD_LAYOUT_ITEM':
			return action.channel
		default:
			return state
	}
}


const layout = (state=[], action) => {
	switch (action.type) {
		case 'ADD_LAYOUT_ITEM':
			return [
				...state,
				view(undefined, action)
			]
		default:
			return state
}
}
export default layout