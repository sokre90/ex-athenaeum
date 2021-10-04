import { Book } from '../models/Book';
import { v4 as uuidv4 } from 'uuid';

export const BOOKS: Book[] = [
	{
		id: uuidv4(),
		title: 'Catcher in the rye',
		author: 'J. D. Salinger',
		categories: [],
	},
];
