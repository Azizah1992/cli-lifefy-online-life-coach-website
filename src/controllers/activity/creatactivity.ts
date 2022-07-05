import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function createActivity() {
    const activitytData = await prompt([
        {
            type: 'input',
            name: 'activity_name',
            message: 'Enter activity name 🔤 ',
        },
        {
            type: 'input',
            name: 'activity_time',
            message: 'Enter  activity time 📱 ',
        },

        {
            type: 'input',
            name: 'activity_leader',
            message: 'Enter  activity leader 📱 ',
        },
    ]);


    await axios.post(baseUrl + '/activites', {
    	// id: v4(),
    	...activitytData,
    });


    console.log(`Activity for ${activitytData.name}, has been added ✅`);
}
