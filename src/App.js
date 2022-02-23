import logo from "./logo.svg";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { StylesProvider } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
function App() {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider></ThemeProvider>
		</StylesProvider>
	);
}

export default App;
