import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

// let coaches = [{ id: '1234', name: 'azizah', phone: '055555' },
// { id: '1234', name: 'slem', phone: '06666' }]

export async function deleteCoach() {
	const { data:coaches} = await axios.get(`${baseUrl}/coachs`);
	const formattedCoaches = coaches.map((c: any) => ({ name: c.name, phone: c.phone, email: c.email }));
	console.table(formattedCoaches);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const coach = coaches[index];
	console.log(coach.coach_id)
	await axios.delete(baseUrl + `/coachs/${coach.coach_id}`);
	console.log(`Coach for ${coach.name} has been deleted ✅`);
}
