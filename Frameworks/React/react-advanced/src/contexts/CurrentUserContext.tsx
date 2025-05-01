import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
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

  return (
    <CurrentUserContext.Provider
      value={{ user, setUser, settings, setSettings, possibleUsers }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
