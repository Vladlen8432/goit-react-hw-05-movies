import { lazy } from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

import MovieDetails from './MovieDetails';

const HomePage = lazy(() => import('../pages/HomePage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route index element={<MovieDetails />} />
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

// const MovieDetails = () => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

// const MovieDetails = () => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };
