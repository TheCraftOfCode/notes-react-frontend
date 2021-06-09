import axios from 'axios';
import React, { useEffect, useState } from 'react'
import IndividualNotes from "./IndividualNotes"

function Notes() {

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
        <div>
            {view}
            
        </div>
    )
}

export default Notes
