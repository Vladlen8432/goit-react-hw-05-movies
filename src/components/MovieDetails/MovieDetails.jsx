import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        console.log('Movie details from component:', details);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Vote Average: {movieDetails.vote_average}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>

          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
