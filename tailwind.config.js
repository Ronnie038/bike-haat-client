/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {},
	},
	daisyui: {
		// styled: true,
		// themes: true,
		// base: true,
		// utils: true,
		// logs: true,
		// rtl: false,
		// prefix: '',
		// darkTheme: 'dark',
		themes: ['light', 'dark', 'night'],
	},
	plugins: [require('daisyui')],
};
