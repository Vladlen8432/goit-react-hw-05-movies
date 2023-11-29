import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/Api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        console.log('Movie details from component:', details);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>

      <p>Release Date: {movieDetails.release_date}</p>
      <p>Vote Average: {movieDetails.vote_average}</p>
      <p>Runtime: {movieDetails.runtime} minutes</p>

      {/* <Cast movieId={id} />
      <Reviews movieId={id} /> */}
    </div>
  );
};

export default MovieDetailsPage;
