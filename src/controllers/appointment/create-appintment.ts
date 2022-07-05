import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createAppointment() {
	const appointmentData = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Eneter the appointment title 🔤 ',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter the appointment description 📱 ',
		},
		{
			type: 'input',
			name: 'time',
			message: 'Enter the appointment tiem 📱 ',
		},
	]);


	await axios.post(baseUrl + '/appointments', {
		// id: v4(),
		...appointmentData,
	});

	
	console.log(`Appointment for ${appointmentData.title}, has been added ✅`);
}
