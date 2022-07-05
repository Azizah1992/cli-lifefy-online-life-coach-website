import { prompt } from 'inquirer';
import { q2 } from './q2';
import { q3 } from './q3';
import { q5 } from './q5appointment';
import { q6 } from './q6activity';
// import { getCoaches } from '../controllers/coach/get-coach';
// import { updateContact } from '../controllers/coach/update-contact';

export async function q4() {  //q3 user question
	const { q4Answer } = await prompt({  // user servises

		type: 'list',
		name: 'q4Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1-  view coach options ? 🙉',
			'2-  view user option 🐊',
			'3-  view Appointment option 🐬',
			'4-  view activity options ',
			// '5- Search user by name 🔍',
			'5- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q4Answer) {
		case 1:
			await q2();
			break;

		case 2:
			await q3();
			break;

		case 3:
			await q5();
			break;

		case 4:
			await q6();
			break;

		// case 5:
		// 	await searchUser();
		// 	break;

		case 2:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}

	function getUsers() {
		throw new Error('Function not implemented.');
	}

}