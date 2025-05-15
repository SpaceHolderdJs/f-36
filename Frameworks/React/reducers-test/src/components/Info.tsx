import { Link } from "react-router";

export const Info = () => {
  return (
    <div>
      <h1>Info page</h1>
      <Link to="/info/user">User</Link>
      <br />
      <Link to="/info/users">Users</Link>
      <br />
      <Link to="/info/posts">Posts</Link>
      <br />
      <Link to="/info/todos">Todos</Link>
      <br />
    </div>
  );
};
