import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrending } from 'hooks';

const HomePage = () => {
  const { movies, isLoading, error } = useFetchTrending();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
