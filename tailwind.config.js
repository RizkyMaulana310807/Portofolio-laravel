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
            }
        },
    },
    plugins: [],
};
