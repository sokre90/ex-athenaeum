import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';

export const USERS: User[] = [
	{
		id: uuidv4(),
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@doe.com',
		dob: new Date(1990, 6, 20),
	},
	{
		id: uuidv4(),
		firstName: 'Jane',
		lastName: 'Doe',
		email: 'jane@doe.com',
		dob: new Date(1993, 6, 26),
	},
];
