import React from 'react';

import {AppBar,Toolbar,makeStyles} from '@material-ui/core';

import { Menu} from '@material-ui/icons';
const userStyles=makeStyles({
   header:{
         background:"#fff",
         height: 70

   },
   logo:{
       height:55,
       margin:"auto",
       paddingRight: 70,
      marginBottom:45
   },
   Menu:{
       color:"#000"
   }
})
const Header =() =>{//Functional OOPs
    const classes=userStyles();
    const url='https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
 return(
     <AppBar className={classes.header}>//Applying classes from userStyles
         <Toolbar>
             <Menu className={classes.Menu}/>
             <img src={url} alt="logo" className={classes.logo}/>
         </Toolbar>
     </AppBar>
 )
}

//Exporting Header
export default Header;