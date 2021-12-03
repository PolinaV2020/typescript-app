import React, { useEffect, FC } from 'react';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())   
    }, [])

    if(loading) {
        return <h2>Loading...</h2>
    }

    if(error){
      return <h2>{error}</h2>
    }

    return (
        <div>
            {users.map((user) => {
                return <h4 key={user.id}>{user.name}</h4>
            })}
        </div>
    );
};

export default UserList;