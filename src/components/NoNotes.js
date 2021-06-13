import React from 'react'
import "./notes.css"

function NoNotes(props) {
    return (
        <div className="noNotes" onClick={props.handleModal}>
            <div className="noNotesOne"></div>
            <div className="noNOtesText">Looks like you don't have any notes. Click to get started.</div>
            
        </div>
    )
}

export default NoNotes
