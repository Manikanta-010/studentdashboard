import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStudent } from '../redux/action'
import { useLocation, useNavigate } from 'react-router-dom'
// import { uid } from 'uid'


export const UpdateStudent = () => {

    const allStudentData = useSelector(state => state)
    const {state}= useLocation()

    const curData = allStudentData.filter((val) => {
        return val.email === state
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [stuData, setStuData] = useState({
      email:curData[0]?.email,
      name:curData[0]?.name,
      phone:curData[0]?.phone,
      dob:curData[0]?.date
    })
  
    const changeVal = (e) =>{
      const {name, value} = e.target
      setStuData({...stuData, [name]:value})
    }
  
    const update = (e) =>{
        e.preventDefault()

        dispatch(updateStudent(state,stuData))
        navigate("/")
    }
  

      

      return (
        <div className='d-flex justify-content-center mt-4'>
          <form className='w-25 shadow p-3 mb-5 bg-body-tertiary rounded' onSubmit={(e)=>update(e)}>
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
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
      )
}


  
