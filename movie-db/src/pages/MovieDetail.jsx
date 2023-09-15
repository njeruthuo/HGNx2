import React, { useEffect, useState } from "react";
import PermanentDrawerLeft from "./SideBar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";

import {
    Box,
    Button,
    Grid,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Rating,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import StandardImageList from "../components/Gallery";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "7ade6bbe4bba60190f504a7e5436a500";

const MovieDetail = () => {
    const [detail, setDetail] = useState();

    const { id } = useParams();
    const MOVIE_DETAIL_URL =
        `https://api.themoviedb.org/3/movie/${id}?api_key=` + API_KEY;

    useEffect(() => {
        fetch(MOVIE_DETAIL_URL)
            .then((response) => response.json())
            .then((data) => {
                setDetail(data);
            })
            .then((error) => console.log(error));
    }, []);

    console.log(detail);

    return (
        <Grid container>
            <Grid item lg={2} md={4} sm={0} xs={0}>
                <PermanentDrawerLeft />
            </Grid>
            <Grid item lg={10} md={8} sm={12} xs={12}>
                <Box sx={{ marginBottom: "2rem" }}>
                    <Box className="box">
                        <img
                            className="detail-image"
                            src={IMAGE_BASE_URL + detail?.poster_path}
                            alt={detail?.title}
                        />
                        <Box className="play-trailer">
                            <IconButton
                                sx={{
                                    background: "white",
                                    padding: "10px",
                                    margin: "5px",
                                }}
                            >
                                <PlayCircleOutlinedIcon />
                            </IconButton>
                            <Typography>Play Trailer</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Grid container sx={{ marginLeft: "2rem" }}>
                            <Grid item lg={8} md={12}>
                                <Box
                                    className="grid"
                                    sx={{
                                        display: "flex",
                                        fontSize: "large",
                                        fontWeight: "700",
                                    }}
                                >
                                    <Typography
                                        data-testid="movie-title"
                                        sx={{
                                            display: "flex",
                                            fontSize: "large",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {detail?.title} ·
                                    </Typography>
                                    <Typography
                                        data-testid="movie-release-date"
                                        sx={{
                                            display: "flex",
                                            fontSize: "large",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {new Date(
                                            detail?.release_date
                                        ).getFullYear()}
                                        ·
                                    </Typography>
                                    <Typography
                                        data-testid="movie-runtime"
                                        sx={{
                                            fontSize: "large",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {detail?.runtime} ·
                                    </Typography>
                                    {detail?.genres?.map((name, index) => (
                                        <Button key={index}>{name.name}</Button>
                                    ))}
                                </Box>
                                <Box>
                                    <Typography data-testid="movie-overview">
                                        {detail?.overview}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button
                                        variant="contained"
                                        sx={{ marginTop: "3rem" }}
                                    >
                                        Top rated Movie #65
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={12}>
                                <Box sx={{ display: "flex" }}>
                                    <Rating
                                        name="read-only"
                                        value={7}
                                        size="small"
                                        readOnly
                                    />
                                    <Typography>7 / 10</Typography>
                                </Box>
                                <Button
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        margin: "1rem",
                                    }}
                                    variant="contained"
                                >
                                    <HighlightAltIcon />
                                    <Typography>See show times</Typography>
                                </Button>
                                <Button
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        margin: "1rem",
                                    }}
                                    variant="contained"
                                >
                                    <MenuOutlinedIcon />
                                    <Typography>More watch options</Typography>
                                </Button>
                                <Box>
                                    <StandardImageList />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MovieDetail;
