import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.containerMovieIcon}>
          <NavLink className={css.mainLogo} to="/">
            <FontAwesomeIcon className={css.movieIcon} icon={faFilm} />
            <h2 className={css.movieFinderTitle}>Movie Finder</h2>
          </NavLink>
        </div>
        <nav>
          <ul className={css.navigationList}>
            <li>
              <NavLink to="/" className={css.navigationItem}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.navigationItem}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
