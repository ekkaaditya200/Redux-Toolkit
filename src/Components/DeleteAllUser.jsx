import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../Store/Slices/UserSlice";

export const DeleteAllUser = () => {
   const dispatch = useDispatch();
  return <button className="btn clear-btn" onClick={(e)=>dispatch(deleteUsers())}>DeleteAllUser</button>;
};