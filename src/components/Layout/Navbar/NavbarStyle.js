import styled from "styled-components";

const Navbar = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	z-index: 999;
	align-items: center;
	overflow: hidden;
	@media (max-width: 800px) {
		height: 150px;
	}
	margin-bottom: 2rem;

	.navbar {
		&__inner {
			display: flex;
			height: 100%;
			justify-content: space-between;
			padding: 1rem 0;
			align-items: center;
			justify-content: space-between;
			@media (max-width: 800px) {
				flex-direction: column;
			}
		}

		&__logo {
			@media (max-width: 800px) {
				margin-bottom: 1.25rem;
			}
			a {
				padding: 1rem;
				padding-inline-start: 0;
				font-weight: 700;
				font-family: "Montserrat";
			}
		}
		&__menu {
			ul {
				display: flex;
				list-style: none;
				height: 100%;
				align-items: center;
				justify-content: flex-end;
				li {
					a {
						padding: 1rem;
						font-weight: 500;
						transition: all 0.6s ease;
						font-family: "Montserrat";
						text-decoration: none;
						font-size: 16px;
						position: relative;
						color: ${({ theme }) => theme.palette.grey[700]};
						&::before {
							content: "";
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
							width: 6px;
							height: 6px;
							border-radius: 100%;
							margin: 0 auto;
							background-color: transparent;
							transition: all 0.5s ease;
						}
						&.active {
							color: ${({ theme }) => theme.palette.primary.main};

							&::before {
								background-color: ${({ theme }) => theme.palette.primary.main};
							}
						}
						&:hover {
							color: ${({ theme }) => theme.palette.primary.main};
						}
					}
					&::last-of-type {
						a {
							margin-inline-end: 0;
						}
					}
				}
			}
		}
	}
`;

export const Styled = {
	Navbar,
};
