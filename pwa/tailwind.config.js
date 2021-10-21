module.exports = {
    // mode: 'jit',
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#5b8006',
                secondary: '#575756',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
