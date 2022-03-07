import styled from "styled-components";

import { motion } from "framer-motion";

const Donate = styled(motion.div)`
	.hero {
		&__title {
			margin-bottom: 3px;
		}
		&__paragraph {
			margin-bottom: 30px;
		}
		&__caption {
			margin-bottom: 3px;
		}
	}
	.step-one {
		form {
			display: grid;
			grid-template-columns: 1fr;
			grid-row-gap: 1.33rem;
			.button-wrapper {
				text-align: right;
				button {
					width: 100%;
				}
				@media (max-width: 600px) {
					text-align: left;
					margin-top: 1.33rem;
					button {
						width: 100%;
					}
				}
			}
		}
	}
`;

export const Styled = {
	Donate,
};
