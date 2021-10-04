import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setPageTitle } from '../store/page/actions';

const usePageTitle = (title?: string | null) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setPageTitle(title));

		return () => {
			dispatch(setPageTitle(null));
		};
	}, [title, dispatch]);
};

export default usePageTitle;
