export const initialState = {
	name: "",
	subscription: "",
	cardNumber: "1267310642367394",
	expMonth: "7",
	expYear: "2024",
	cvc: "952",
	amount: "",
};

export const donationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE":
			return { state, ...action.payload };
		default:
			return state;
	}
};
