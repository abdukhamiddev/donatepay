import * as yup from "yup";

const schemaFirstStep = yup.object().shape({
	email: yup.string().email("Please make sure you entered a valid email"),
	name: yup
		.string()
		.min(4, "Please enter a correct full name")
		.max(50, "This name is too long")
		.required("Please enter your name"),
	subscription: yup.string().required("Please choose a subscription"),
});

export default schemaFirstStep;
