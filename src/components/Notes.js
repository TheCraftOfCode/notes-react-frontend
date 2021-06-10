import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IndividualNotes from "./IndividualNotes"
import "./notes.css"
import Navbar from "./Navbar"

function Notes(props) {

    const [jwtToken,setJwtToken] = useState(localStorage.getItem("token"));
    const [notes,setNotes] = useState();
    const [view,setView] = useState();

    const getNotes = () => {
        axios.get("https://xpressnotes.herokuapp.com/api/notes", {headers : {Authorization:"Bearer "+jwtToken}})
        .then((response) => setNotes(response.data))
    }

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        setView(notes?.map(each => <IndividualNotes each = {each} /> ))
    }, [notes])

    return (
        <div style={{width:"100%",height:"100%"}}>
            <Navbar handlePage={props.handlePage}/>
            <div className="notes">
                {view}
            </div>
            
        </div>
    )
}

export default Notes
