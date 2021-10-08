import { User } from '../../models/User';
import { ActionType } from '../action-types';
import { StoreActionType, StoreReducer, StoreSlice } from '../models';

export interface UserProps extends StoreSlice<User> {}

const initialState: UserProps = {
	data: [],
	loading: false,
	error: null,
};

const usersStart: StoreReducer<UserProps> = (state) => {
	return { ...state, loading: true };
};

const usersSuccess: StoreReducer<UserProps, User[]> = (state, action) => {
	return { ...state, data: action?.payload || [], loading: false };
};
const usersFail: StoreReducer<UserProps, any> = (state, action) => {
	return { ...state, error: action?.payload, loading: false };
};

const addUser: StoreReducer<UserProps, User> = (state, action) => {
	return { ...state, data: [...state.data, action?.payload!] };
};

export default function reducer(
	state: UserProps = initialState,
	action: StoreActionType<any>
): UserProps {
	switch (action.type) {
		case ActionType.USERS_START:
			return usersStart(state);
		case ActionType.USERS_SUCCESS:
			return usersSuccess(state, action);
		case ActionType.USERS_FAIL:
			return usersFail(state, action);
		case ActionType.ADD_USER:
			return addUser(state, action);
		default:
			return state;
	}
}
