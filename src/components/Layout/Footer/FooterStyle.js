import styled from "styled-components";

const Footer = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.palette.grey[700]};
	height: 120px;
	overflow: hidden;
	.footer {
		&__inner {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		&__balance {
			display: flex;
			align-items: center;
			.value {
				color: ${({ theme }) => theme.palette.primary.main};
				font-family: "Montserrat";
				font-size: 2rem;
				font-weight: 700;
				margin-inline-end: ${({ theme }) => `${theme.spacing(2)}px`};
				margin-right: 0.6rem;
			}
		}
		&__sponsors {
			display: flex;
			align-items: center;
			justify-content: space-between;
			body2 {
			}
			img {
				padding-left: 1rem;
			}
			@media (max-width: 800px) {
				display: none;
			}
			p {
				margin-inline-end: ${({ theme }) => `${theme.spacing(2)}px`};
			}
		}
		&__privacy {
			ul {
				display: flex;
				list-style: none;
				li {
					a {
						transition: color 0.3s ease-out;
						padding: 1rem;
						&:hover {
							color: ${({ theme }) => theme.palette.primary.main};
						}
					}
				}
			}
		}
	}
`;

export const Styled = {
	Footer,
};
