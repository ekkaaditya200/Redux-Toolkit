// import { createSlice} from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name:"user",
//     initialState:[],
//     reducers:{
//         //Micro Reducers
//         addUser(state,action){
//             state.push(action.payload);
//             console.log(action.payload);
//         }, 
//         removeUser(state,action){

//             // splice() method in javascript is used to modify an array by adding or removing elements

//             state.splice(action.payload,1);
//             console.log("Deleted");

//             //Delete from last
//             // state.pop();

//         },
//         deleteUsers(state,action){
//             //state is reasigning 
//             // return state = [];

//             //all items are deleted
//             return [];
//         },
//     },
//     extraReducers(builder){
//         builder.addCase(userSlice.actions.deleteUsers,()=>{
//             return [];
//         })
//     }
// });
// /*
// TODO: If actions is supposed to be handled by one reducer, use reducers
// TODO: If action is supposed to be handled by multiple reducers, use extraReducers
// */
// export default userSlice.reducer;
// export const {addUser,removeUser,deleteUsers} = userSlice.actions;