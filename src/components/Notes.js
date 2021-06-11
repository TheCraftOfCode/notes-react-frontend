<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualNotes from "./IndividualNotes";
import "./notes.css";
import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
=======
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IndividualNotes from "./IndividualNotes"
import "./notes.css"
import Navbar from "./Navbar"
import { Modal } from '@material-ui/core';
import CreateEdit from "./CreateEdit"
>>>>>>> 49fe11dd8acc86717f49d2c703be270c4b64ea25

function Notes(props) {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("token"));
  const [notes, setNotes] = useState();
  const [view, setView] = useState();

<<<<<<< HEAD
  const getNotes = async () => {
    const response = await axios.get(
      "https://xpressnotes.herokuapp.com/api/notes",
      { headers: { Authorization: "Bearer " + jwtToken } }
    );
    setNotes(response.data);
  };
=======
    const [jwtToken,setJwtToken] = useState(localStorage.getItem("token"));
    const [notes,setNotes] = useState();
    const [view,setView] = useState();
    const [modal,setModal] = useState(false);

    const handleModal = () => {setModal(!modal)}

>>>>>>> 49fe11dd8acc86717f49d2c703be270c4b64ea25

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    setView(
      notes?.map((note) => <IndividualNotes key={note._id} note={note} />)
    );
  }, [notes]);

<<<<<<< HEAD
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar handlePage={props.handlePage} />
      <Container>
        <div className="notes">{view}</div>
      </Container>
    </div>
  );
=======
    useEffect(() => {
        setView(notes?.map(each => <IndividualNotes each={each} jwtToken={jwtToken}  /> ))
    }, [notes])

    return (
        <div style={{width:"100%",height:"100%"}}>
            <Navbar handlePage={props.handlePage} handleModal={handleModal}/>
            <div className="notes">
                {view}
            </div>
            <Modal 
                open = {modal}
                onClose = {() => {setModal(false)}}
                >
                <CreateEdit jwtToken={jwtToken} getNotes={getNotes} handleModal={handleModal}/>
            </Modal>
        </div>
    )
>>>>>>> 49fe11dd8acc86717f49d2c703be270c4b64ea25
}

export default Notes;
