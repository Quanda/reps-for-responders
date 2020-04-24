import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

const Nav = () => (
  <Navbar transparent>
    <Navbar.Brand>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu >
      <Navbar.Container position="end">
        {/*
          <Navbar.Item href='/about'>
            About
          </Navbar.Item>
          <Navbar.Item href="/events">
            Events
          </Navbar.Item> 
          <Navbar.Item href="/donate">
            Donate
          </Navbar.Item>
        */}                                            
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Nav;
