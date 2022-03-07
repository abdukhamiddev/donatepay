import { Container, Typography } from "@mui/material";

import { Styled } from "./FooterStyle";
import Unicef from "../../../assets/images/unicef-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Styled.Footer>
			<Container>
				<div className="footer__inner">
					<div className="footer__balance">
						<span className="value">$ 12.000</span>
						<Typography variant="body2">gathered so far</Typography>
					</div>

					<div className="footer__sponsors">
						<Typography variant="body2">Not Sponsored by</Typography>
						<img src={Unicef} alt="Unicef" style={{ width: 120 }} />
					</div>
					<div className="footer__privacy">
						<ul>
							<li>
								<Link to="/">Privacy</Link>
							</li>
							<li>
								<Link to="/">Cookies</Link>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</Styled.Footer>
	);
};

export default Footer;
