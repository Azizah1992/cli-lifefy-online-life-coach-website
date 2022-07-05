import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function updateAppointment() {
    const { data: appointment } = await axios.get(`${baseUrl}/appointments`);
    const formattedAppointmentes = appointment.map((c: any) => ({ title: c.title, description: c.description, time: c.time }));
    console.table(formattedAppointmentes);

    const { index } = await prompt({
        type: 'number',
        name: 'index',
        message: 'Enter index to update 🐬',
        filter: (val) => +val,
    });
    const appointments = appointment[index];

    const newAppointments = await prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter new name or press enter to keep it as (${appointment.title})`,
            filter: (val) => {
                if (val.trim() === '') return appointment.name;
                return val;
            },
        },
        {
            type: 'input',
            name: 'phone',
            message: `Enter new description or press enter to keep it as (${appointment.description})`,
            filter: (val) => {
                if (val.trim() === '') return appointment.phone;
                return val;
            },
        },
    ]);

    await axios.patch(baseUrl + `/appointments/${appointments.appointment_id}`, newAppointments);

    console.log(`Appointment for ${newAppointments.name}, has been updated ✅`);
}
