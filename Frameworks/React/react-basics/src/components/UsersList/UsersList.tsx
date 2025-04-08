import { useState } from "react";
import { UsersListType } from "./users-list.types";
import { UserType } from "../User/user.types";
import "./UsersList.css";

export const UsersList = () => {
  const [users, setUsers] = useState<UsersListType>([
    { name: "Igor", age: 25 },
    { name: "John", age: 23 },
  ]);

  const [createUserData, setCreateUserData] = useState<UserType>({
    name: "",
    age: 0,
  });

  const createUser = (user: UserType) => {
    setUsers([...users, user]);
    setCreateUserData({ name: "", age: 0 });
  };

  const deleteUser = (userName: string) => {
    const filteredUsers = users.filter((user) => user.name !== userName);
    setUsers(filteredUsers);
  };

  const updateUser = (index: number, userUpdateData: UserType) => {
    const updatedUsers = users.map((user, i) =>
      index === i ? userUpdateData : user
    );
    setUsers(updatedUsers);
  };

  const updateBirthDate = (index: number, dateString: string) => {
    const yearOfBirth = +dateString.split("-")[0];
    const year = +new Date().getFullYear();
    updateUser(index, { ...users[index], age: year - yearOfBirth });
  };

  return (
    <div className="users-list">
      <div className="create-user-form">
        <h3>Create user</h3>
        <input
          type="text"
          placeholder="User name"
          value={createUserData.name}
          onChange={(e) =>
            setCreateUserData({ ...createUserData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="User age"
          value={createUserData.age}
          onChange={(e) =>
            setCreateUserData({ ...createUserData, age: +e.target.value })
          }
        />
        <button onClick={() => createUser(createUserData)}>Create user</button>
      </div>

      {users.map((user, i) => (
        <div className="user-card" key={`users-list:${user.name}:${i}`}>
          <p>{user.name}</p>
          <input
            autoFocus={true}
            placeholder="User name"
            value={user.name}
            onChange={(e) => updateUser(i, { ...user, name: e.target.value })}
          />
          <p>{user.age}</p>
          <input
            type="date"
            onChange={(e) => updateBirthDate(i, e.target.value)}
          />
          <button onClick={() => deleteUser(user.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
