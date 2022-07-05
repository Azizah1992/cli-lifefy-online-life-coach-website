import chalk from 'chalk';
import { prompt } from 'inquirer';

import { getAppointmentss } from '../controllers/appointment/get-appointmetn';
import { searchAppointmetn } from '../controllers/appointment/search-appointment';

export async function q8() { //
	const { q8Answer } = await prompt({

		type: 'list',
		name: 'q8Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View the reseved appointment? 🙉',
			// '2- Add new appointment🐊',
			// '3- Update appointment 🐬',
			// '4- Delete appointment ❌',
			'5- Search (choose) appointment by title 🔍',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q8Answer) {
		case 1:
			await getAppointmentss();
			break;

		// case 2:
		// 	await createAppointment();
		// 	break;

		// case 3:
		// 	await updateAppointment();
		// 	break;

		// case 4:
		// 	await deleteAppointment();
		// 	break;

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



