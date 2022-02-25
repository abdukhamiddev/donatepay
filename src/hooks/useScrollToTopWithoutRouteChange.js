import { useEffect, useRef } from "react";

export const useScrollToTopWithoutRouteChange = (step) => {
	const target = useRef();
	useEffect(() => {
		target.current.scrollIntoView(true);
	}, [step]);

	return { target };
};
