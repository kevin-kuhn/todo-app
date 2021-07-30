module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			//bg-img-tiririca
			backgroundImage: theme => ({
				'img-tiririca': "url('/images/tiririca.jpg')"
			}),
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
		 }
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
