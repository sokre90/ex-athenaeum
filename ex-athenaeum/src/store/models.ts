import { ActionType } from './action-types';

export interface StoreSlice<T = any> {
	data: T[];
	loading?: boolean;
	error?: any;
}

export interface StoreActionType<T = void> {
	type: ActionType;
	payload?: T;
}

export type StoreAction<T = void> = (arg?: T) => StoreActionType<T>;

export type StoreReducer<T, E = void> = (
	state: T,
	action?: StoreActionType<E>
) => T;
