import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './App.css';
import 'fontsource-roboto';

// import Nav from './components/nav';
import PrivateRoute from './components/privateRoute';
import ProfileUpload from './components/cloudinaryWidget';
import SignIn from './components/signIn'
import SignUp from './components/signUp'



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Nav /> */}
      <BrowserRouter>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <ProfileUpload />
      </BrowserRouter>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default App;



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.theolamide.me/">
        Olamide and Nimi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));