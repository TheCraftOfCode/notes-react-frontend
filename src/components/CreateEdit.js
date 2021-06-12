import { Button } from '@material-ui/core'
import axios from 'axios';
import React, { useState } from 'react'
import "./createEdit.css"

function CreateEdit(props) {

    const [title,setTtile] = useState();
    const [content,setContent] = useState();
    const [category,setCategory] = useState("note");
    const [createNoteError,setCreateNoteError] = useState(false);
    
    const createNote = () => {

        var data = {
            title : title,
            content : content,
            category : category
        };

        axios.post("https://xpressnotes.herokuapp.com/api/notes",
            data,
            {headers : {Authorization :"Bearer "+props.jwtToken,'Content-Type': 'application/json'}})
            .then(() => {
                 props.handleModal()
                 props.getNotes()})
            .catch(() => setCreateNoteError(true) )
    }


    return (
        <div className="modalStyles">
            <form className="createEditForm">
            {createNoteError ? <span style={{color:"white"}}>Make sure that all fields are filled</span> : null} 
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
                <div className="createEditBottomRow">
                    <div className="createEditRadio">
                        <label>
                            <input
                            type="radio"
                            value="note"
                            checked={category === "note" }
                            onChange={ () => setCategory("note")}
                            />
                            Note
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="todo"
                            checked={category === "todo"}
                            onChange={() => setCategory("todo")}
                            />
                            Todo
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="important"
                            checked={category === "important"}
                            onChange={ () => setCategory("important")}
                            />
                            Important
                        </label>
                        
                        
                    </div>
                
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={createNote}>
                    Create
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateEdit
