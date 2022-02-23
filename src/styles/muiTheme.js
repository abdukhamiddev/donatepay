import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#00ce4b",
		},
	},
	typography: {
		fontSize: 16,
		fontFamily: [
			'"Open Sans"',
			'"Montserrat"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		h1: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		h2: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		h3: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		h4: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		h5: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		h6: {
			fontWeight: 900,
			fontFamily: "Montserrat",
		},
		body1: {
			lineHeight: 1.9,
		},
		body2: {
			lineHeight: 1.9,
		},
	},
});

theme = responsiveFontSizes(theme);
export { theme };
