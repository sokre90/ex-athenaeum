import { combineReducers } from 'redux';
import bookReducers from './book/reducers';
import pageReducers from './page/reducers';

export const rootReducer = combineReducers({
	book: bookReducers,
	page: pageReducers,
});
