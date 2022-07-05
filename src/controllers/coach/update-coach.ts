import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function updateCoachs() {
	const { data: coaches } = await axios.get(baseUrl + '/coachs');
	const formattedCoaches = coaches.map((c: any) => ({ name: c.name, phone: c.phone }));
	console.table(formattedCoaches);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const coach = coaches[index];

	const newCoaches = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${coach.name})`,
			filter: (val) => {
				if (val.trim() === '') return coach.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'phone',
			message: `Enter new phone or press enter to keep it as (${coach.phone})`,
			filter: (val) => {
				if (val.trim() === '') return coach.phone;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/coachs/${coach.coach_id}`, newCoaches);

	console.log(`Coach for ${newCoaches.name}, has been updated ✅`);
}
