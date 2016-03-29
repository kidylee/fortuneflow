import _ from 'lodash'

const view = (state, action) => {
	switch (action.type) {
		case 'ADD_LAYOUT_ITEM':
			return {
        channel: action.channel
      }
		default:
			return state
	}
}


const layout = (state=[], action) => {
	switch (action.type) {
		case 'ADD_LAYOUT_ITEM':
      let newView = view(undefined, action)

      if(_.some(state,newView)){
        return [...state]
      }
      else{
  			return [
  				...state, newView

  			]
      }
		default:
			return state
}
}
export default layout
