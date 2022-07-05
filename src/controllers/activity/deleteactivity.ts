// import axios from 'axios';
// import { prompt } from 'inquirer';
// import { baseUrl } from '../..';

// // let actives = [{ id: '1234', name: 'azizah', phone: '055555' },
// // { id: '1234', name: 'slem', phone: '06666' }]

// export async function deleteActivity() {
// 	// const { data: contacts } = await axios.get(baseUrl + '/contacts');
// 	const formattedActivity = actives.map((c: any) => ({ name: c.name, phone: c.phone }));
// 	console.table(formattedActivity);

// 	const { index } = await prompt({
// 		type: 'number',
// 		name: 'index',
// 		message: 'Enter index to delete ❌',
// 		filter: (val) => +val,
// 	});
// 	const active = actives[index];
// 	// await axios.delete(baseUrl + `/contacts/${contact.id}`);
// 	console.log(`Activity for ${active.name} has been deleted ✅`);
// }
