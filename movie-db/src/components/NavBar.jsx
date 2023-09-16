import { Box, IconButton, Typography, Button, Grid } from "@mui/material";
import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import FreeSoloCreateOption from "./Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const NavBar = ({
    id,
    title,
    overview,
    vote_average,
    poster_path,
    movieList,
} = props) => {
    const backGroundImage = IMAGE_BASE_URL + poster_path;

    const styles = {
        location_year: {
            color: "gray",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "0.5rem 0",
        },
        title_styles: {
            color: "black",
            fontWeight: "700",
            fontStyle: "capitalize",
            margin: "0.3rem 0",
        },

        data_styles: {
            display: "flex",
            gap: "2rem",
            alignContent: "center",
            margin: ".5rem 0",
        },

        data_text_styles: {
            fontSize: "12px",
            marginLeft: "10px",
        },

        genre_list: {
            color: "gray",
            display: "flex",
            overflow: "hidden",
            fontSize: "7px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
        },
    };

    const boxStyle = {
        width: "100vw",
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "4rem",
    };

    const iconButton = {
        backgroundColor: "red",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
    };

    const icon = { color: "white" };

    const boxes = {
        display: "flex",
        marginTop: "1rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
    };

    const topBar = {
        display: "flex",
        justifyContent: "space-around",
    };

    const infoBox = {
        width: "24rem",
        margin: "20px 20px",
    };

    const trailer = {
        backgroundColor: "red",
        width: "120px",
        borderRadius: "20px",
        marginTop: "0.5rem",
    };
    return (
        <Box sx={boxStyle}>
            <Box sx={topBar}>
                <Box sx={boxes}>
                    <IconButton style={iconButton}>
                        <LiveTvIcon style={icon} />
                    </IconButton>
                    <Typography>MovieBox</Typography>
                </Box>

                <Box sx={boxes} className="searchBar">
                    <FreeSoloCreateOption />
                </Box>

                <Box sx={boxes}>
                    <Typography>Sign In</Typography>
                    <IconButton style={iconButton}>
                        <DragHandleIcon style={icon} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={infoBox}>
                <Typography variant="h2" component="h5">
                    {title}
                </Typography>
                <Box sx={styles.data_styles}>
                    <Box sx={{ display: "flex" }}>
                        <img
                            className="imdb-logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
                            alt=""
                        />
                        <Typography sx={styles.data_text_styles}>{`${
                            vote_average * 10
                        } / 100`}</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <img
                            className="imdb-logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1200px-Rotten_Tomatoes.svg.png"
                            alt=""
                        />
                        <Typography sx={styles.data_text_styles}>{`${
                            vote_average * 10
                        }%`}</Typography>
                    </Box>
                </Box>
                <Typography>{overview}</Typography>

                <Box sx={trailer}>
                    <IconButton className="button">
                        <PlayCircleFilledWhiteIcon />
                        <Typography>Play Trailer</Typography>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
