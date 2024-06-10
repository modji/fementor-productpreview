/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				dark_cyan: "hsl(158, 36%, 37%)",
				cream: "hsl(30, 38%, 92%)",
				very_dark_blue: "hsl(212, 21%, 14%)",
				dark_grayish_blue: "hsl(228, 12%, 48%)",
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			fontSize: {
				normal: "14px",
			},
		},
	},
	plugins: [],
};
