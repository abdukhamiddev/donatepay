import { IconButton } from "@mui/material";
import { styled } from "@mui/system";
const ButtonIcon = styled(IconButton)({
	padding: "1rem",
	border: `2px solid ${({ theme }) => theme.palette.primary.main}`,
	color: `${({ theme }) => theme.palette.primary.main}`,
	marginLeft: "1rem",
});

export default ButtonIcon;
