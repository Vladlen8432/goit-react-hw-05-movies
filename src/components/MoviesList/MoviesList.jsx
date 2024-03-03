import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x250';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name, original_title, poster_path }) => (
        <li key={id}>
          <Link state={{ from: location }} key={id} to={`/movies/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : defaultImg
              }
              alt={title || name || original_title}
            />
            <h2>{title || name || original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
