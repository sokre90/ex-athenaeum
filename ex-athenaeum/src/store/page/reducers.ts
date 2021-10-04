import { ActionType } from '../action-types';
import { StoreActionType, StoreReducer } from '../models';

export interface PageProps {
	title: string | null | undefined;
}

const initialState: PageProps = {
	title: null,
};

export const setPageTitle: StoreReducer<PageProps, string> = (
	state,
	action
) => {
	return { ...state, title: action?.payload };
};

export default function reducer(
	state: PageProps = initialState,
	action: StoreActionType<any>
): PageProps {
	switch (action.type) {
		case ActionType.SET_PAGE_TITLE:
			return setPageTitle(state, action);
		default:
			return state;
	}
}
