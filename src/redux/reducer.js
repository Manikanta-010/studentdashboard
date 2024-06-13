let students = []

export const  reducer = (state = students, action) =>{

    if(action.type === "ADD_STUDENT"){
        state.push(action.payload)
    }else if( action.type === "DELETE_STUDENT"){
       
        const filterArr  = state.filter((val) =>{
            return val.email !== action.payload
        })
         
        state = [...filterArr]
    }else if(action.type === "UPDATE_STUDENT"){
        const {id, updateData} = action.payload

        const newArr = state.map((val) => {
            if(val.email === id){
                val = {}
            }
        })
    }

    return state
}