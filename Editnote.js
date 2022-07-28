import React from 'react'

export default function Editnote({editId, notes, setnotes}) {
    function update() {
        const update = notes.map((elem) => {
            if (editId === elem.id) {
                return ({
                    ...elem,
                    title: document.getElementById("edittitle").value,
                    desc: document.getElementById("editdesc").value
                });
            }
            else {
                return elem;
            }
        });
        setnotes(update);
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit notes</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder='Enter the title' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <textarea name="desc" id="editdesc" rows="5" className="form-control" placeholder='Enter the notes'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={update}>Submit Notes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
