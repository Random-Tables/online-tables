/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.stone.700')
					}
				}
			})
		},
		fontFamily: {
			serif: ['IM Fell English', 'serif']
		}
	},
	plugins: [require('@tailwindcss/typography')],
	variants: {
		extend: {
			filter: ['hover', 'focus']
		}
	}
};
