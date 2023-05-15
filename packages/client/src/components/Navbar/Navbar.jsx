import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Box,
  Button,
  Grid,
  Link,
  MenuItem,
  Toolbar,
} from '@mui/material';
import React from 'react';

const NavLink = (props) => <Link underline="none" color="inherit" {...props} />;

export const Navbar = () => {
  return (
    <StyledAppBar>
      <Box>
        <Toolbar
          sx={{
            height: '4rem',
            justifyContent: 'space-between',
          }}
        >
          <IconMenu>
            <NavIcon>
              <PersonIcon sx={{ borderRight: '2px solid #000000' }} />
            </NavIcon>
          </IconMenu>
          <Grid item xs={12} align="center">
            <Box>
              <NavLink href="/">
                <img
                  src="https://i.ibb.co/7JGHhKm/image.png"
                  alt="logo"
                  width="250"
                  height="68"
                />
              </NavLink>
            </Box>
          </Grid>
          <IconMenu>
            <NavIcon>
              <ShoppingCartIcon />
            </NavIcon>
            <NavIcon>
              <FavoriteBorderIcon />
            </NavIcon>
          </IconMenu>
        </Toolbar>
      </Box>
      <Grid
        sx={{
          display: 'flex',
          height: '2.75rem',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000000',
          gap: '8rem',
        }}
      >
        <NavButton>
          <NavLink href="/movies">CATEGORIES</NavLink>
        </NavButton>
        <NavButton>
          <NavLink href="/top100">THE TOP 100</NavLink>
        </NavButton>
        <NavButton>
          <NavLink href="/about">ABOUT</NavLink>
        </NavButton>
        <NavButton>
          <NavLink href="/contact-us">CONTACT US</NavLink>
        </NavButton>
      </Grid>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.mainGreen};
  position: sticky;
  top: 0;
  font-family: 'Inter', sans-serif;
`;

const NavIcon = styled.button`
  background-color: transparent;
  color: 'black';
  cursor: pointer;
  border: none;
  width: '2rem';
  height: '2rem';
  border-right: '2px solid #000000';
  padding-right: '.5rem';
  outline: none;
  &:hover {
    color: ${(props) => props.theme.palette.hoverRed};
  }
`;

const IconMenu = styled(MenuItem)`
  box-shadow: none;
  &:hover {
    background-color: transparent;
  }
`;

const NavButton = styled(Button)`
  color: white;
  font-size: 0.9rem;
  &:hover {
    color: ${(props) => props.theme.palette.hoverRed};
  }
`;
