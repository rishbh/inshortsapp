import React from 'react';

import {Box,Typography,makeStyles} from '@material-ui/core';

//defining classes
const userStyles=makeStyles({
    container:{
        background:"#f44336",
        color:"#ffffff",
        height:60 ,
       display:'flex',
       alignItems:'center'
    },
    text: {
         fontSize:14,
         marginLeft:50,
         fontWeight:300
    },
    logo:{
        height:30,
        marginRight:12
    }
})



const InfoHeader = ()=>{
    const classes=userStyles();

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
 return(
     <Box className={classes.container}>
              <Typography className={classes.text}>For the best experience use<b> inshorts </b>app on your smartphone</Typography>
     <Box style={{marginLeft:"auto"}} >
         <img src={appleStore} alt="appleStoreLINK" className={classes.logo}/>
         <img src={googleStore} alt="googleStoreLink" className={classes.logo}/>
     </Box>
     
     </Box>
 
 )
}

export  default  InfoHeader;