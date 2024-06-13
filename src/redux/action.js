

export const addStudent = (val) =>{
    return {
        type:"ADD_STUDENT",
        payload: val
    }
}

export const deleteStudent = (id) =>{
    return {
        type:"DELETE_STUDENT",
        payload:id
    }
}

export const updateStudent = (id, val) =>{
    return {
        type:"UPDATE_STUDENT",
        payload:{
            id: id,
            date : val
        }
    }
}