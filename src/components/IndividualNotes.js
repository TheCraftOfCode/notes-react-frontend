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

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.content.slice(100)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
