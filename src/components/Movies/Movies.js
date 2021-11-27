import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div>
            <Container>
                <h1>Movies</h1>
                <Row>
                    {
                        movies.map(movie => <Movie
                            key={Movie?.id}
                            movie={movie}
                        ></Movie>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Movies;