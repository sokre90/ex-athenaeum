import { USERS } from '../../mock/users';
import { User } from '../../models/User';
import { ActionType } from '../action-types';
import { StoreAction } from '../models';
import { AppDispatch } from '../store';

export const usersStart: StoreAction = () => ({
	type: ActionType.USERS_START,
});

export const usersSuccess: StoreAction<User[]> = (users) => ({
	type: ActionType.USERS_SUCCESS,
	payload: users,
});

export const usersFail: StoreAction<any> = (err) => ({
	type: ActionType.USERS_FAIL,
	payload: err,
});

export const addUser: StoreAction<User> = (user) => ({
	type: ActionType.ADD_USER,
	payload: user,
});

export const getUsers = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(usersStart());
		try {
			dispatch(usersSuccess(USERS));
		} catch (err) {
			dispatch(usersFail(err));
		}
	};
};
