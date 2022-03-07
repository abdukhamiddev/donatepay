import { AnimatePresence } from "framer-motion";
import { StylesProvider } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme as muiTheme } from "./styles/muiTheme";
import { ThemeProvider as SCProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import WebFont from "webfontloader";
import DonatePage from "./pages/donate";
import SuccessPage from "./pages/success-stories";

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Open Sans", "Montserrat:400,500,600,700,900"],
			},
		});
	}, []);
	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={muiTheme}>
				<SCProvider theme={muiTheme}>
					<CssBaseline />
					<GlobalStyle />
					<div className="app">
						<Navbar />
						<main>
							<AnimatePresence>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/donate" element={<DonatePage />} />
									<Route path="/success-stories" element={<SuccessPage />} />
								</Routes>
							</AnimatePresence>
						</main>

						<Footer />
					</div>
				</SCProvider>
			</ThemeProvider>
		</StylesProvider>
	);
}

export default App;
