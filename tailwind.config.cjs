/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {
			animation: {
				blob: 'blob 10s infinite',
				'rotate-color': 'rotate-color 5s linear infinite'
			},
			keyframes: {
				'rotate-color': {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				},
				blob: {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)'
					},
					'25%': {
						transform: 'translate(20px, -50px) scale(1.1)'
					},
					'50%': {
						transform: 'translate(0, 20px) scale(1)'
					},
					'75%': {
						transform: 'translate(-20px, -15px) scale(0.9)'
					}
				}
			}
		}
	},

	plugins: [
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
		require('@tailwindcss/forms')
	]
};

module.exports = config;
