import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Movie = ({ movie }) => {
    const { name, image } = movie.show;
    console.log(movie.show);
    return (
        <Col xs={12} md={6} lg={3}>
            <Card className="my-3">
                <Card.Img variant="top" src={image?.medium} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Movie;