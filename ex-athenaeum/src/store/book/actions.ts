import { BOOKS } from '../../mock/books';
import { Book, SetBookStatusPayload } from '../../models/Book';
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

export const updateBookSuccess: StoreAction<Partial<Book>> = (book) => ({
	type: ActionType.UPDATE_BOOK_SUCCESS,
	payload: book,
});

export const setBookActionLoading: StoreAction<boolean> = (loading = true) => ({
	type: ActionType.SET_BOOK_ACTION_LOADING,
	payload: loading,
});

export const setBookStatus: StoreAction<SetBookStatusPayload> = (payload) => ({
	type: ActionType.SET_BOOK_STATUS,
	payload,
});

export const getBooks = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(booksStart());

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					dispatch(booksSuccess(BOOKS));
					resolve(BOOKS);
				} catch (err) {
					dispatch(booksFail(err));
					reject(err);
				}
			}, 1000);
		});
	};
};

export const createBook = (book: Book) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setBookActionLoading());

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					dispatch(addBook(book));
					dispatch(setBookActionLoading(false));
					resolve(book);
				} catch (err) {
					dispatch(booksFail(err));
					reject(err);
				}
			}, 1000);
		});
	};
};

export const updateBook = (book: Partial<Book>) => {
	return async (dispatch: AppDispatch) => {
		dispatch(setBookActionLoading());

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					dispatch(updateBookSuccess(book));
					dispatch(setBookActionLoading(false));
					resolve(book);
				} catch (err) {
					dispatch(booksFail(err));
					reject(err);
				}
			}, 1000);
		});
	};
};
