import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrending } from 'hooks';
import Loader from 'components/SharedLayout/Loader';
import css from './styles.module.css';

const HomePage = () => {
  const { movies, isLoading, error } = useFetchTrending();

  return (
    <>
      {isLoading && (
        <div className={css.loaderContainer}>
          <Loader />
        </div>
      )}
      {error && <p>Something went wrong</p>}
      {isLoading === false && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </>
  );
};

export default HomePage;
