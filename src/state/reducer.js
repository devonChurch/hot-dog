import deepFreeze from 'deep-freeze';
import action from './action';
import * as defaultState from './default';

const loginReducer = (state = defaultState.loginState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case action.OPEN_LOGIN_DIALOG:
			return {
				...state,
				isActive: true
			};

		case action.CLOSE_LOGIN_DIALOG:
			return {
				...state,
				isActive: false
			};

		case action.UPDATE_LOGIN_NAME:
			return {
				...state,
				name: data
			};

		case action.UPDATE_LOGIN_ICON:
			return {
				...state,
				badge: data
			};

		case action.RESET_LOGIN_DETAILS:
			return {
				...state,
				name: data.name,
				badge: data.badge
			};

		case action.SUBMIT_LOGIN_DIALOG:
			return {
				...state,
				isInitialised: true
			};

			// VALIDATION!
			// Close dialog if validate === true

		default:
			return state;

	}

};

const thisUserReducer = (state = defaultState.thisUserState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case action.UPDATE_THIS_USER_DETAILS:
			return {
				...state,
				userId: data.userId,
				name: data.name,
				badge: data.badge
			};

		case action.TOGGLE_THIS_USER_OPTIONS:
			return {
				...state,
				isOptionsActive: data
			};

		default:
			return state;

	}

};

const otherUserReducer = (state = defaultState.otherUserState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		default:
			return state;

	}

};

const topicReducer = (state = defaultState.topicState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		default:
			return state;

	}

};

const createReducer = (state = defaultState.createState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case action.OPEN_CREATE_DIALOG:

			return (() => {

				const {color, topicKey, feedbackKey, text} = data;

				return {
					...state,
					isActive: true,
					color: color,
					topicKey: topicKey,
					feedbackKey: feedbackKey,
					text
				};

			})();

		case action.CLOSE_CREATE_DIALOG:

			return {
				...state,
				isActive: false
			};

		case action.TOGGLE_CREATE_OPTIONS:

			return {
				...state,
				isOptionsActive: data
			};

		case action.UPDATE_CREATE_TEXT:

			return {
				...state,
				text: data
			};

		case action.SUBMIT_CREATE_DIALOG:

			// VALIDATION
			// CLOSE

			return state;

		default:
			return state;

	}

};

const feedbackReducer = (state = defaultState.feedbackState, {type, data = {}}) => {

	deepFreeze(state);

	switch (type) {

		case action.TOGGLE_FEEDBACK_OPTIONS:

			return (() => {

				const toggleIsOpen = (item) => {
					return {...item, isOptionsActive: data.isOptionsActive};
				};

				const mapFeedbackItem = (item, i) => {
					return data.feedbackKey === i ? toggleIsOpen(item) : item;
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? item.map(mapFeedbackItem) : item;
				};

				return state.map(mapFeedbackList);

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

				return state.map(mapFeedbackList);

			})();

		case action.HIDE_FEEDBACK:

			return (() => {

				const hideFeedback = (item) => {
					return {...item, isFeedbackHidden: true};
				};

				const mapFeedbackItem = (item, i) => {
					return data.feedbackKey === i ? hideFeedback(item) : item;
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? item.map(mapFeedbackItem) : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.REMOVE_FEEDBACK:

			return (() => {

				const removeFeedback = (item, i) => {
					return [...item.slice(0, i), ...item.slice(i + 1)];
				};

				const mapFeedbackList = (item, i) => {
					return data.topicKey === i ? removeFeedback(item, data.feedbackKey) : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.EDIT_FEEDBACK:

			return (() => {

				const {topicKey, feedbackKey, text, lastEdit} = data;

				const mapFeedbackItem = (item, i) => {
					return feedbackKey === i ? {...item, text, lastEdit} : item;
				};

				const mapFeedbackList = (item, i) => {
					return topicKey === i ? item.map(mapFeedbackItem) : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.ADD_FEEDBACK:

			return (() => {

				const {topicKey, text, badge, name, userId} = data;

				const feedback = {
					badge,
					name,
					userId,
					rating: 0,
					text,
					isRatingToggled: false,
					// isOptionsActive: false,
					lastEdit: false
				};

				const mapFeedbackList = (item, i) => {
					return topicKey === i ? [...item, feedback] : item;
				};

				return state.map(mapFeedbackList);

			})();

			case action.UPDATE_THIS_USER_FEEDBACK:

				return (() => {

					const updateUserFeedback = (item) => {
						return {
							...item,
							badge: data.badge,
							name: data.name
						}
					};

					const mapFeedbackItem = (item) => {
						return data.userId === item.userId ? updateUserFeedback(item) : item;
					};

					const mapFeedbackList = (item) => {
						return item.map(mapFeedbackItem);
					};

					return state.map(mapFeedbackList);

				})();

		default:
			return state;

	}

};

export default {
	loginReducer,
	thisUserReducer,
	otherUserReducer,
	topicReducer,
	createReducer,
	feedbackReducer
};
