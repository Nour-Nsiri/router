import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src="https://www.indiewire.com/wp-content/uploads/2020/01/SpenserConfidential_Vertical_Main_RGB_PRE_wRating-1-e1583423024272.jpg?resize=987,600"
            />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Link to={'/description/${movie.title}'}>
                    <Button variant="primary">Go to desc</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;