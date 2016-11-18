import deepFreeze from 'deep-freeze';
import action from './action';
import * as defaultState from './default';

// const loginReducer = (state = defaultState, {type, data = {}}) => {
//
// 	switch (type) {
//
// 		case 'CLOSE_LOGIN_DIALOG':
//
// 			return {
// 				...state,
// 				createState: {
// 					...state.loginState,
// 					isActive: false
// 				}
// 			};
//
// 		default:
// 			return state;
//
// 	}
//
// };

// state, action
const reducer = (state = defaultState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case action.CLOSE_LOGIN_DIALOG:

			return {
				...state,
				loginState: {
					...state.loginState,
					isActive: false
				}
			};

		case action.UPDATE_LOGIN_NAME:
			return {
				...state,
				loginState: {
					...state.loginState,
					name: data
				}
			};

		case action.UPDATE_LOGIN_ICON:
			return {
				...state,
				loginState: {
					...state.loginState,
					badge: data
				}
			};

		case action.SUBMIT_LOGIN_DIALOG:
			return {
				...state,
				userState: {
					...state.userState,
					thisUser: {
						name: state.loginState.name,
						badge: state.loginState.badge
					}
				}
			};

		case action.OPEN_CREATE_DIALOG:

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

		case action.CLOSE_CREATE_DIALOG:

			return {
				...state,
				createState: {
					...state.createState,
					isActive: false
				}
			};

		case action.UPDATE_CREATE_TEXT:

			return {
				...state,
				createState: {
					...state.createState,
					text: data
				}
			};

		case action.SUBMIT_CREATE_DIALOG:

			return (() => {

				const {topicKey, feedbackKey, text} = state.createState;

				switch (feedbackKey) {

					case null:

						return (() => {

							const {thisUser} = state.userState;

							const feedback = {
								badge: thisUser.badge,
								name: thisUser.name,
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

		case action.TOGGLE_FEEDBACK_MINI_MENU:

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

		case action.TOGGLE_FEEDBACK_RATING:

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

		case action.REMOVE_FEEDBACK:

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
// export {loginReducer};
