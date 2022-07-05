import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';




export async function searchCoach() {
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

	const { data: coach } = await axios.get(baseUrl + '/coachs', {
		
		params: text,
	});
	
	const formattedCoaches= coach
	console.table(formattedCoaches)
}
