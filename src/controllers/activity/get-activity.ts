import axios from 'axios';
import { baseUrl } from '../..';

// let actives = [{ id: '1234', name: 'azizah', phone: '055555' }]

export async function getActivity() {

	const { data: actives } = await axios.get(`${baseUrl}/activites`);
	const formattedActivity = actives.map((c: any) => ({ activity_name: c.activity_name,  activity_time: c.activity_time ,activity_leader:c.activity_leader}));
	console.table(formattedActivity);
}
