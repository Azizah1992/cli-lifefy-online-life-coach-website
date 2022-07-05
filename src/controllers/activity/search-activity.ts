import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

// let actives = [{ id: '1234', name: 'azizah', phone: '055555' },
// { id: '1234', name: 'slem', phone: '06666' }]

export async function searActivity() {
	const query = await prompt([
		{
			type: 'input',
			name: 'activity_name',
			message: 'Enter activity name 🔤 ',
		},
		{
			type: 'input',
			name: 'activity_name',
			message: 'Enter time to search 🔤 ',
		},
		{
			type: 'input',
			name: 'activity_leader',
			message: 'Enter name of activity leader 🔤 ',
		},
	
	]);

	const { data: activtes } = await axios.get(baseUrl + '/activites', {
		params: query,
	});
	const { data: actives } = await axios.get(`${baseUrl}/activites`);
	const formattedActivity = actives.map((c: any) => ({ activity_name: c.activity_name,  activity_time: c.activity_time ,activity_leader:c.activity_leader}));
	console.table(formattedActivity);
}
