import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../models/Book';
import { useAppSelector } from '../store/hooks';

const useBookByParamsId = () => {
	const [book, setBook] = useState<Book | undefined>({
		id: null,
		title: '',
		author: '',
		categories: [],
		graphic: {
			src: '',
			title: '',
			description: '',
		},
	});

	const { id: param }: { id: string } = useParams();

	const books = useAppSelector((state) => state.book.data);

	useEffect(() => {
		if (param !== 'create') {
			setBook(books.find((book) => book.id === param));
		}
	}, [param, books]);

	return { book, setBook };
};

export default useBookByParamsId;
