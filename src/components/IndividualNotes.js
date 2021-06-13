import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import "./notes.css";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
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
        return pink[500];
      }
      if (note.category === "todo") {
        return green[500];
      }
    },
  },
}));

export default function IndividualNotes(props) {
  const note = props.each;
  const classes = useStyles(note);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteNote = () => {
    Axios.delete(
      "https://xpressnotes.herokuapp.com/api/notes/" + props.each._id,
      { headers: { Authorization: "Bearer " + props.jwtToken } }
    ).then((response) => {
      props.getNotes();
    });
  };

  const noteColor = () => {
    if (props.each.category === "important") return "#fbadad";
    if (props.each.category === "note") return "#fff096";
    if (props.each.category === "todo") return "#b4f5ae";
  };

  return (
    <div>
      {/* <Card className="notesCard" style={{ backgroundColor: noteColor() }}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => deleteNote(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        {!expanded ? (
          <CardContent>
            {props.each.content.slice(0, 200)}{" "}
            {props.each.content.length > 200 ? <span>...</span> : null}
          </CardContent>
        ) : null}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{props.each.content}</CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton style={{ marginLeft: "auto" }} onClick={deleteNote}>
            <DeleteIcon />
          </IconButton>
          {props.each.content.length > 200 ? (
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          ) : null}
          {console.log(props)}
        </CardActions>
      </Card> */}
      <div>
        <Card elevation={1} style={{ backgroundColor: noteColor() }}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {note.category[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton onClick={() => deleteNote(note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />
          <CardContent>
            {!expanded ? (
              <CardContent>
                {props.each.content.slice(0, 80)}{" "}
                {props.each.content.length > 80 ? <span>...</span> : null}
              </CardContent>
            ) : null}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>{props.each.content}</CardContent>
            </Collapse>
            {props.each.content.length > 80 ? (
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
