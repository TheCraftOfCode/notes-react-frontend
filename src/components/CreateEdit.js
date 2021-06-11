import { Button } from '@material-ui/core'
import { ContactPhoneTwoTone } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react'
import "./createEdit.css"

function CreateEdit(props) {

    const [title,setTtile] = useState();
    const [content,setContent] = useState();
    
    const createNote = () => {

        //API Call 
    }


    return (
        <div className="modalStyles">
            <form className="createEditForm">
                <input 
                    type="text" 
                    className="createEditTitle"
                    placeholder="Title"
                    onChange ={ event => event.target.value === " " ? null : setTtile(event.target.value) }
                    value = {title}
                    />

                <textarea 
                    className="createEditContent"
                    placeholder="Take a note"
                    onChange ={ event => event.target.value === " " ? null : setContent(event.target.value) }
                    value={content}
                />

                <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{alignSelf:"flex-end",marginRight:"1.75%"}}
                    onClick={createNote}>
                Create
                </Button>
            </form>
        </div>
    )
}

export default CreateEdit
