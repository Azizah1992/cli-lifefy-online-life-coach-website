import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createCoach() {
	const coachtData = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter coach name 🔤 ',
		},
		{
			type: 'input',
			name: 'phone',
			message: 'Enter coach phone number 📱 ',
		},

		{
			type: 'input',
			name: 'email',
			message: 'Enter coach email 📱 ',
		}
	]);


	await axios.post(baseUrl + '/coachs', {
		id: v4(),
		...coachtData,
	});


	console.log(`Coach for ${coachtData.name}, has been added ✅`);
}
