import { prompt } from 'inquirer';
import { createCoach } from '../controllers/coach/create-coach';
import { deleteCoach } from '../controllers/coach/delete-coach';
import { getCoaches } from '../controllers/coach/get-coach';
import { searchCoach } from '../controllers/coach/search-coach';
import { updateCoachs } from '../controllers/coach/update-coach';
// import { updateContact } from '../controllers/coach/update-contact';

export async function q2() { //q2 coach question
	const { q2Answer } = await prompt({

		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- View coach  ? 🙉',
			'2- Add new coach name🐊',
			'3- Update coach name 🐬',
			'4- Delete coach  ❌',
			'5- Search coach by name 🔍',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getCoaches();
			break;

		case 2:
			await createCoach();
			break;

		case 3:
			await updateCoachs();
			break;

		case 4:
			await deleteCoach();
			break;

		case 5:
			await searchCoach();
			break;

		case 6:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}

// 	function getCoaches() {
// 		throw new Error('Function not implemented.');
// 	}

// }

// function updatCoach() {
// 	throw new Error('Function not implemented.');
// }
// function searchCoaches() {
// 	throw new Error('Function not implemented.');
}

