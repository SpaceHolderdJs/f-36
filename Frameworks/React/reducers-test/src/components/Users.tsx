import { useContext, useEffect } from "react";
import { ActionTypes, AppContext } from "../contexts/AppContext";
import { API } from "../api";

export const Users = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (!data.users.length) {
      API.getUsers().then((users) =>
        dispatch?.({ type: ActionTypes.setUsers, payload: users })
      );
    }
  }, [data.users, dispatch]);

  if (!data.users.length) return <h1>No users (loading...)</h1>;

  return (
    <>
      <h1>Users</h1>
      <div className='card-wrapper'>
        {data.users.length &&
          data.users.map(({ name, email, phone }) => (
            <div key={email} className='card'>
              <h3>{name}</h3>
              <h4>Email: {email}</h4>
              <p>Phone: {phone}</p>
            </div>
          ))}
      </div>
    </>
  );
};
