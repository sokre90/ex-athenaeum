export interface Book {
	id: string | null;
	title: string;
	author: string;
	categories: string[];
}

export type BookKey = keyof Book;
