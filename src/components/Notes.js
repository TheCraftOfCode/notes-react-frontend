import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IndividualNotes from "./IndividualNotes"
import "./notes.css"
import Navbar from "./Navbar"
import { Container, Modal } from '@material-ui/core';
import CreateEdit from "./CreateEdit"
import NoNotes from "./NoNotes"
import Loader from "./Loader"

function Notes(props) {

    const [jwtToken,setJwtToken] = useState(localStorage.getItem("token"));
    const [notes,setNotes] = useState();
    const [view,setView] = useState();
    const [modal,setModal] = useState(false);

    const handleModal = () => {setModal(!modal)}


    const getNotes = () => {
        axios.get("https://xpressnotes.herokuapp.com/api/notes", {headers : {Authorization:"Bearer "+jwtToken}})
        .then((response) => setNotes(response.data))
        console.log(notes)
    }

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        setView(notes?.map(each => <IndividualNotes each={each} jwtToken={jwtToken} getNotes={getNotes} /> ))
    }, [notes])

    return (
        <div style={{width:"100%",height:"100%"}}>
            <Navbar handlePage={props.handlePage} handleModal={handleModal}/>
            <div className="notes">
                {notes ? 
                    notes?.length === 0 ? <NoNotes handleModal={handleModal} /> :  <Container>{view}</Container>
                    : <Loader />
                }
            </div>
            <Modal 
                open = {modal}
                onClose = {() => {setModal(false)}}
                >
                <CreateEdit jwtToken={jwtToken} getNotes={getNotes} handleModal={handleModal}/>
            </Modal>
        </div>
    )
}

export default Notes