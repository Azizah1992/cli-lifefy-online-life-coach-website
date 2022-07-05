// 
import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

// let coaches = [{ id: '1234', name: 'azizah', phone: '055555' },
// { id: '1234', name: 'slem', phone: '06666' }]

export async function deleteAppointment() {

	const { data: appointment } = await axios.get(`${baseUrl}/appointments`);
	const formattedAppointmentes = appointment.map((c: any) =>
		({ title: c.title, description: c.description, time: c.time }));
	console.table(formattedAppointmentes);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const appointments = appointment[index];
	console.log(appointments)
	await axios.delete(baseUrl + `/appointments/${appointments.appointment_id}`);
	console.log(`Appointment for ${appointment.title} has been deleted ✅`);
}
