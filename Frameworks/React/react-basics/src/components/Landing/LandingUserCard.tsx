import { FC } from "react";
import { LandingUserType } from "./landing.types";

type PropsType = {
  user: LandingUserType;
};

export const LandingUserCard: FC<PropsType> = ({ user }) => {
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">
        {user.name.firstname} {user.name.lastname}
      </div>
      <div className="card-body text-primary">
        <h5 className="card-title">{user.email}</h5>
        <h6 className="card-title">{user.phone}</h6>
        <p className="card-text">{user.address.street}</p>
      </div>
    </div>
  );
};
