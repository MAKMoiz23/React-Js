import React, {useState} from 'react'


export default function AddTodo({addToDo}) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc){
            alert("Title or description is not passed!");
            return
        }
        console.log("running addlist...")
        addToDo(title, desc);

    }
    
    return (
        <div className='container my-3'>
            <h1>Add a Todo</h1>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title :</label>
                    <input type="text" value={title} onChange = {(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description :</label>
                    <input type="text" value={desc} onChange = {(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
