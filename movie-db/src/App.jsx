import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import SkeletonStructure from "./pages/SkeletonStructure";

const API_KEY = "7ade6bbe4bba60190f504a7e5436a500";
const query = "query";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_URL = `${BASE_URL}/?api_key=${API_KEY}&query=${query}`;

function App() {
    const [movies, setMovies] = useState([]);
    const [cover, setCover] = useState();
    const [moviesList, setMoviesList] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results.slice(1, 11));
                setCover(data.results[0]);
                setMoviesList(data.results);
                setLoading(false);
            })
            .then((error) => console.log(error));
    }, []);
    return (
        <>
            <NavBar {...cover} movieList={moviesList} loading={loading} />
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        margin: "1rem",
                    }}
                >
                    <Typography variant="h4">Featured Movie</Typography>
                    <>
                        <IconButton>
                            <Typography sx={{ color: "red" }}>
                                see more
                            </Typography>
                            <ChevronRightIcon sx={{ color: "red" }} />
                        </IconButton>
                    </>
                </Box>
                {loading ? (
                    <SkeletonStructure />
                ) : (
                    <Grid container spacing={3}>
                        {movies.map((movie, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <MovieList {...movie} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>

            <Footer />
        </>
    );
}

export default App;
