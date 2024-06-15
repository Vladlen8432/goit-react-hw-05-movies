import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x250';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, name, original_title, poster_path }) => (
          <li key={id} className={css.moviesListItem}>
            <Link
              state={{ from: location }}
              key={id}
              to={`/movies/${id}`}
              className={css.movieTitleLink}
            >
              <img
                className={css.movieImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title || name || original_title}
              />
              <h2 className={css.movieTitle}>
                {title || name || original_title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
