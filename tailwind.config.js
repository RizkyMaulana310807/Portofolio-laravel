export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand", "sans-serif"],
                fredoka: ["Fredoka", "sans-serif"],
            },
            colors: {
                primary: "#E9F1F7",
                secondary: "#E1ECF4",
                accent: "#FF9F1C",
            },
            textColor: {
              'main': '##1F2421',
              'special': '#FF9F1C',
              'bright': '#F0EFF4'
            },
            animation: {
                'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
                'star-movement-top': 'star-movement-top linear infinite alternate',
            },
            keyframes: {
                'star-movement-bottom': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
                },
                'star-movement-top': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};
