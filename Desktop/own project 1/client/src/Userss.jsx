import { useState } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Userss() {
  const [users,setUsers]=useState([{
    Name:"hitesh",Email:"hitesh@gmail.com"
  }])
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((u)=>{
                        return<tr>
                                <td>{u.Name}</td>
                                <td>{u.Email}</td>
                                <td>
                                    <Link to='/update' className='btn btn-success' >Update</Link>
                                    <Link to='/delete' className='btn btn-danger'>Delete</Link >
                                </td>
                            </tr>
                    })
                }

            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Userss
