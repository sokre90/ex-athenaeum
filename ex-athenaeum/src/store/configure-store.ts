import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState?: any) {
	const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store;
}
