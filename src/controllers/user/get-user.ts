import axios from 'axios';
import { baseUrl } from '../..';
// let users = [{ id: '1234', name: 'azizah', phone: '055555' }]

export async function getUser() {

	const { data: user } = await axios.get(baseUrl + '/users');
	const formattedUsers = user.map((c: any) => ({ name: c.name, email: c.email,  
		 gender: c.gender, password: c.password ,phone: c.phone , role: c.role}));
	console.table(formattedUsers);
}
