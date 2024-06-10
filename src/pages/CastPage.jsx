import { useEffect, useState } from 'react';
import { getCast } from 'services/Api';
import { useParams } from 'react-router-dom';
import css from './styles.module.css';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast data:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  const handleImageError = actorId => {
    setCast(prevCast => {
      const updatedCast = prevCast.map(actor => {
        if (actor.id === actorId) {
          return { ...actor, imageFailed: true };
        }
        return actor;
      });

      const sortedCast = updatedCast.sort((a, b) => (a.imageFailed ? 1 : -1));
      return sortedCast;
    });
  };

  return (
    <div className={css.containerCast}>
      <h2 className={css.castTitle}>Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li className={css.castListItem} key={actor.id}>
            <img
              className={css.castImg}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              onError={() => handleImageError(actor.id)}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastPage;
