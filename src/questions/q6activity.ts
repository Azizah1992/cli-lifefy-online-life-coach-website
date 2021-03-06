import { prompt } from 'inquirer';
import chalk from 'chalk';
import { getActivity } from '../controllers/activity/get-activity';
import { createActivity } from '../controllers/activity/creatactivity';
// import { getAppointment } from '../controllers/coach/get-coach';
// import { updateAppointment } from '../controllers/coach/update-contact';

export async function q6() { // activity question
	const { q6Answer } = await prompt({

		type: 'list',
		name: 'q6Answer',
		message: 'Please choose an action π!',
		choices: [
			'1- View the activity ? π',
			'2- Add new activityπ',
			'3- Update activity π¬',
			'4- Delete activity β',
			'5- Search activity π',
			'6- Quit app π€¬',
		],
		filter: (val) => +val[0],
	});

	switch (q6Answer) {
		case 1:
			await getActivity();
			break;

		case 2:
			await createActivity();
			break;

		// case 3:
		// 	await getActivity();
		// 	break;

		// case 4:
		// 	await deleteActivity();
		// 	break;

		// case 5:
		// 	await searActivity();
		// 	break;

		case 6:
			console.log(chalk.bgYellow('B Y E SEE YOU SOON !'));
			process.exit(0);

		default:
			break;
	}

	// function getAppointment() {
	// 	throw new Error('Function not implemented.');
	// }

}

// function updateAppointment() {
// 	throw new Error('Function not implemented.');
// }
// function searchAppointmetn() {
// 	throw new Error('Function not implemented.');
// }

