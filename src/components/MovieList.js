import React from "react";
import MovieCard from "./MovieCard";

const movies = [
    {
        id: 1,
        title: "choufli hal",
        description: "tunisian serie",
    },
    {
        id: 2,
        title: "khotab al beb ",
        description: "libyan serie ",
    },
    {
        id: 3,
        title: "maktoub ",
        description: "gabes serie",
    },
];
const MovieList = () => {
    return (
        <div className="list">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieList;