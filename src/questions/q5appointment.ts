import { prompt } from 'inquirer';
import chalk from 'chalk';
import { createAppointment } from '../controllers/appointment/create-appintment';
import { deleteAppointment } from '../controllers/appointment/delet-appointment';
// import { deleteAppointment } from '../controllers/appointment/delet-appointment';
import { getAppointmentss } from '../controllers/appointment/get-appointmetn';
// import { updateAppointment } from '../controllers/coach/update-contact';

export async function q5() { //
	const { q5Answer } = await prompt({

		type: 'list',
		name: 'q5Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View the avalible appointment? 🙉',
			'2- Add new appointment🐊',
			'3- Update appointment 🐬',
			'4- Delete appointment ❌',
			'5- Search appointment 🔍',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q5Answer) {
		case 1:
			await getAppointmentss();
			break;

		case 2:
			await createAppointment();
			break;

		case 3:
			await updateAppointment();
			break;

		case 4:
			await deleteAppointment();
			break;

		case 5:
			await searchAppointmetn();
			break;

		case 6:
			console.log(chalk.yellowBright.yellow('THANK YOU SEE YOU SOON'));
			process.exit(0);

		default:
			break;
	}

	function getAppointment() {
		throw new Error('Function not implemented.');
	}

}

function updateAppointment() {
	throw new Error('Function not implemented.');
}
function searchAppointmetn() {
	throw new Error('Function not implemented.');
}

