import { q1 } from './questions/q1';
import { q2 } from './questions/q2';
import chalk from 'chalk';
import { q4 } from './questions/q4admin';
import { q5 } from './questions/q5appointment';
import figlet from 'figlet';
import { q7 } from './questions/q7users';
import { q8 } from './questions/q8coach-cli';

export const baseUrl = 'http://localhost:3003';

async function start() {
	/// Display welcome message
	console.log();
	console.log();
	figlet.text('H E L L O!', {
		font: 'Doom',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	}, function(err, data) {
		if (err) {
			console.log('Something went wrong...');
			console.dir(err);
			return;
		}
		console.log(data);
	});
	
         console.log(chalk.green.bgWhite('WELCOM TO LIFEFIY WEB SITE!'));

		// 		import chalkTemplate from 'chalk-template';

		// console.log(chalk.blue('Hello world!'));
		// 		console.log(data);
		// 	});


		// console.log('Welcome to our lifefy website');
		console.log();
		console.log();


		/// Q1/ Tell user about available options
		/// 1- Login
		/// 2- Quit
		// await q1();

		/// Q2/ Tell logged in user about available options
		/// 1- 'View contacts',
		/// 2- 'Add a contact',
		/// 3- 'Update contact',
		/// 4- 'Delete contact',
		/// 5- 'Search contact by name',

		 const role = await q1();
		 console.log(role)

		while (true) {
			if (role == 'ADMIN') {
	
				await q4();
				console.log();
				console.log();
	
				await q2();
				console.log();
				console.log();
	
	
	
				// await q7();
				// console.log();
				// console.log();
	
				// await q6();
				// console.log();
				// console.log();
	
	
	
	
			} else {
	
				await q7();
				console.log();
				console.log();
	
				// await q8();
				// console.log();
				// console.log();
			}
		}
	}
	
	start();