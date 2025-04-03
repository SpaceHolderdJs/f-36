import { useState } from "react";
import { UserType } from "./user.types";

export const User = () => {
  const [user, setUser] = useState<UserType>({ name: "Igor", age: 25 });

  const changeUserData = <ValueType, >(key: keyof UserType, value: ValueType ) => {
    setUser({...user, [key]: value});
  }

  return (
    <div>
      <p>{user.name}</p>
      <input
        placeholder="User name"
        value={user.name}
        onChange={(e) => changeUserData<string>("name", e.target.value)}
      />
      <p>{user.age}</p>
      <button onClick={() => changeUserData<number>("age", user.age + 1)}>
        Birthday
      </button>
    </div>
  );
};
