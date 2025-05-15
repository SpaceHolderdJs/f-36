import type { FC } from "react";
import { Route, Routes, HashRouter } from "react-router";
import { Login } from "./components/Login";
import { Info } from "./components/Info";
import { User } from "./components/User";
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";
import App from "./App";


export const AppRoutes: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/user" element={<User />} />
        <Route path="/info/users" element={<Users />} />
        <Route path="/info/todos" element={<Todos />} />
      </Routes>
    </HashRouter>
  );
};
