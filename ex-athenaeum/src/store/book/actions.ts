import { BOOKS } from '../../mock/books';
import { Book } from '../../models/Book';
import { ActionType } from '../action-types';
import { StoreAction } from '../models';
import { AppDispatch } from '../store';

export const booksStart: StoreAction = () => ({
	type: ActionType.BOOKS_START,
});

export const booksSuccess: StoreAction<Book[]> = (books) => ({
	type: ActionType.BOOKS_SUCCESS,
	payload: books,
});

export const booksFail: StoreAction<any> = (err) => ({
	type: ActionType.BOOKS_FAIL,
	payload: err,
});

export const addBook: StoreAction<Book> = (book) => ({
	type: ActionType.ADD_BOOK,
	payload: book,
});

export const setBook: StoreAction<Partial<Book>> = (book) => ({
	type: ActionType.SET_BOOK,
	payload: book,
});

export const getBooks = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(booksStart());
		try {
			dispatch(booksSuccess(BOOKS));
		} catch (err) {
			dispatch(booksFail(err));
		}
	};
};
