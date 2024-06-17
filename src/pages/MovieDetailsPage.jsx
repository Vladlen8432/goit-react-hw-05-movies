import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/Api';
import css from './styles.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        // console.log('Movie details from component:', details);
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
    <div className={css.movieDetailsStyleContainer}>
      {movieDetails ? (
        <div className={css.movieDetailsStyle}>
          <h2 className={css.movieDetailsTitle}>{movieDetails.title}</h2>
          <div className={css.containerMoviesDetails}>
            <div className={css.containerImg}>
              <img
                className={css.movieDetailsImg}
                src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>

            <div className={css.containerContent}>
              <p className={css.movieDetailsDescr}>{movieDetails.overview}</p>
              <p className={css.movieDetailsDescr}>
                Release Date: {movieDetails.release_date}
              </p>
              <p className={css.movieDetailsDescr}>
                Vote Average: {movieDetails.vote_average}
              </p>
              <p className={css.movieDetailsDescr}>
                Runtime: {movieDetails.runtime} minutes
              </p>
            </div>
          </div>

          <div className={css.containerCastReviewsList}>
            <ul className={css.castReviewsList}>
              <li className={css.castReviewsListItem}>
                <Link className={css.castLink} to={`/movies/${movieId}/cast`}>
                  Cast
                </Link>
              </li>
              <li className={css.castReviewsListItem}>
                <Link
                  className={css.castLink}
                  to={`/movies/${movieId}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;

/* <CastPage movieId={movieId} />
<ReviewsPage movieId={movieId} /> */

// import CastPage from './CastPage';
// import ReviewsPage from './ReviewsPage';

// return (
//   <div>
//     <h1>{movieDetails.title}</h1>
//     <p>{movieDetails.overview}</p>

//     <p>Release Date: {movieDetails.release_date}</p>
//     <p>Vote Average: {movieDetails.vote_average}</p>
//     <p>Runtime: {movieDetails.runtime} minutes</p>

//     <CastPage movieId={id} />
//     <ReviewsPage movieId={id} />
//   </div>
// );
