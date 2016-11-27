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

				const {color, topicId, feedbackId, text} = data;

				return {
					...state,
					isActive: true,
					color,
					topicId,
					feedbackId,
					text
				};

			})();

		case action.CLOSE_CREATE_DIALOG:

			return {
				...state,
				isActive: false
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

				const {feedbackId, isOptionsActive} = data;

				const mapFeedbackList = (item) => {
					return feedbackId === item.feedbackId ? {...item, isOptionsActive} : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.TOGGLE_FEEDBACK_RATING:

			return (() => {

				const {feedbackId, userId} = data;

				const toggleRating = (item) => {

					const ratingIndex = item.rating.indexOf(userId);

					switch (ratingIndex) {

						case -1:
							return {
								...item,
								rating: [...item.rating, userId]
							}

						default:
							return {
								...item,
								rating: [...item.rating.slice(0, ratingIndex), ...item.rating.slice(ratingIndex + 1)]
							}

					}
				}

				const mapFeedbackList = (item) => {
					return feedbackId === item.feedbackId ? toggleRating(item) : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.TOGGLE_FEEDBACK_VISIBILITY:

			return (() => {

				const {feedbackId, isFeedbackVisible} = data;

				const mapFeedbackList = (item) => {
					return feedbackId === item.feedbackId ? {...item, isFeedbackVisible} : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.REMOVE_FEEDBACK:

			return (() => {

				const {feedbackId} = data;

				const mapFeedbackList = (item) => {
					return feedbackId !== item.feedbackId;
				};

				return state.filter(mapFeedbackList);



			})();

		case action.EDIT_FEEDBACK:

			return (() => {

				const {feedbackId, text, lastEdit} = data;

				const mapFeedbackList = (item) => {
					return feedbackId === item.feedbackId ? {...item, text, lastEdit} : item;
				};

				return state.map(mapFeedbackList);

			})();

		case action.ADD_FEEDBACK:

			return (() => {

				const {topicId, feedbackId, text, badge, name, color, userId} = data;

				const feedback = {
					badge,
					name,
					color,
					userId,
					topicId,
					feedbackId,
					rating: 0,
					text,
					isRatingToggled: false,
					isFeedbackVisible: false,
					// isOptionsActive: false,
					lastEdit: false
				};

				return [
					...state,
					feedback
				];

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

					const mapFeedbackList = (item) => {
						return data.userId === item.userId ? updateUserFeedback(item) : item;
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
