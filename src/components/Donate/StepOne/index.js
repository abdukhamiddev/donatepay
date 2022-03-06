import React, { useEffect, useRef, useState } from "react";
import {
	CircularProgress,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { ReactComponent as StepOneSvg } from "../../../assets/svg/undraw_virtual_assistant_jjo2.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";
import schemaFirstStep from "./validationSchema";
import { Formik } from "formik";
import CmButton from "../../CmButton";

const StepOne = ({ nextStep, data, dispatch }) => {
	const inputLabel = useRef(null);
	const [labelWidth, setLabelWidth] = useState(0);

	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	return (
		<Grid container>
			<Grid item md={6} className="image">
				<div className="c-image">
					<StepOneSvg />
				</div>
			</Grid>

			<Grid item className="hero">
				<Typography variant="h4" className="hero__title">
					Children needs <span>you!</span>
				</Typography>
				<Typography>
					Help us draw a smile on the faces of underprivileged children,buy them
					food, or pay for their education
				</Typography>
				<div className="step-one">
					<Formik
						initialValues={data}
						validationSchema={schemaFirstStep}
						onSubmit={(values) => {
							dispatch({ type: "UPDATE", payload: values });
							setTimeout(() => {
								nextStep(2);
							}, 1000);
						}}
					>
						{({
							handleSubmit,
							handleChange,
							values,
							isSubmitting,
							touched,
							errors,
						}) => (
							<form onSubmit={handleSubmit}>
								<TextField
									variant="outlined"
									name="name"
									value={values.name}
									label="Full name"
									fullWidth
									onChange={handleChange}
									error={touched.name && errors.name ? true : false}
									helperText={touched.name && errors.name ? errors.name : ""}
								/>
								<TextField
									variant="outlined"
									name="email"
									value={values.name}
									label="Email address"
									fullWidth
									onChange={handleChange}
									error={touched.email && errors.email ? true : false}
									helperText={touched.email && errors.email ? errors.email : ""}
								/>
								<Grid
									container
									alignItems={
										touched.subscription && errors.subscription
											? "flex-start"
											: "center"
									}
								>
									<Grid item>
										<FormControl>
											<InputLabel ref={inputLabel}>Subscription</InputLabel>
											<Select>
												<MenuItem value={1}>Donate Once</MenuItem>
												<MenuItem disabled value={2}>
													Donate monthly(coming soon)
												</MenuItem>
											</Select>
											<FormHelperText error>
												{touched.subscription && errors.subscription
													? errors.subscription
													: ""}
											</FormHelperText>
										</FormControl>
									</Grid>

									<Grid item>
										<CmButton
											variant="contained"
											color="primary"
											size="large"
											endIcon={
												isSubmitting ? (
													<CircularProgress color="primary" size={12} />
												) : (
													<ArrowRight />
												)
											}
											type="submit"
											disabled={isSubmitting}
										>
											Proceed
										</CmButton>
									</Grid>
								</Grid>
								<Typography variant="caption" className="hero__caption">
									Your donation can be cancelled within 24 hours.
								</Typography>
							</form>
						)}
					</Formik>
				</div>
			</Grid>
		</Grid>
	);
};

export default StepOne;
