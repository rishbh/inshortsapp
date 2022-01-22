import React from 'react';
import {Box,makeStyles} from '@material-ui/core';
//components
import Header from './components/Header' ;
import Articles from './components/Articles.jsx';
import InfoHeader from "./components/InfoHeader" ;



//OOPS Classes
const userStyles = makeStyles(theme => ({
  container: {
    marginTop: 110,
    width: '59%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}))
function App() {
  const classes=userStyles();
  return (
   <Box>
     <Header/>
      <Box className={classes.container}>
      <InfoHeader/>
      <Articles/>
      </Box>
      
     </Box>

  );
}

export default App;
