import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export type UserType = {
  email: string;
  password: string;
};

export type UserSettingsType = {
  email: string;
  password: string;
  status: string;
  theme: "dark" | "light";
};

type CurrentUserContextType = {
  user: UserType | null;
  setUser?: Dispatch<SetStateAction<UserType | null>>;

  settings: UserSettingsType | null;
  setSettings?: Dispatch<SetStateAction<UserSettingsType | null>>;

  changeTheme?: (theme: string) => void;

  possibleUsers: UserType[];
};

export const CurrentUserContext = createContext<CurrentUserContextType>({
  user: null,
  settings: null,
  possibleUsers: [],
});

export const CurrentUserContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [settings, setSettings] = useState<UserSettingsType | null>(null);

  const possibleUsers: UserType[] = [
    { email: "email1@gmail.com", password: "password1" },
    { email: "email2@gmail.com", password: "password2" },
    { email: "email@gmail.com", password: "password3" },
  ];

  const changeTheme = (theme: string) => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");

    if (lsTheme) {
      changeTheme(lsTheme);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        settings,
        setSettings,
        possibleUsers,
        changeTheme,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
