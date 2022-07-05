import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';




export async function searchUser() {
	const text = await prompt([
		{
			type: 'input',
			name: 'text',
			message: 'Enter name to search 🔤 ',
		},
		// {
		// 	type: 'input',
		// 	name: 'name',
		// 	message: 'Enter name to search 🔤 ',
		// },
		// {
		// 	type: 'input',
		// 	name: 'name',
		// 	message: 'Enter name to search 🔤 ',
		// },
		// {
		// 	type: 'input',
		// 	name: 'name',
		// 	message: 'Enter name to search 🔤 ',
		// },
	]);

	const { data: user } = await axios.get(baseUrl + '/users', {
		
		params: text,
	});
	
	const formattedUsers= user
	console.table(formattedUsers)
}
