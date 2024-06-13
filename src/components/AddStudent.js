import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../redux/action'
import { useNavigate } from 'react-router-dom'
// import { uid } from 'uid'

export const AddStudent = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [stuData, setStuData] = useState({
    email:"",
    name:"",
    phone:"",
    dob:"",
    bNo:"",
    progress:""
  })

  const changeVal = (e) =>{
    const {name, value} = e.target
    setStuData({...stuData, [name]:value})
  }

  
  const add = (e) =>{
    e.preventDefault()
    // var unId = uid()
    // setStuData({...stuData, id:unId})

    
    dispatch(addStudent(stuData))
    navigate("/")
    
  }

  return (
    <div className='d-flex justify-content-center mt-4'>
      <form className='w-25 shadow p-3 mb-5 bg-body-tertiary rounded' onSubmit={(e)=>add(e)}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" value={stuData.email} name="email" aria-describedby="emailHelp" onChange={(e)=> changeVal(e)}/>
      </div>
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={stuData.name} name="name" onChange={(e)=> changeVal(e)}/>
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label">Phone number</label>
        <input type="number" className="form-control" id="phone" value={stuData.phone} name="phone" onChange={(e)=> changeVal(e)} />
      </div>
      <div className="mb-3">
        <label for="dob" className="form-label">DOB</label>
        <input type="date" className="form-control" id="dob" value={stuData.dob} name="dob" onChange={(e)=> changeVal(e)} />
      </div>
      <div className="mb-3">
        <label for="bNo" className="form-label">Batch number</label>
        <input type="text" className="form-control" id="bNo" value={stuData.bNo} name="bNo" onChange={(e)=> changeVal(e)}/>
      </div>
      <div className="mb-3">
        <label for="progress" className="form-label">Progress</label>
        <input type="range" className="form-control" id="progress" value={stuData.progress} name="progress" onChange={(e)=> changeVal(e)}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}
