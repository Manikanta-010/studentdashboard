import React from 'react'
import { useSelector } from 'react-redux'

export const TopLearner = () => {

  const students = useSelector(state => state)
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
