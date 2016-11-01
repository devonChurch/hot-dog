import {OPEN_CREATE_DIALOG, CLOSE_CREATE_DIALOG} from './actions';
import * as defaultState from './default';

// state, action
const reducer = (state = defaultState, {type, data = {}}) => {

	switch (type) {

		case OPEN_CREATE_DIALOG:
			return {
				...state,
				createState: {
					isActive: true,
					color: data.color,
					topicKey: data.key
				}
			};

		case CLOSE_CREATE_DIALOG:
			return {
				...state,
				createState: {
					...state.createState,
					isActive: false
				}
			};

		default:
			return state;

	}

};

export default reducer;
