import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./notes.css"
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function IndividualNotes(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteNote = () => {
    
    Axios.delete("https://xpressnotes.herokuapp.com/api/notes/"+props.each._id, 
    {headers : {Authorization:"Bearer "+props.jwtToken}})
    .then((response) => {
      props.getNotes()}) 
  }

  const noteColor = () => {
    if(props.each.category === "important") return "#f75a5b"
    if(props.each.category === "note") return "#ffe02c"
    if(props.each.category === "todo") return "#68eb5c"
  }

  return (
    <Card className="notesCard" style={{backgroundColor: noteColor()}}>
      <CardHeader title={props.each.title}/>
      {!expanded ? 
        <CardContent>
            {props.each.content.slice(0,200)} {props.each.content.length > 200 ? <span>...</span> : null }
        </CardContent> : null }
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.each.content}
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
      <IconButton style={{marginLeft:"auto"}} onClick={deleteNote}>
        <DeleteIcon />
      </IconButton>
      {props.each.content.length > 200 ?
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
           <ExpandMoreIcon /> 
        </IconButton> : null }
          {console.log(props)}
      </CardActions>
      
    </Card>
  );}
