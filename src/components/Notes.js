import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualNotes from "./IndividualNotes";
import "./notes.css";
import Navbar from "./Navbar";
import { Container } from "@material-ui/core";

function Notes(props) {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("token"));
  const [notes, setNotes] = useState();
  const [view, setView] = useState();

  const getNotes = async () => {
    const response = await axios.get(
      "https://xpressnotes.herokuapp.com/api/notes",
      { headers: { Authorization: "Bearer " + jwtToken } }
    );
    setNotes(response.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    setView(
      notes?.map((note) => <IndividualNotes key={note._id} note={note} />)
    );
  }, [notes]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar handlePage={props.handlePage} />
      <Container>
        <div className="notes">{view}</div>
      </Container>
    </div>
  );
}

export default Notes;
