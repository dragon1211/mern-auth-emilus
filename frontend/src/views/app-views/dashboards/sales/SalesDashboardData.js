import { COLORS } from 'constants/ChartConstant';

export const weeklyRevenueData = {
	series: [
	  {
		name: 'Earning',
		data: [45, 52, 38, 24, 33, 26, 21]
	  }
	],
	categories:[
	  '08 Jul', 
	  '09 Jul', 
	  '10 Jul', 
	  '11 Jul', 
	  '12 Jul', 
	  '13 Jul', 
	  '14 Jul'
	]
}

export const topProductData = [
	{
		name: 'Blue Jacket',
		image: '/img/thumbs/thumb-7.jpg',
		category: 'Cloths',
		sales: 5930,
		status: 'up'
	},
	{
		name: 'White Sneaker',
		image: '/img/thumbs/thumb-12.jpg',
		category: 'Cloths',
		sales: 5177,
		status: 'up'
	},
	{
		name: 'Red Beat Headphone',
		image: '/img/thumbs/thumb-14.jpg',
		category: 'Devices',
		sales: 4701,
		status: 'down'
	},
	{
		name: 'Apple Watch',
		image: '/img/thumbs/thumb-17.jpg',
		category: 'Devices',
		sales: 2833,
		status: 'up'
	},
	{
		name: 'Blue Backpack',
		image: '/img/thumbs/thumb-11.jpg',
		category: 'Bags',
		sales: 1692,
		status: 'down'
	},
]

export const customerChartData = [
	{
		name: 'Store Customers',
		data: [28, 25, 64, 40, 75, 45, 70]
	},
	{
		name: 'Online Customers',
		data: [25, 15, 41, 25, 44, 12, 36]
	}
]

export const sessionColor = [COLORS[0], COLORS[1], COLORS[3], COLORS[5]]
export const sessionData = [3561, 1443, 2462, 1693]
export const sessionLabels = ['Cloths', 'Devices', 'Bags', 'Watches']
const jointSessionData = () => {
	let arr = []
	for (let i = 0; i < sessionData.length; i++) {
		const data = sessionData[i];
		const label = sessionLabels[i];
		const color = sessionColor[i]
		arr = [...arr, {
			data: data,
			label: label,
			color: color
		}]
	}
	return arr
}
export const conbinedSessionData = jointSessionData()

export const recentOrderData = [
	{
		id: '#5331',
		name: 'Eileen Horton',
		image: '/img/avatars/thumb-1.jpg',
		date: 1573430400,
		amount: 677,
		paymentStatus: 'Paid',
		orderStatus: 'Ready'
	},
	{
		id: '#5328',
		name: 'Terrance Moreno',
		image: '/img/avatars/thumb-2.jpg',
		date: 1572393600,
		amount: 1328.35,
		paymentStatus: 'Paid',
		orderStatus: 'Ready'
	},
	{
		id: '#5321',
		name: 'Ron Vargas',
		image: '/img/avatars/thumb-3.jpg',
		date: 1593949805,
		amount: 629,
		paymentStatus: 'Paid',
		orderStatus: 'Shipped'
	},
	{
		id: '#5287',
		name: 'Luke Cook',
		image: '/img/avatars/thumb-4.jpg',
		date: 1579132800,
		amount: 25.9,
		paymentStatus: 'Paid',
		orderStatus: 'Shipped'
	},
	{
		id: '#5351',
		name: 'Joyce Freeman',
		image: '/img/avatars/thumb-5.jpg',
		date: 1591286400,
		amount: 817.5,
		paymentStatus: 'Pending',
		orderStatus: 'Ready'
	},
]