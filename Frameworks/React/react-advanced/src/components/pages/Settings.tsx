import { useContext, useState } from "react";
import {
  CurrentUserContext,
  UserSettingsType,
} from "../../contexts/CurrentUserContext";
import { Link } from "react-router";

export const Settings = () => {
  const { user, setUser, settings, setSettings, changeTheme } =
    useContext(CurrentUserContext);

  const [formData, setFormData] = useState<UserSettingsType>({
    email: settings?.email || user?.email || "",
    password: settings?.password || user?.password || "",
    status: settings?.status || "",
    theme:
      settings?.theme ||
      (localStorage.getItem("theme") as "dark" | "light") ||
      "dark",
  });

  const changeFormData = (key: keyof UserSettingsType, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = () => {
    if (setSettings) {
      setSettings(formData);

      localStorage.setItem("theme", formData.theme);

      if (changeTheme) {
        changeTheme(formData.theme);
      }

      if (setUser) {
        setUser({ email: formData.email, password: formData.password });
      }
    }
  };

  return (
    <div>
      <input
        value={formData.email}
        onChange={(e) => changeFormData("email", e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <input
        value={formData.password}
        onChange={(e) => changeFormData("password", e.target.value)}
        type="password"
        placeholder="Enter your password"
      />
      <input
        value={formData.status}
        onChange={(e) => changeFormData("status", e.target.value)}
        type="text"
        placeholder="Enter your status"
      />
      <select
        value={formData.theme}
        onChange={(e) => changeFormData("theme", e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <label htmlFor="check">Check</label>
      <input id="check" type="checkbox" />
      <button onClick={onSubmit}>Save (Apply) settings</button>
      <Link to="/dashboard">Go back to Dashboard</Link>
    </div>
  );
};
