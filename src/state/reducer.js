import {ACTIVATE_FEEDBACK_DIALOG} from './actions';
import * as defaultState from './default';

// state, action
const reducer = (state = defaultState, {type, data}) => {

	switch (type) {

		case ACTIVATE_FEEDBACK_DIALOG:
			return {
				...state,
				createState: {
					isActive: true,
					color: data.color,
					topicKey: data.key
				}
			};

		default:
			return state;

	}

};

export default reducer;
