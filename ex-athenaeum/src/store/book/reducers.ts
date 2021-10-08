import produce from 'immer';
import { Book, SetBookStatusPayload } from '../../models/Book';
import { ActionType } from '../action-types';
import { StoreActionType, StoreReducer, StoreSlice } from '../models';

export interface BookProps extends StoreSlice<Book> {
	inProgress?: boolean;
}

const initialState: BookProps = {
	data: [],
	loading: false,
	inProgress: false,
	error: null,
};

const booksStart: StoreReducer<BookProps> = (state) => {
	return { ...state, loading: true };
};

const booksSuccess: StoreReducer<BookProps, Book[]> = (state, action) => {
	return { ...state, data: action?.payload || [], loading: false };
};
const booksFail: StoreReducer<BookProps, any> = (state, action) => {
	return {
		...state,
		error: action?.payload,
		loading: false,
		inProgress: false,
	};
};

const addBook: StoreReducer<BookProps, Book> = (state, action) => {
	return { ...state, data: [...state.data, action?.payload!] };
};

const setBookActionLoading: StoreReducer<BookProps, boolean> = (
	state,
	action
) => {
	return { ...state, inProgress: action?.payload };
};

const updateBook: StoreReducer<BookProps, Book> = (state, action) => {
	const updatedBooks = state.data.map((book) => {
		if (book.id === action?.payload?.id) {
			return { ...book, ...action?.payload };
		}

		return book;
	});

	return { ...state, data: updatedBooks };
};

const setBookStatus: StoreReducer<BookProps, SetBookStatusPayload> = (
	state,
	action
) => {
	return produce<BookProps>((draft) => {
		draft.data.forEach((book) => {
			if (book.id === action?.payload?.id) {
				book.status = action?.payload?.status;
			}
		});
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
		case ActionType.SET_BOOK_ACTION_LOADING:
			return setBookActionLoading(state, action);
		case ActionType.ADD_BOOK:
			return addBook(state, action);
		case ActionType.UPDATE_BOOK_SUCCESS:
			return updateBook(state, action);
		case ActionType.SET_BOOK_STATUS:
			return setBookStatus(state, action);
		default:
			return state;
	}
}
