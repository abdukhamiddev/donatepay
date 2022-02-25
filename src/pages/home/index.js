import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Styled } from "./HomeStyle";
import HomeHeroImage from "../../assets/images/home-hero.png";
import { ReactComponent as PlayButtonIcon } from "../../assets/icons/play.svg";
import ButtonIcon from "../../components/ButtonIcon";
import CmButton from "../../components/CmButton";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import CModal from "../../components/CModal";
import { useState } from "react";

const Home = () => {
	const [isVideoPlaying, setVideoPlaying] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		setVideoPlaying(true);
	};
	const handleOpen = () => {
		setOpen(true);
		setVideoPlaying(true);
	};

	return (
		<Styled.Home
			className="page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Container>
				<Grid
					container
					spacing={10}
					alignItems="center"
					justifyContent="space-between"
				>
					<Grid item md={6} className="image">
						<div className="c-image">
							<img src={HomeHeroImage} alt="Children starving" />
						</div>
					</Grid>
					<Grid item md={6} className="hero">
						<Typography variant="h1" className="hero__title" fontWeight="bold">
							We need your <span className="highlight">help!</span>
						</Typography>
						<Typography variant="body1" className="hero__paragraph">
							We’ve all got one. A thing we love doing, a thing we’ve always
							wanted to do or just a thing we could do. Whatever it is, when we
							do it, we can really make a difference. Do your thing and change
							people’s lives.
						</Typography>
						<div className="hero__buttons">
							<Link to="/donate">
								<CmButton variant="contained" color="primary">
									Donate now
								</CmButton>
							</Link>
							<ButtonIcon variant="contained" onClick={handleOpen}>
								<PlayButtonIcon />
							</ButtonIcon>
						</div>
						<Typography variant="caption" className="hero__caption">
							$5/month, be a part of saving children's lives.
						</Typography>
					</Grid>
				</Grid>
				<CModal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={open}
					onClose={handleClose}
				>
					<div className="video-wrapper">
						<ReactPlayer
							playing={isVideoPlaying}
							url="https://www.youtube.com/watch?v=E1xkXZs0cAQ"
							width="100%"
							height="100%"
						/>
					</div>
				</CModal>
			</Container>
		</Styled.Home>
	);
};

export default Home;
