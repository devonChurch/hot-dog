import deepFreeze from 'deep-freeze';
import {OPEN_CREATE_DIALOG, CLOSE_CREATE_DIALOG, UPDATE_CREATE_TEXT, SUBMIT_CREATE_DIALOG, TOGGLE_FEEDBACK_MINI_MENU, TOGGLE_FEEDBACK_RATING, REMOVE_FEEDBACK} from './actions';
import * as defaultState from './default';

// state, action
const reducer = (state = defaultState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case OPEN_CREATE_DIALOG:

			return (() => {

				const {color, topicKey, feedbackKey, text} = data;

				return {
					...state,
					createState: {
						isActive: true,
						color: color,
						topicKey: topicKey,
						feedbackKey: feedbackKey,
						text
					}
				};

			})();

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

				const {topicKey, feedbackKey, text} = state.createState;

				switch (feedbackKey) {

					case null:

						return (() => {

							console.log('creating new feedback item');

							const feedback = {
								badge: 'cake',
								name: 'Mr Potato',
								rating: 0,
								text,
								isRatingToggled: false,
								isOptionsActive: false
							};

							const mapFeedbackList = (item, i) => {
								return topicKey === i ? [...item, feedback] : item;
							};

							return {
								...state,
								feedbackState: [...state.feedbackState].map(mapFeedbackList)
							};

						})();

					default:

						return (() => {

							console.log('editing current feedback item');

							const mapFeedbackItem = (item, i) => {
								return feedbackKey === i ? {...item, text} : item;
							};

							const mapFeedbackList = (item, i) => {
								return topicKey === i ? item.map(mapFeedbackItem) : item;
							};

							return {
								...state,
								feedbackState: [...state.feedbackState].map(mapFeedbackList)
							};

						})();

				}

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
