import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Categories } from '../../components/Categories/Categories';
import { MovieList } from '../../components/MovieList/MovieList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { MovieListProvider } from '../../context/movieListContext';

export const MovieListPage = () => {
  const theme = useTheme();

  return (
    <MovieListProvider>
      <Container
        sx={{
          pt: '3rem',
          pb: '3rem',
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              alignItems: 'flex-end',
            },
          }}
        >
          <Categories />
          <SearchBar />
        </Box>
        <MovieList />
      </Container>
    </MovieListProvider>
  );
};
