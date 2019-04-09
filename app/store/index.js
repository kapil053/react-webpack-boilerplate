import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducer';

export default function configureStore(initialState) {
	const middlewares = [thunk];
	const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
	const enhancer = composeEnhancers(applyMiddleware(...middlewares));
	return createStore(
		reducers,
		initialState,
		enhancer,
	);
}
