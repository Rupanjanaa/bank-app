import styled from '@emotion/styled';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
//import { Link as RouterLink } from 'react-router-dom';

// Styled components
const CenteredContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  padding: 20px;
  border: 2px solid black;
  background-color: whitesmoke;
  border-radius: 8px;
  text-align: center;
`;

const BackButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const Success: React.FC = () => {
  return (
    <CenteredContainer>
      <StyledCard>
        <CardContent>
          <Typography variant="h4">Congratulations! You are registered!</Typography>
          <BackButton href="/SignIn">
            Back to SignIn
          </BackButton>
        </CardContent>
      </StyledCard>
    </CenteredContainer>
  );
};

export default Success;
