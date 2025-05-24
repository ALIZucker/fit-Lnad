module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                mobtext10: "2.41vw",
                desktext24: "1.25vw",
                desktext16: "0.83vw",
                desktext32: "1.67vw",
                desktext18: "0.9449vw",
                desktext20: "1.04vw",
                monile12:'2.89vw',
                monile14:'3.38vw',
                monile16:'3.86vw',
                desktext28: '1.4vw',

            },
            colors: {
                secondery: "#032340",
                primary: "#FA541C",
                gray40: "#404040",
                gray50: "#606060",
                postBackColor:"#fff7f4",
                blue50:"#67aae6",
                bluesky:"#f4faff",
                footer:"#021526"
            }
        },
    },
    plugins: [],
};
