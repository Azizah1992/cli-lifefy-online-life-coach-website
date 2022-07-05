import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createUser() {
	const userData = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter user name 🔤 ',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter user phone number 📱 ',
		},

		{
			type: 'input',
			name: 'email',
			message: 'Enter user email 📱 ',
		},
		{
			type: 'input',
			name: 'gender',
			message: 'Enter user gender 📱 ',
		},
		{
			type: 'input',
			name: 'password',
			message: 'Enter user password 📱 ',
		},
		{
			type: 'input',
			name: 'role',
			message: 'Enter user role 📱 ',
		},
	]);


	await axios.post(baseUrl + '/user', {
		// id: v4(),
		...userData,
		
	});

	
	console.log(`Users for ${userData.name}, has been added ✅`);
}
