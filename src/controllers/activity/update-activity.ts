import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

let actives = [{ id: '1234', name: 'azizah', phone: '055555' },
{ id: '1234', name: 'slem', phone: '06666' }]

export async function updateActivity() {
	// const { data: activites } = await axios.get(baseUrl + '/activites');
	const formattedActivity = actives.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedActivity);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const activity = actives[index];

	const newActivity = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${activity.name})`,
			filter: (val) => {
				if (val.trim() === '') return activity.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'phone',
			message: `Enter new phone or press enter to keep it as (${activity.phone})`,
			filter: (val) => {
				if (val.trim() === '') return activity.phone;
				return val;
			},
		},
	]);

	// await axios.patch(baseUrl + `/contacts/${contact.id}`, newContact);

	console.log(`Activity for ${newActivity.name}, has been updated ✅`);
}
