import { useEffect, useState } from 'react';
import { getReviews } from 'services/Api';
import { useParams } from 'react-router-dom';
import css from './styles.module.css'

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews data:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li className={css.reviewsListItem} key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
