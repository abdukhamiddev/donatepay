import { motion } from "framer-motion";
import styled from "styled-components";

const Home = styled(motion.div)`
	.hero {
		&__title {
			margin-bottom: 1rem;
			font-weight: 900;
			font-size: 39px;
			line-height: 48px;
		}
		&__paragraph {
			margin-bottom: 2rem;
			font-weight: 600;
		}
	}
`;
export const Styled = {
	Home,
};
