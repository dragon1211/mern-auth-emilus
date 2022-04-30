import moment from 'moment';

const m = new Date().getMonth();
const y = new Date().getFullYear();

const getDate = (date) => moment(new Date(y, m, date),).format('DD MMMM')

const CalendarData = [
	{
		date: getDate(2),
		event: [
			{
				title: 'Meeting',
				bullet: 'cyan',
				start: '11.00am',
				end: '1.00pm',
			}
		]
	},
	{
		date: getDate(5),
		event: [
			{
				title: 'Birthday Party',
				bullet: 'cyan',
				start: '11.00am',
				end: '1.00pm',
			},
			{
				title: 'Designer Meeting',
				bullet: 'red',
				start: '3.00pm',
				end: '4.00pm',
			}
		]
	},
	{
		date: getDate(20),
		event: [
			{
				title: 'Dave ceremony',
				bullet: 'blue',
				start: '2.00pm',
				end: '5.00pm',
			}
		]
	},
	{
		date: getDate(25),
		event: [
			{
				title: 'Project discussion',
				bullet: 'gold',
				start: '8.00pm',
				end: '9.00pm',
			}
		]
	}
]

export default CalendarData