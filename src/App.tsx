//import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Registration from './Registration';
import SignIn from './SignIn';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </Router>
  );

}


/*return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        /*<Box sx={{ flexGrow: 1, p: 4 }}>
          <SignIn />
        </Box>
      </Box>
    </Box>
  );*/