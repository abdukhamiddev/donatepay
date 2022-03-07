import React from "react";
import { ReactComponent as StepThreeSvg } from "../../../assets/svg/undraw_festivities_tvvj.svg";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";

const StepThree = () => {
	return (
		<Grid
			container
			spacing={10}
			justifyContent="space-between"
			alignItems="center"
		>
			<Grid item md={6}>
				<div className="c-image">
					<StepThreeSvg />
				</div>
			</Grid>
			<Grid item md={6}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Typography variant="h4" className="hero__title">
						Thank you for <br /> your generosity
					</Typography>
					<Typography variant="body1" className="hero__paragraph">
						Your donation is being processed,your credit card will be charged
						shortly adn a receipt will be send to your email
					</Typography>
				</motion.div>
			</Grid>
		</Grid>
	);
};

export default StepThree;
