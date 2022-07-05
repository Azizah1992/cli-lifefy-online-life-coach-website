import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

// let users = [{ id: '1234', name: 'azizah', phone: '055555' },
// { id: '1234', name: 'slem', phone: '06666' }]

export async function deleteUser() {
	const { data: users } = await axios.get(baseUrl + '/users');
	const formattedUsers = users.map((c: any) => ({ name: c.name, email: c.email,  
		 gender: c.gender, password: c.password ,phone: c.phone , role: c.role}));
	console.table(formattedUsers);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const user = users[index];
	await axios.delete(baseUrl + `/users/${user.user_id}`);
	console.log(`Users for ${user.name} has been deleted ✅`);
}
