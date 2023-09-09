import React from "react";
import { useDispatch } from "react-redux";

//! we no need to import from slice as we are doing it indivisually
// import { deleteUsers } from "../Store/Slices/UserSlice";
import { deleteUsers } from "../Store/actions";

export const DeleteAllUser = () => {
   const dispatch = useDispatch();
  return <button className="btn clear-btn" onClick={(e)=>dispatch(deleteUsers())}>DeleteAllUser</button>;
};