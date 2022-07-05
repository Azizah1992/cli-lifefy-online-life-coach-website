import axios from 'axios';
import { baseUrl } from '../..';

// let coaches = [{ id: '1234', name: 'azizah', phone: '055555' }]

export async function getCoaches() {

	const { data:coach} = await axios.get(`${baseUrl}/coachs`);
	const formattedCoaches = coach.map((c: any) => ({ name: c.name, phone: c.phone, email: c.email }));
	console.table(formattedCoaches);
}
