import React from 'react';
import {CardContent, Card,Grid,makeStyles,Typography} from '@material-ui/core';
import Articles from './Articles';



const useStyles=makeStyles(theme =>({
    image:{
          height:268,
          width:"88%",
          borderRadius: 5,
          objectFit:"cover"
    },
    components:{
     marginBottom:20,
     boxShadow:"0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%)"
    },
    container:{
        display:"flex",
        padding:8,
        paddingBottom:"4px important"
    },
    rightcontainer:{
        margin: '5px 0px 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
     }
   },
   title:{
       
        fontWeight:300,
        fontSize:22,
        lineHeight:"27px"

   },
   author:{
       fontSize:"12px",
       lineHeight:"22px"
   },
   description:{
       lineHeight:"22px",
       marginTop:"7px"
   },
   publisher:{
       fontSize:12,
       marginTop:"10px",
       marginBottom:"2px",
       '& > *': {
        textDecoration: 'none',
        color: '#000',
        fontWeight: 900
    }
       
   }

})
)

const Article= ({article})=>{
    const classes=useStyles();
    return(
        <Card className={classes.components}>
            <CardContent className={classes.container}>
                     <Grid container>

                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <img src={article.url} alt="News image" className={classes.image}/>  
                        </Grid>

                        <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightcontainer}>
                               <Typography className={classes.title}>{article.title}</Typography>
                               <Typography className={classes.author}>
                                   <b>short by </b>{article.author}/{new Date(article.timestamp).toDateString() }
                               </Typography>

                               <Typography className={classes.description}>{article.description}
                               </Typography>
                                
                                <Typography className={classes.publisher}>
                                    read more at <a href={article.link} target="_blank" >{article.publisher}</a>
                                </Typography>
                        </Grid>
                    </Grid>
             </CardContent>
        </Card>
       
    )
}

export default Article;








