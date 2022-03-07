import {
	CircularProgress,
	FormControl,
	FormHelperText,
	Grid,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import React from "react";

import { stepTwoSchema } from "./validationSchema";
import { motion } from "framer-motion";
import { Formik } from "formik";

import { ReactComponent as DollarSignIcon } from "../../../assets/icons/dollar-sign.svg";
import { ReactComponent as CreditCardIcon } from "../../../assets/icons/credit-card.svg";
import { ReactComponent as StepTwoSvg } from "../../../assets/svg/undraw_credit_card_payment_yb88.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg";
import { ReactComponent as KeyIcon } from "../../../assets/icons/key.svg";
import { ReactComponent as AlertIcon } from "../../../assets/icons/alert-circle.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import CmButton from "../../CmButton";

const StepTwo = ({ nextStep, data, dispatch }) => {
	return (
		<Grid
			container
			spacing={10}
			alignItems="center"
			justifyContent="space-between"
		>
			<Grid item md={6} className="image">
				<div className="c-image">
					<StepTwoSvg />
				</div>
			</Grid>
			<Grid item md={6} className="hero">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Typography variant="h4" className="hero__title">
						One more <span> step.</span>
					</Typography>
					<Typography variany="body1" className="hero__paragraph">
						Help us draw a smile on the faces of underprivileged children,buy
						them breakfast, or pay for their education
					</Typography>
					<div className="step-one">
						<Formik
							initialValues={data}
							validationSchema={stepTwoSchema}
							onSubmit={(values) => {
								setTimeout(() => {
									nextStep(3);
								}, [1000]);
							}}
						>
							{({
								handleSubmit,
								handleChange,
								values,
								isSubmitting,
								errors,
								touched,
							}) => (
								<form onSubmit={handleSubmit}>
									<FormControl fullWidth variant="outlined">
										<InputLabel
											htmlFor="outlined-adornment-year"
											error={touched.cardNumber && errors.cardNumber && true}
										>
											Card number
										</InputLabel>
										<OutlinedInput
											variant="outlined"
											label="Card number"
											value={values.cardNumber}
											onChange={handleChange}
											name="cardNumber"
											placeholder="Please enter your card's number"
											error={
												touched.cardNumber && errors.cardNumber ? true : false
											}
											endAdornment={
												<InputAdornment position="end">
													<CreditCardIcon
														style={{ color: "gray", width: 18 }}
													/>
												</InputAdornment>
											}
										/>
										<FormHelperText error>
											{touched.cardNumber && errors.cardNumber
												? errors.cardNumber
												: ""}
										</FormHelperText>
									</FormControl>

									<Grid
										container
										alignItems="center"
										justify="space-between"
										spacing={2}
									>
										<Grid item xs={12} sm={6} md={6} lg={6}>
											<Grid
												container
												alignItems="center"
												justify="space-between"
												spacing={2}
											>
												<Grid item xs={6} sm={6} md={6} lg={6}>
													<FormControl fullWidth variant="outlined">
														<InputLabel
															htmlFor="outlined-adornment-month"
															error={
																touched.expMonth && errors.expMonth
																	? true
																	: false
															}
														>
															MM
														</InputLabel>
														<OutlinedInput
															variant="outlined"
															placeholder="Exp MM"
															label="MM"
															fullWidth
															value={values.expMonth}
															onChange={handleChange}
															name="expMonth"
															error={
																touched.expMonth && errors.expMonth
																	? true
																	: false
															}
															endAdornment={
																<InputAdornment position="end">
																	<CalendarIcon
																		style={{ color: "gray", width: 18 }}
																	/>
																</InputAdornment>
															}
														/>
													</FormControl>
												</Grid>
												<Grid item xs={6} sm={6} md={6} lg={6}>
													<FormControl fullWidth variant="outlined">
														<InputLabel
															htmlFor="outlined-adornment-year"
															error={
																touched.expYear && errors.expYear ? true : false
															}
														>
															YY
														</InputLabel>
														<OutlinedInput
															variant="outlined"
															placeholder="Exp YY"
															label="YY"
															value={values.expYear}
															onChange={handleChange}
															name="expYear"
															fullWidth
															error={
																touched.expYear && errors.expYear ? true : false
															}
															endAdornment={
																<InputAdornment position="end">
																	<CalendarIcon
																		style={{ color: "gray", width: 18 }}
																	/>
																</InputAdornment>
															}
														/>
													</FormControl>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12} sm={6} md={6} lg={6}>
											<FormControl fullWidth variant="outlined">
												<InputLabel
													htmlFor="outlined-adornment-year"
													error={touched.cvc && errors.cvc ? true : false}
												>
													Code (CVC)
												</InputLabel>
												<OutlinedInput
													variant="outlined"
													label="Code (CVV)"
													placeholder="Card code"
													value={values.cvc}
													name="cvc"
													onChange={handleChange}
													error={touched.cvc && errors.cvc ? true : false}
													endAdornment={
														<InputAdornment position="end">
															<KeyIcon style={{ color: "gray", width: 18 }} />
														</InputAdornment>
													}
												/>
											</FormControl>
										</Grid>
									</Grid>

									<Grid
										container
										alignItems={
											touched.amount && errors.amount ? "flex-start" : "center"
										}
										justify="space-between"
										spacing={2}
									>
										<Grid item xs={12} sm={7} md={6} lg={8}>
											<FormControl fullWidth variant="outlined">
												<InputLabel
													htmlFor="outlined-adornment-year"
													error={touched.amount && errors.amount ? true : false}
												>
													Amount
												</InputLabel>
												<OutlinedInput
													variant="outlined"
													label="Amount"
													value={values.amount}
													onChange={handleChange}
													name="amount"
													placeholder="Choose an amount in USD"
													error={touched.amount && errors.amount ? true : false}
													endAdornment={
														<InputAdornment position="end">
															<DollarSignIcon
																style={{ color: "gray", width: 18 }}
															/>
														</InputAdornment>
													}
												/>
												<FormHelperText error>
													{touched.amount && errors.amount ? errors.amount : ""}
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
														<CheckIcon />
													)
												}
												type="submit"
												disabled={isSubmitting}
											>
												Donate
											</CmButton>
										</Grid>
									</Grid>
									<Grid container>
										<div style={{ paddingRight: "8px" }}>
											<AlertIcon style={{ color: "blue", width: 16 }} />
										</div>

										<Typography variant="caption" className="hero__caption">
											No worries, your card information is secured and never
											saved.
										</Typography>
									</Grid>
								</form>
							)}
						</Formik>
					</div>
				</motion.div>
			</Grid>
		</Grid>
	);
};

export default StepTwo;
