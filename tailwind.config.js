const tailwindForms = require('@tailwindcss/forms');

module.exports = {
    darkMode: false, // or 'media' or 'class'
    purge: ['./public/**/*.html', './src/**/*.vue'],
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [tailwindForms]
};
