import { ActionType } from '../action-types';
import { StoreAction } from '../models';

export const setPageTitle: StoreAction<string | null | undefined> = (
	title
) => ({
	type: ActionType.SET_PAGE_TITLE,
	payload: title,
});
