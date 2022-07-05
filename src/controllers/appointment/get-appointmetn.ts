import axios from 'axios';
import { baseUrl } from '../..';



export async function getAppointmentss() {

	const { data: appointment } = await axios.get(`${baseUrl}/appointments`);
	const formattedAppointmentes = appointment.map((c: any) =>
		({ title: c.title, description: c.description, time: c.time }));
	console.table(formattedAppointmentes);
}
