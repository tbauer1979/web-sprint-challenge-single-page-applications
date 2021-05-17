import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CompanyData from './CompanyData'
import CompanyDataTwo from './CompanyDataTwo'



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const CompanyCard = (props) => {

  
  const classes = useStyles();
    const {company,type,wait,fee} = props



  return (
    <Card className={classes.root} className ="newCard">
      <CardActionArea className ="newCard">
      <CardMedia className ="newCard">
      <CardContent className ="newCard">
      <Typography className ="newCard" gutterBottom variant="h5" component="h2">
       <h3>Company: {company}</h3>
       <p>Type:{type}</p>
       <p>Wait time:{wait}</p>
       <p>Delivery Fee:{fee}</p>
       </Typography>
       </CardContent>
       </CardMedia>
       </CardActionArea>
    </Card>
  );
};
export default CompanyCard;
