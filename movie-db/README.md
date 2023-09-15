# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

API_KEY = "7ade6bbe4bba60190f504a7e5436a500"
READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRlNmJiZTRiYmE2MDE5MGY1MDRhN2U1NDM2YTUwMCIsInN1YiI6IjY1MDFmNjg2ZGI0ZWQ2MTAzNDQwNDQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJIUVqBM43TEEdVomUXLfT58N6lut0_bRd5lLaigx5w"

https://api.themoviedb.org/3/search/movie?query=john%20wick%203&api_key=your-api
src={`https://image.tmdb.org/t/p/original${backdrop_path}`}

const fetchMovies = async () => {
try {
const response = await fetch(`${apiUrl}?${params}`);
const data = await response.json();
if (data.results.length > 0) {
const movies = data.results.slice(0, 15);
setMovies(movies);
}
} catch (error) {
console.error('Error fetching popular movies:', error);
}
};
fetchMovies();
}, []);




