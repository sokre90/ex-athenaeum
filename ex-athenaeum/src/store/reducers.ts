import { combineReducers } from 'redux';
import bookReducers from './book/reducers';
import pageReducers from './page/reducers';
import userReducers from './user/reducers';

export const rootReducer = combineReducers({
	book: bookReducers,
	page: pageReducers,
	user: userReducers,
});
