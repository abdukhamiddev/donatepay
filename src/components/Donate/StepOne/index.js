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
		<Grid
			container
			spacing={10}
			justifyContent="space-between"
			alignItems="center"
		>
			<Grid item md={6} className="image">
				<div className="c-image">
					<StepOneSvg />
				</div>
			</Grid>

			<Grid item className="hero" md={6}>
				<Typography variant="h4" className="hero__title">
					Children needs <span>you!</span>
				</Typography>
				<Typography variant="body1" className="hero__paragraph">
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
									value={values.email}
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
									justify="space-between"
									spacing={2}
								>
									<Grid item xs={12} sm={7} md={6} lg={8}>
										<FormControl variant="outlined" fullWidth>
											<InputLabel
												ref={inputLabel}
												id="demo-controlled-open-select-label"
												error={
													touched.subscription && errors.subscription
														? true
														: false
												}
											>
												Subscription
											</InputLabel>
											<Select
												labelId="demo-controlled-open-select-label"
												name="subscription"
												id="demo-controlled-open-select"
												value={values.subscription}
												onChange={handleChange}
												labelWidth={labelWidth}
												fullWidth
												label="subscription"
												error={
													touched.subscription && errors.subscription
														? true
														: false
												}
											>
												<MenuItem value={1}>Donate once</MenuItem>
												<MenuItem value={2} disabled>
													Donate monthly (Coming soon)
												</MenuItem>
											</Select>
											<FormHelperText error>
												{touched.subscription && errors.subscription
													? errors.subscription
													: ""}
											</FormHelperText>
										</FormControl>
									</Grid>

									<Grid
										item
										xs={12}
										sm={5}
										md={6}
										lg={4}
										className="button-wrapper"
									>
										<CmButton
											variant="contained"
											color="primary"
											size="large"
											endIcon={
												isSubmitting ? (
													<CircularProgress color="primary" size={22} />
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
