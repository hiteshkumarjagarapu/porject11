import React from 'react'

function UpdateUsers() {
  return (
    
       <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="w-50 bg-white rounded p-3s">
            <form>
                <h2>Update User</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>

        </div>
    
  )
}

export default UpdateUsers
 