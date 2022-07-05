import { prompt } from 'inquirer';
import { createUser } from '../controllers/user/create-user';
import { deleteUser } from '../controllers/user/delete-user';
// import { deleteUser } from '../controllers/user/delete-user';
import { getUser } from '../controllers/user/get-user';
import { searchUser } from '../controllers/user/search-user';
import { updateUser } from '../controllers/user/update-user';
// import { update } from '../controllers/coach/update-contact';

export async function q3() {  //q3 user question
	const { q3Answer } = await prompt({  // user servises

		type: 'list',
		name: 'q3Answer',
		message: 'Please choose an action 👀!',
		choices: [
			'1- please add user  ? 🙉',
			'2- view user infrmation 🐊',
			'3- Update user name 🐬',
			'4- delete user information',
			'5- Search user by name 🔍',
			'6- Quit app 🤬',
		],
		filter: (val) => +val[0],
	});

	switch (q3Answer) {
		case 1:
			await createUser();
			break;

		case 2:
			await getUser();
			break;

		case 3:
			await updateUser();
			break;

		case 4:
			await deleteUser();
			break;

		case 5:
			await searchUser();
			break;

		case 6:
			console.log('Byyyye 👊!');
			process.exit(0);

		default:
			break;
	}

	function getUsers() {
		throw new Error('Function not implemented.');
	}

}