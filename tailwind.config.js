module.exports = {
    darkMode: false, // or 'media' or 'class'
    purge: ['./public/**/*.html', './src/**/*.vue'],
    theme: {
        extend: {}
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled']
        }
    },
    plugins: ['@tailwindcss/custom-forms', '@tailwindcss/forms']
};
