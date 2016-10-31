import {ACTIVATE_FEEDBACK_DIALOG} from './actions';
import * as defaultState from './default';

// state, action
const reducer = (state = defaultState, {type, data}) => {

	switch (type) {

		case ACTIVATE_FEEDBACK_DIALOG:
			return {
				...state,
				feedbackDialogState: {
					active: true,
					topicKey: data
				}
			};

		default:
			return state;

	}

};

export default reducer;
