import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import { BigMovieCard } from '../../components/BigMovieCard/BigMovieCard';
import { TopCastDisplay } from '../../components/TopCastDisplay/TopCastDisplay';
import { SimilarMovies } from '../CarouselWrapper/SimilarMovies';
import { ReviewsDisplay } from '../../components/ReviewsDisplay/ReviewsDisplay';

export const MovieDetails = () => {
  const movieID = useParams().id;
  const [currentMovie, setCurrentMovie] = useState(fallBackMovies[0]);

  const [currentUsersReview, setCurrentUsersReview] = useState(undefined);
  const [currentUserId, setCurrentUserId] = useState(undefined);
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      (async () => {
        const response = await fetch(`${apiURL()}/users/${user.uid}`);
        const getUser = await response.json();
        if (getUser) {
          setCurrentUserId(getUser[0].id);
        }
      })();
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      if (movieID && user.uid) {
        try {
          const response = await fetch(
            `${apiURL()}/reviews/${movieID}/uid/${user.uid}`,
          );

          if (response.ok) {
            const data = await response.json();

            if (data) {
              if (!currentUsersReview) {
                setCurrentUsersReview(data[0]);
              } else if (
                !(
                  Object.values(currentUsersReview).includes(data[0].rating) &&
                  Object.values(currentUsersReview).includes(
                    data[0].review_text,
                  ) &&
                  Object.values(currentUsersReview).includes(data[0].reviewID)
                )
              ) {
                setCurrentUsersReview(data[0]);
              }
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [movieID, user, currentUsersReview]);


  useEffect(() => {
    if (movieID) {
      (async () => {
        const response = await fetch(`${apiURL()}/movies/${movieID}/details`);
        const movie = await response.json();
        if (movie) {
          setCurrentMovie(movie);
        }
      })();
    }
  }, [movieID]);
  if (!currentMovie) return;
  return (
    <Container maxWidth="xl" sx={{ gap: '3rem' }}>
      <BigMovieCard currentMovie={currentMovie} />
      <TopCastDisplay movieID={currentMovie?.id} />

      <SimilarMovies categoryID={currentMovie?.category_id} />
      <ReviewsDisplay movieID={currentMovie?.id} />
    </Container>
  );
};
