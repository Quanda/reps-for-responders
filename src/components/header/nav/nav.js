import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, ListItem } from './nav.css';

// Define all the routes for the nav bar
const routes = [
  { url: '/about', title: 'What We Do' },
  { url: '/giving-options', title: 'Giving Options' },
  { url: '/get-involved', title: 'Get Involved' },
  { url: '/events', title: 'Events' },
  { url: '/donate', title: 'Donate' },
];

const Nav = ({ currentPage }) => (
  <Container>
    <ul>
      {routes.map(route => (
        <ListItem key={route.url} isCurrent={currentPage === route.url}>
          <Link to={route.url}>{route.title}</Link>
        </ListItem>
      ))}
    </ul>
  </Container>
);

Nav.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Nav;
