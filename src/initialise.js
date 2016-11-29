import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './state/reducer';
import defaultState from './state/default';
import defaultProps from './props/default';
import AppContainer from './app/container';
const hotDog = document.getElementById('hot-dog');

function renderMe(store) {

	render(
		<Provider store={store}>
			<AppContainer/>
		</Provider>,
		hotDog
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

const store = createStore(
	combineReducers({
		loginState: reducer.loginReducer,
		thisUserState: reducer.thisUserReducer,
		otherUserState: reducer.otherUserReducer,
		filterState: reducer.filterReducer,
		topicState: reducer.topicReducer,
		createState: reducer.createReducer,
		feedbackState: reducer.feedbackReducer
	}),
	defaultState,
	devTools()
);

// Render on state change.
store.subscribe(() => renderMe(store));

// Prompt initial render on page load.
renderMe(store);
