import { Box, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { genres } from "../consts/data";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    genre_ids,
}) => {
    const [fav, setFav] = useState(false);

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
            justifyContent: "space-between",
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

    const matchingNames = genre_ids.map((idToMatch) => {
        const matchingObject = genres.find((item) => item.id === idToMatch);
        return matchingObject ? matchingObject.name : null;
    });

    return (
        <>
            <Paper
                data-testid="movie-card"
                sx={{ paddingBottom: "1rem" }}
                className="paper-card"
                square={false}
            >
                <img
                    data-testid="movie-poster"
                    className="poster-image"
                    src={IMAGE_BASE_URL + poster_path}
                    alt={
                        <Skeleton
                            variant="rectangular"
                            width={"100%"}
                            height={"auto"}
                        />
                    }
                />
                <Box
                    sx={{
                        margin: "1rem",
                    }}
                >
                    <Typography
                        data-testid="movie-release-date"
                        sx={styles.location_year}
                    >{`USA, ${new Date(
                        release_date
                    ).getFullYear()}`}</Typography>
                    <Link to={`/movies/${id}`}>
                        <Typography
                            data-testid="movie-title"
                            sx={styles.title_styles}
                            variant="subtitle2"
                        >
                            {title}
                        </Typography>
                    </Link>

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

                    <Box sx={styles.genre_list}>
                        {matchingNames.map((name, index) => (
                            <Typography
                                key={index}
                                sx={{ paddingRight: "5px" }}
                            >
                                {name}
                            </Typography>
                        ))}
                    </Box>

                    <Box className="fav-icon">
                        <IconButton onClick={() => setFav(!fav)}>
                            {fav ? (
                                <FavoriteIcon style={{ color: "red" }} />
                            ) : (
                                <FavoriteBorderOutlinedIcon />
                            )}
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </>
    );
};

export default MovieList;
