import React from 'react'

export default function Form({ title, settitle, desc, setdesc, notes, setnotes }) {
    const inputHandler = (e) => {
        if (e.target.id === "title") {
            settitle(e.target.value)
        }
        else {
            setdesc(e.target.value)
        }
    }
    const addNotes = (e) => {
        e.preventDefault()
        if (title !== "" && desc !== "") {
            setnotes((note) => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        id: new Date().getSeconds()
                    }]
                )
            })
        }
        settitle("")
        setdesc("")
    }
    return (
        <>
        <h2 className='head' style = {{marginLeft: "650px", marginTop: "30px"}}> NOTE THE NOTES</h2>
            <div className='container' style={{marginTop: "50px"}}>
                <div className="row justify-content-center">
                    <div className='col-md-10'>
                        <form style = {{border: "4px solid black", borderRadius: "5px", padding: "25px"}}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" placeholder='Enter the title' value={title} onChange={inputHandler} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                <textarea name="desc" id="desc" rows="5" className="form-control" placeholder='Enter the notes' value={desc} onChange={inputHandler}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={addNotes}>Submit Notes</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
