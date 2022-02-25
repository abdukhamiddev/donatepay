import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
const ButtonIcon = styled(IconButton)`
	padding: 1rem;
	border: 2px solid ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.primary.main};
	margin-left: 1rem;
	text-align: center;
`;

export default ButtonIcon;
