import deepFreeze from 'deep-freeze';
import {OPEN_CREATE_DIALOG, CLOSE_CREATE_DIALOG, UPDATE_CREATE_TEXT, SUBMIT_CREATE_DIALOG, TOGGLE_FEEDBACK_MINI_MENU, TOGGLE_FEEDBACK_RATING, REMOVE_FEEDBACK} from './actions';
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
					topicKey: data.topicKey
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

		case UPDATE_CREATE_TEXT:

			return {
				...state,
				createState: {
					...state.createState,
					text: data
				}
			};

		case SUBMIT_CREATE_DIALOG:

			return (() => {

				const {topicKey, text} = state.createState;

				console.log('SUBMIT_CREATE_DIALOG', text);

				const feedback = {
					badge: 'cake',
					name: 'Mr Potato',
					rating: 0,
					text,
					isRatingToggled: false,
					isOptionsActive: false
				};

				const mapFeedbackList = (item, i) => {
					return topicKey === i ? [...item, feedback] : [...item];
				};

				return {
					...state,
					feedbackState: [...state.feedbackState].map(mapFeedbackList)
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

		case TOGGLE_FEEDBACK_RATING:

			return (() => {

				const toggleRating = (item) => {
					const isRatingToggled = !item.isRatingToggled;
					const rating = isRatingToggled ? item.rating + 1 : item.rating - 1;
					return {...item, isRatingToggled, rating};
				};

				const mapFeedbackItem = (item, i) => {
					return data.feedbackKey === i ? toggleRating(item) : item;
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? item.map(mapFeedbackItem) : item;
				};

				return {
					...state,
					feedbackState: [...state.feedbackState].map(mapFeedbackList)
				};

			})();

		case REMOVE_FEEDBACK:

			return (() => {

				const removeFeedback = (item, i) => {
					return [...item.slice(0, i), ...item.slice(i + 1)];
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? removeFeedback(item, data.feedbackKey) : item;
				};

				return {
					...state,
					feedbackState: [...state.feedbackState].map(mapFeedbackList)
				}

			})();

		default:
			return state;

	}

};

export default reducer;
