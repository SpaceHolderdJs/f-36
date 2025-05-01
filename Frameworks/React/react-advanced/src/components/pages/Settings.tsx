import { useContext, useState } from "react";
import {
  CurrentUserContext,
  UserSettingsType,
} from "../../contexts/CurrentUserContext";
import { Link } from "react-router";

export const Settings = () => {
  const { user, setUser, settings, setSettings } =
    useContext(CurrentUserContext);

  const [formData, setFormData] = useState<UserSettingsType>({
    email: settings?.email || user?.email || "",
    password: settings?.password || user?.password || "",
    status: settings?.status || "",
    theme: settings?.theme || "dark",
  });

  const changeFormData = (key: keyof UserSettingsType, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = () => {
    if (setSettings) {
      setSettings(formData);

      document.body.classList.remove("light");
      document.body.classList.remove("dark");

      if (formData.theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.add("light");
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
      <input
        value={formData.theme}
        onChange={(e) => changeFormData("theme", e.target.value)}
        type="text"
        placeholder="Enter preferred theme"
      />
      <label htmlFor="check">Check</label>
      <input id="check" type="checkbox" />
      <button onClick={onSubmit}>Save (Apply) settings</button>
      <Link to="/dashboard">Go back to Dashboard</Link>
    </div>
  );
};
