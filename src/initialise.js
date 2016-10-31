import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './state/reducer';
import defaultState from './state/default';
import defaultProps from './props/default';
import App from './app/view';
const hotDog = document.getElementById('hot-dog');

function renderMe(store) {



	render(
		<Provider store={store}>
			<App app={defaultProps}/>
		</Provider>,
		hotDog
	);

}

function devTools() {

	return window.devToolsExtension ? window.devToolsExtension() : undefined;

}

const store = createStore(
	reducer,
	defaultState,
	devTools()
);

// Render on state change.
store.subscribe(() => renderMe(store));

// Prompt initial render on page load.
renderMe(store);
