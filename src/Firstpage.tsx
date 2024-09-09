import styled from '@emotion/styled';
import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import fr from './fr.jpg'; // Adjust the import path accordingly

// Styled components
const Nav = styled('nav')`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: whitesmoke;
  z-index: 1000;
  padding: 25px;
  opacity: 0.8;
`;

const NavList = styled('ul')`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  padding-right: 30px;
`;

const NavItem = styled('li')`
  margin: 0 15px;
  display: flex;
  color: black;
  align-items: center;
`;

const NavLink = styled(RouterLink)`
  color: black;
  text-decoration: none;
  font-family: monospace;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const NavButton = styled(RouterLink)`
  background-color: whitesmoke;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  border: solid;
  border-radius: 40px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d64161;
    color: white;
  }
`;

const Front = styled('div')`
  position: relative;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const IntroContainer = styled('div')`
  position: absolute;
  bottom: 100px;
  left: 60px;
  text-align: left;
  max-width: 600px;
`;

const IntroPara = styled(Typography)`
  margin-bottom: 35px;
  font-weight: bold;
  color: whitesmoke;
`;

const LearnButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  padding: 20px 30px;
  color: white;
  background-color: black;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
`;

const Second = styled('div')`
  border: 2px solid black;
  color: black;
  background-color: whitesmoke;
  text-align: center;
  margin: 10px;
  height: 100vh;
`;

const Heading = styled(Typography)`
  padding-top: 100px;
`;

const Intro = styled('div')`
  margin-top: 100px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
`;

const Third = styled('div')`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`;

const BoxCard = styled(Card)`
  flex: 1;
  padding: 20px;
  margin: 10px;
  border: 2px solid black;
  background-color: whitesmoke;
  border-radius: 8px;
  text-align: center;
`;

export const Firstpage: React.FC = () => {
  return (
    <div>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="#personal-banking">Personal Banking</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#business">Business</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#about-us">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavButton to="/SignIn">Login</NavButton>
          </NavItem>
        </NavList>
      </Nav>

      <Front>
        <img src={fr} alt="Sign In photo" />

        <IntroContainer>
          <IntroPara variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa sunt ab rerum, corrupti odio! Quas ut consequatur rerum, tenetur nemo explicabo nulla suscipit maxime dignissimos!
          </IntroPara>
          <LearnButton variant="contained">Learn More</LearnButton>
        </IntroContainer>
      </Front>

      <Second>
        <Heading variant="h1">Hello and welcome to my bank!</Heading>
        <Intro>
          <p>At [Bank Name], we prioritize your financial well-being</p>
          <p>with cutting-edge technology and personalized service.</p>
          <p>Explore our range of banking solutions designed to fit your financial goals.</p>
        </Intro>
      </Second>

      <Third>
        <BoxCard>
          <CardContent>
            <Typography variant="h1">Service 1</Typography>
            <Typography variant="h2">Our services</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti laudantium harum, molestias ratione veritatis modi rem architecto reiciendis fuga hic omnis nostrum earum eos recusandae officiis vero ipsa eaque.
            </Typography>
          </CardContent>
        </BoxCard>

        <BoxCard>
          <CardContent>
            <Typography variant="h1">Service 2</Typography>
            <Typography variant="h2">Our services</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti laudantium harum, molestias ratione veritatis modi rem architecto reiciendis fuga hic omnis nostrum earum eos recusandae officiis vero ipsa eaque.
            </Typography>
          </CardContent>
        </BoxCard>

        <BoxCard>
          <CardContent>
            <Typography variant="h1">Service 3</Typography>
            <Typography variant="h2">Our services</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti laudantium harum, molestias ratione veritatis modi rem architecto reiciendis fuga hic omnis nostrum earum eos recusandae officiis vero ipsa eaque.
            </Typography>
          </CardContent>
        </BoxCard>
      </Third>
    </div>
  );
};

export default Firstpage;
