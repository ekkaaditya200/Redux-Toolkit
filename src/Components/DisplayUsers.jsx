import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import styled from "styled-components";
import "./DisplayUsers.css" ;
import { removeUser } from '../Store/Slices/UserSlice';

const DisplayUsers = () => {

  const dispatch = useDispatch();

                         //! All state of data
  const data = useSelector((state)=>{
    return state.users;
  })

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }
 
  return <Wrapper>
    {
      data.map((user,id)=>{
        return <li key={id} onClick={(e)=>deleteUser(id)}>
          {user}
          <button className='btn-delete' onClick={()=>deleteUser}>
            Delete
          </button>
          </li>
      })
    }
    </Wrapper>
}


const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
