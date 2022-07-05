import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function updateUser() {
    const { data: Users } = await axios.get(baseUrl + '/users');
	const formattedUsers = Users.map((c: any) => ({ name: c.name, email: c.email,  
		 gender: c.gender, password: c.password ,phone: c.phone , role: c.role}));
	console.table(formattedUsers);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const user = Users[index];

	const newUsers = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${user.name})`,
			filter: (val) => {
				if (val.trim() === '') return user.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'phone',
			message: `Enter new phone or press enter to keep it as (${user.phone})`,
			filter: (val) => {
				if (val.trim() === '') return user.phone;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/users/${user.user_id}`, newUsers);

	console.log(`User for ${newUsers.name}, has been updated ✅`);
}
