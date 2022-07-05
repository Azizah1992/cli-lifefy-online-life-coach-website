import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';




export async function searchAppointmetn() {
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

	const { data: appintment } = await axios.get(baseUrl + '/appointments', {
		
		params: text,
	});
	
	const formattedAppointmentes= appintment
	console.table(formattedAppointmentes)
}
