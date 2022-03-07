import * as Yup from "yup";
import valid from "card-validator";

export const stepTwoSchema = Yup.object().shape({
	cardNumber: Yup.string()
		.test(
			"test-number",
			"Card Number is invalid",
			(value) => valid.number(value).isValid
		)
		.required("Please make sure you entered  a card number"),
	expMonth: Yup.string()
		.min(1, "Please enter valid expiry month")
		.max(2, "Please enter valid expiry month")
		.required("Please enter expiry month"),
	expYear: Yup.string()
		.min(1, "Please enter valid expiry year")
		.max(2, "Please enter valid expiry year")
		.required("Please enter expiry Year"),
	amount: Yup.string()

		.max(4, "Donations from this form cannot be over $10000")
		.required("Please pick an amount to donate"),
	cvc: Yup.string()
		.min(3, "Please enter valid CVC code")
		.max(3, "Please enter valid CVC code")
		.required("Please enter CVC code"),
});
