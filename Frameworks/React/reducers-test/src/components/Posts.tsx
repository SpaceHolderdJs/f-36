import { useContext, useEffect } from "react";
import { ActionTypes, AppContext } from "../contexts/AppContext";
import { API } from "../api";

export const Posts = () => {
  const { data, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (!data.posts.length) {
      API.getPosts().then((posts) =>
        dispatch?.({ type: ActionTypes.setPosts, payload: posts })
      );
    }
  }, [data.posts.length, dispatch]);

  if (!data.posts.length) return <h1>Posts are loading ... </h1>;

  return (
    <div>
      <h1>Posts</h1>

      <div className="card-wrapper">
        {data.posts.length &&
          data.posts.map((post) => (
            <div key={post.title} className="card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
