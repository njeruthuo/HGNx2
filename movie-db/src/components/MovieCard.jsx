import { Box, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = () => {
    const [fav, setFav] = useState(false);
    return (
        <>
            <Paper className="paper-card" elevation={2} square={false}>
                <img
                    className="poster-image"
                    src={IMAGE_BASE_URL + poster_path}
                    alt={
                        <Skeleton
                            variant="rectangular"
                            width={210}
                            height={118}
                        />
                    }
                />
                <Box
                    sx={{
                        margin: "1rem",
                    }}
                >
                    <Typography variant="subtitle2" component="body2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="h6" color="gray">
                        {release_date}
                    </Typography>
                    <Box className="fav-icon">
                        <IconButton onClick={() => setFav(!fav)}>
                            {fav ? (
                                <FavoriteIcon />
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

export default MovieCard;
