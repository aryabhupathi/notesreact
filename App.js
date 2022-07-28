import React, { useState } from 'react'
import Form from './component1/Form'
import Notes from './component1/Notes'
import Editnote from './component1/Editnote'
export default function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [notes, setnotes] = useState(getNotes)
  const [editId, seteditId] = useState("")
  localStorage.setItem("notes", JSON.stringify(notes))
  return (
    <>
      <Editnote editId={editId} notes = {notes} setnotes = {setnotes}/>
      <Form title={title} settitle={settitle} desc={desc} setdesc={setdesc} notes={notes} setnotes={setnotes} />
      <div className='container' style={{backgroundColor: "wheat", marginTop: "15px"}}>
        <div className='row justify-content-center'>
          <div className="col-md-10">
            <h1 className='mb-3'>Your notes</h1>
            {
              notes.length === 0 ? <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Alert</h5>
                  <p className="card-text">Nothing is saved</p>
                </div>
              </div> : notes.map((element) => {
                return (
                  <Notes element = {element} key = {element.id} notes={notes} setnotes={setnotes} seteditId={seteditId}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
  function getNotes(){
    const note = JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note;
    }
    else
    {
      return [];
    }
  }
}
