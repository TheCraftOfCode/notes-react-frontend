import React from 'react'
import "./notes.css"

function Loader() {
    return (
        <div className="notesLoad">
            <div className="loader"></div>
            <div style={{marginTop:"2%"}}>Half a mo... Wait while we fetch your notes.</div>
        </div>
    )
}

export default Loader
