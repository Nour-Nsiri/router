import React from "react";
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
const Description = ({ match, history }) => {
    const movie = movies.find((el) => el.title == match.params.title);
    console.log(movie);
    return (
        <div>
            <h2> {movie.title}</h2>
            <p> this is the description of the :{movie.description}</p>
            <button onClick={() => history.push("/about")}>goBack</button>
        </div>
    );
};

export default Description;