import React from 'react';
import { Container } from '@mui/material';

export function MovieDetailsLayout({ children }) {
  const LayoutContainerStyle = {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    aligntems: 'center',
    justifyContent: 'center',
  };

  return (
    <Container style={LayoutContainerStyle} maxWidth="lg">
      {children}
    </Container>
  );
}
