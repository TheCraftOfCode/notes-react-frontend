<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import "./notes.css";
import { DeleteOutlined } from "@material-ui/icons";
import { Avatar, Typography } from "@material-ui/core";
import { yellow, green, pink } from "@material-ui/core/colors";
=======
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
>>>>>>> 49fe11dd8acc86717f49d2c703be270c4b64ea25

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "note") {
        return yellow[700];
      }
      if (note.category === "important") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
    },
  },
}));

export default function IndividualNotes({ note }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteNote = () => {
    /*Axios.delete("https://xpressnotes.herokuapp.com/api/notes/"+props.each.id, 
    {headers : {Authorization:"Bearer "+props.jwtToken}}).then((response) => {console.log(response)}) */
  }

  return (
    <Card className="notesCard">
      <CardHeader title={props.each.title}/>
      <CardContent>
          {props.each.content.slice(0,100)}
      </CardContent>
      <CardActions disableSpacing>
      <IconButton style={{marginLeft:"auto"}}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={deleteNote}>
        <DeleteIcon />
      </IconButton>
      {props.each.content.lenght > 100 ?
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.content.slice(100)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
