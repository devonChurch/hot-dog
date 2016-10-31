import {IS_MOBILE, SHOW_TAB, HIDE_TAB} from './actions';
import * as defaultState from './default';

const reducer = (state = defaultState, action) => {

	switch (action.type) {

		case IS_MOBILE:
			return {
				...state,
				isMobile: action.data
			};

        case SHOW_TAB:
			return {
				...state,
				showTab: action.data
			};

		case HIDE_TAB:
			return {
				...state,
				hideTab: action.data
			};

		default:
			return state;

	}

};

export default reducer;
