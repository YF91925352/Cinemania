import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import { BigMovieCard } from '../../components/BigMovieCard/BigMovieCard';
import { TopCastDisplay } from '../../components/TopCastDisplay/TopCastDisplay';
import { SimilarMovies } from '../CarouselWrapper/SimilarMovies';
import { ReviewsDisplay } from '../../components/ReviewsDisplay/ReviewsDisplay';
import { useUserContext } from '../../context/UserContext';

export const MovieDetails = () => {
  const movieID = useParams().id;
  const [currentMovie, setCurrentMovie] = useState(fallBackMovies[0]);
  const [currentUsersReview, setCurrentUsersReview] = useState(undefined);
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      if (movieID && user.uid) {
        try {
          const response = await fetch(
            `${apiURL()}/reviews/${movieID}/uid/${user.uid}`,
          );
          if (response.ok) {
            const data = await response.json();

            if (data.length === 1) {
              setCurrentUsersReview(data[0]);
            } else {
              setCurrentUsersReview({ rating: 0, review_text: '' });
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [movieID, user]);

  useEffect(() => {
    if (movieID) {
      (async () => {
        try {
          const response = await fetch(`${apiURL()}/movies/${movieID}/details`);
          const movie = await response.json();
          if (movie) {
            setCurrentMovie(movie);
          }
        } catch (error) {
          setCurrentMovie({
            ...fallBackMovies[0],
            description: fallBackMovies[0].description.concat(
              ` Here what happened: ${error.message}`,
            ),
          });
        }
      })();
    }
  }, [movieID]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!currentMovie) return;

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
      }}
    >
      <BigMovieCard
        currentMovie={currentMovie}
        currentReview={currentUsersReview}
        user={user}
      />
      <TopCastDisplay movieID={currentMovie?.id} />
      <SimilarMovies categoryID={currentMovie?.category_id} />
      <ReviewsDisplay movieID={currentMovie?.id} />
    </Container>
  );
};
