import { FC } from "react";
import { LandingUserType } from "./landing.types";
import { LandingUserCard } from "./LandingUserCard";

type PropsType = {
  users: LandingUserType[];
};

export const LandingUsers: FC<PropsType> = ({ users }) => {
  console.log(users, "users from LandingUsers");

  return <div className="d-flex flex-wrap gap-5 justify-content-center">
    {users.map((user) => <LandingUserCard key={`user:${user.id}`} user={user} /> )}
  </div>;
};
