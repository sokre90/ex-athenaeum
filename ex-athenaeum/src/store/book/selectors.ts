import { RootState } from '../store';

export const selectBooks = (state: RootState) => state.book.data;

export const selectRentedBooks = (state: RootState) =>
	selectBooks(state).filter(({ status }) => status === 'rented');

export const selectRentingBooks = (state: RootState) =>
	selectBooks(state).filter(({ status }) => status === 'renting');
