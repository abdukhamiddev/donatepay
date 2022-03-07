import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Styled } from "./styles";
import { ReactComponent as SuccessIcon } from "../../assets/svg/undraw_celebration_0jvk.svg";
import { motion } from "framer-motion";
import CmButton from "../../components/CmButton";

const SuccessPage = () => {
	return (
		<Styled.SuccessStories
			className="page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Container>
				<Grid container spacing={10}>
					<Grid item md={6}>
						<motion.div className="c-image">
							<SuccessIcon />
						</motion.div>
					</Grid>
					<Grid item md={6}>
						<Typography variant="h4" className="hero__title">
							Pal's success <span className="highlight"> stories!</span>
						</Typography>
						<Typography
							className="hero__paragraph"
							variant="body1"
							style={{ paddingTop: "20px", paddingBottom: "20px" }}
						>
							We've all got one. A thing we love doing, a thing we've always
							wanted a lot to do or just a thing we could do.Whatever it is,
							when we do it, we can really make a difference.Do your thing and
							change people's lives,then tell your story
						</Typography>
						<div className="hero__buttons">
							<CmButton color="primary" variant="contained">
								Tell your story now !!
							</CmButton>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Styled.SuccessStories>
	);
};

export default SuccessPage;
