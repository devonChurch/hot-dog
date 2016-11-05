import {OPEN_CREATE_DIALOG, CLOSE_CREATE_DIALOG, SUBMIT_CREATE_DIALOG, TOGGLE_FEEDBACK_MINI_MENU} from './actions';
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

		case SUBMIT_CREATE_DIALOG:

			return (() => {

				const {topicKey} = state.createState;
				const feedback = {
					badge: 'cake',
					name: 'Mr Potato',
					stars: 0,
					isOptionsActive: false,
					text: data
				};

				return {
					...state,
					topicsState: [...state.topicsState].map((items, i) => {
						const clone = [...items];
						if (topicKey === i) clone.push(feedback);
						return clone;
					})
				}

			})();

		// case TOGGLE_FEEDBACK_MINI_MENU:
		//
		// 	return (() => {
		//
		//
		//
		// 		return {
		// 			..state,
		//
		// 		}
		//
		// 	})();

		default:
			return state;

	}

};

export default reducer;
