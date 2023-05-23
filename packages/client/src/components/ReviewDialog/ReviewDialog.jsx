import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';
import { RatingStars } from '../RatingStars/RatingStars';
import styled from '@emotion/styled';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';

export function ReviewDialog({ initialState, handleClose, user, movieId }) {
  const [formData, setFormData] = useState(fallBackMovies);
  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const response = await fetch(
            // Here I use A fixed uid value 123543d.This account doesn't have any reviews.When we realize the function of adding new reviews,I can use user.uid instaed
            `${apiURL()}/reviews/${movieId}/uid/123543d`,
          );
          if (response.ok) {
            const data = await response.json();
            if (data) {
              setFormData(data);
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [movieId]);

  return (
    <Dialog open={initialState} onClose={handleClose}>
      <ReviewTitle
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        Review <Avatar />
      </ReviewTitle>
      <ReviewContent
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        <RatingStars
          rating={formData[0].movie_id === movieId ? formData[0].rating : 0}
        />
        <DialogContentText sx={{ color: 'mainGreen' }}>
          Please, write your review of the movie
        </DialogContentText>
        <ReviewContentText
          autoFocus
          margin="dense"
          id="name"
          label="review"
          multiline
          rows={4}
          fullWidth
          variant="filled"
          InputLabelProps={{
            sx: {
              color: 'mainGreen',
              textTransform: 'capitalize',
            },
          }}
          InputProps={{ sx: { color: 'mainGreen' } }}
          value={
            formData[0].movie_id === movieId
              ? formData[0].review_text
              : 'Leave your first review about this movie'
          }
        />
      </ReviewContent>
      <DialogActions
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        <Button onClick={handleClose} sx={{ backgroundColor: 'mainGreen' }}>
          Delete review
        </Button>
        <Button onClick={handleClose} sx={{ backgroundColor: 'mainGreen' }}>
          Save review
        </Button>
        <Button onClick={handleClose} sx={{ backgroundColor: 'mainGreen' }}>
          Update review
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const ReviewTitle = styled(DialogTitle)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const ReviewContent = styled(DialogContent)`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
`;
const ReviewContentText = styled(TextField)`
  & .input {
    color: 'mainGreen';
  }
`;