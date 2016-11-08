import deepFreeze from 'deep-freeze';
import {OPEN_CREATE_DIALOG, CLOSE_CREATE_DIALOG, SUBMIT_CREATE_DIALOG, TOGGLE_FEEDBACK_MINI_MENU} from './actions';
import * as defaultState from './default';

// state, action
const reducer = (state = defaultState, {type, data = {}}) => {

	deepFreeze(state);

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
					rating: 0,
					text: data,
					isRatingToggled: false,
					isOptionsActive: false
				};

				return {
					...state,
					topicsState: [...state.topicsState].map((item, i) => {
						const clone = [...item];
						if (topicKey === i) clone.push(feedback);
						return clone;
					})
				};

			})();

		case TOGGLE_FEEDBACK_MINI_MENU:

			return (() => {

				const mapFeedbackItem = (item, i) => {
					return data.feedbackKey === i ? {...item, isOptionsActive: !item.isOptionsActive} : item;
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? item.map(mapFeedbackItem) : item;
				};

				return {
					...state,
					feedbackState: [...state.feedbackState].map(mapFeedbackList)
				};

			})();

		default:
			return state;

	}

};

export default reducer;
