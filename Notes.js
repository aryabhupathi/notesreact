import React from 'react'

export default function Notes({ element, notes, setnotes, seteditId}) {
    const remove=(id)=>
    {
        const newNotes = notes.filter((elm) =>
        {
            if(elm.id!==id){
                return elm;
            }
        })
        setnotes(newNotes)
    }
    const edit=(id)=>
    {
        seteditId(id)
        notes.filter((ele)=>{
            if(ele.id ===id)
            {document.getElementById("edittitle").value = ele.title;
            document.getElementById("editdesc").value = ele.desc;
            }
        })
    }
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={() => {
                        edit(element.id)
                    }
                }
                > Edit</button>
                    <button className='btn btn-danger mx-2' onClick={() => {
                        remove(element.id)
                    }
                }>Delete</button>
                </div>
            </div>
        </>
    )
}
