import { createSlice } from "@reduxjs/toolkit";


const userInitialState = {
    currentUser: null,
    modalUser: false,
}



export const UserSlice = createSlice({

    name: 'user',
    initialState: userInitialState,
    reducers: {

setCurrentUser: (state, action) => {
    return{
        ...state,
        currentUser: action.payload
    }
},

showModalUser: (state) => {
    return {
        ...state,
        modalUser: !state.modalUser
    }
},

logout: state => {
    return {
        ...state,
        currentUser: !state.currentUser
    }
}


    }

})


export const {setCurrentUser, showModalUser, logout} = UserSlice.actions

export default UserSlice.reducer