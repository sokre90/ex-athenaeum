import produce from 'immer';
import { Book } from '../../models/Book';
import { ActionType } from '../action-types';
import { StoreActionType, StoreReducer, StoreSlice } from '../models';

export interface BookProps extends StoreSlice<Book> {
	book: Book;
}

const initialState: BookProps = {
	data: [],
	book: {
		id: null,
		title: '',
		author: '',
		categories: [],
	},
	loading: false,
	error: null,
};

const booksStart: StoreReducer<BookProps> = (state) => {
	return { ...state, loading: true };
};

const booksSuccess: StoreReducer<BookProps, Book[]> = (state, action) => {
	return { ...state, data: action?.payload || [], loading: false };
};
const booksFail: StoreReducer<BookProps, any> = (state, action) => {
	return { ...state, error: action?.payload, loading: false };
};

const addBook: StoreReducer<BookProps, Book> = (state, action) => {
	return { ...state, data: [...state.data, action?.payload!] };
};

const setBook: StoreReducer<BookProps, Book> = (state, action) => {
	return produce<BookProps>((draft) => {
		draft.book = { ...draft.book, ...action?.payload };
	})(state);
};

export default function reducer(
	state: BookProps = initialState,
	action: StoreActionType<any>
): BookProps {
	switch (action.type) {
		case ActionType.BOOKS_START:
			return booksStart(state);
		case ActionType.BOOKS_SUCCESS:
			return booksSuccess(state, action);
		case ActionType.BOOKS_FAIL:
			return booksFail(state, action);
		case ActionType.ADD_BOOK:
			return addBook(state, action);
		case ActionType.SET_BOOK:
			return setBook(state, action);
		default:
			return state;
	}
}
