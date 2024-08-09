import React, { useState } from "react"
import axios from 'axios'

function CreateUsers(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="w-50 bg-white rounded p-3s">
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

        </div>
        
    )
}
export default CreateUsers