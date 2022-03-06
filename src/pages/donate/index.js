import { Container } from "@mui/material";
import React, { useState, useReducer } from "react";
import StepOne from "../../components/Donate/StepOne";
import StepThree from "../../components/Donate/StepThree";
import StepTwo from "../../components/Donate/StepTwo";
import { useScrollToTopWithoutRouteChange } from "../../hooks/useScrollToTopWithoutRouteChange";
import { donationReducer, initialState } from "../../reducers";
import { Styled } from "./styles";

const DonatePage = () => {
	const [step, setStep] = useState(1);
	const nextStep = (step) => {
		setStep(step);
		window.scrollTo(0, 0);
	};
	const { target } = useScrollToTopWithoutRouteChange(step);
	const [donationState, donationDispatch] = useReducer(
		donationReducer,
		initialState
	);

	return (
		<Styled.Donate
			ref={target}
			className="page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Container>
				{step === 1 ? (
					<StepOne
						nextStep={nextStep}
						data={donationState}
						dispatch={donationDispatch}
					/>
				) : step === 2 ? (
					<StepTwo />
				) : step === 3 ? (
					<StepThree />
				) : (
					<StepOne />
				)}
				hi
			</Container>
		</Styled.Donate>
	);
};

export default DonatePage;
