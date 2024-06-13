import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent, deleteStudent } from '../redux/action'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

  const students = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='d-flex justify-content-center mt-4'>
      {
      (students.length )  ? <table className="w-75 table shadow p-3 mb-5 bg-body-tertiary rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Batch No.</th>
            <th scope="col">Progress</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((val, ind) => {
              return (
                <tr>
                  <th scope="row">{ind+1}</th>
                  <td>{val.name}</td>
                  <td>{val.phone}</td>
                  <td>{val.email}</td>
                  <td>{val.bNo}</td>
                  <td>{val.progress}</td>
                  <td>
                    <i onClick={()=> dispatch(deleteStudent(val.email))} className="fa-solid fa-trash me-4 text-danger"></i>
                    <i onClick={()=> navigate("/update", {state: val.email})} className="fa-solid fa-pencil me-4  text-primary"></i>
                    <i className="fa-solid fa-star" onClick={()=> dispatch(addStudent(val))}></i>
                  </td>
                </tr>
              )
            })
          }


        </tbody>
      </table> : <h1>No records</h1>
  }
    </div>
  )
}
