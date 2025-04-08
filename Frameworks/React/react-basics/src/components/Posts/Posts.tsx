import { useState, useEffect } from "react";
import { PostType } from "./posts.types";
import axios from "axios";

import "./Posts.css";

export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getPosts = async () => {
    const { data: posts } = await axios.get<PostType[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return posts;
  };

  useEffect(() => {
    // On first render of component

    setIsLoading(true);

    getPosts()
      .then((posts) => setPosts(posts))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    // On update of some values
    console.log("Is loading has been changed", isLoading);
  }, [isLoading, isError, posts]);


  useEffect(() => {
    // On unmounting of the component
    return () => {
        console.log(isError, "isError");
        console.log("Component POSTS is unmounting");
    }
  }, [isError]);


  
  if (isError) {
    return <div>
        <h3>Error while loading a posts</h3>
    </div>
  }
  
  if (isLoading) {
    return (
      <div>
        <h3>Posts are loading ...</h3>
      </div>
    );
  }

  return (
    <div className="posts-list-container">
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={`post: ${post.id}`} className="post-card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
