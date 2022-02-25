import { Modal } from "@mui/material";
import { styled } from "@mui/material/styles";

const CModal = styled(Modal)`
	display: flex;
	align-items: center;
	justify-content: center;
	div {
		outline: none;
		padding: 0;
		margin: 0 auto;
	}
	.video-wrapper {
		width: 80vw;
		height: calc(80vw / 1.7777777778);
		border-radius: 20px;
		overflow: hidden;
		padding: 0;
		margin: 0 auto;
		@media (max-width: 700px) {
			width: 92vw;
			height: calc(92vw / 1.77777777778);
		}
	}
`;
export default CModal;
