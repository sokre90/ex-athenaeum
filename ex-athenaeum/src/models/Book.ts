export interface Book {
	id: string | null;
	title: string;
	author: string;
	categories: string[];
	status?: BookStatus;
	graphic?: BookGraphic;
}

export type BookKey = keyof Book;

export interface BookGraphic {
	src: string;
	title: string;
	description: string;
}

export type BookStatus =
	| 'renting'
	| 'rented'
	| 'returning'
	| 'returned'
	| null
	| undefined;

export type SetBookStatusPayload = Pick<Book, 'id' | 'status'>;
