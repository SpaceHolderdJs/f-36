import { useContext, useState } from "react";
import { AppContext, type UserType } from "../contexts/AppContext";

export const Login = () => {
  const { dispatch } = useContext(AppContext);

  const [formData, setFormData] = useState<UserType>({
    email: "",
    password: "",
  });

  const onLogin = () => {
    if (dispatch) {
      dispatch({ type: "USER_LOGIN", payload: formData });
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
