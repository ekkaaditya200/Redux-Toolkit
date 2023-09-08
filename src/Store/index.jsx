import {configureStore} from "@reduxjs/toolkit";
import userSlice  from "./Slices/UserSlice";

const store = configureStore({
    //If reducer is a single function, it will be directly used as the root reducer for the store and if it is an object of slice reducers, like {user:userReducer,posts:postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux combineReducers utility
    reducer:{
        users:userSlice, //*means store has now access of userSlice reducer action
    },
});

export default store;