import { useState } from "react";
import { UsersListType } from "./users-list.types";
import { UserType } from "../User/user.types";

export const UsersList = () => {
  const [users, setUsers] = useState<UsersListType>([
    { name: "Igor", age: 25 },
    { name: "John", age: 23 },
  ]);

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
    updateUser(index, {...users[index], age: year - yearOfBirth});
  }

  // 1. Створити у даному компоненті форму для створення користувача (name, age)
  // Коли форма приймає дані і натискається кнопка Create - користувач має потрапити у список
  // (дані форми можна очистити)

 // 2. Стилізувати список та форму за бажанням   

  return (
    <div>
      {users.map((user, i) => (
        <div key={`users-list:${user.name}:${i}`}>
          <p>{user.name}</p>
          <input
            autoFocus={true}
            placeholder="User name"
            value={user.name}
            onChange={(e) => updateUser(i, { ...user, name: e.target.value })}
          />
          <p>{user.age}</p>
          <input type="date" onChange={(e) => updateBirthDate(i, e.target.value) } />
          <button onClick={() => deleteUser(user.name)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};
