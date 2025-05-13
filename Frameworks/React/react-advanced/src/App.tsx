import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./App.css";
import { useRequest } from "./hooks/useRequest";

const obj = { value: 100 };

function App() {
  const h1Ref = useRef(null);

  const sampleDataRef = useRef({ value: 100 });
  const primitiveRef = useRef(10);

  console.log(sampleDataRef, "sampleDataRef");
  console.log(primitiveRef, "primitiveRef");

  useEffect(() => {
    sampleDataRef.current.value = 1000;
  }, []);

  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const sum = useMemo<number>(() => count1 + count2, [count1, count2]);

  const [lsName, setLsName, clearLsName] = useLocalStorage<string>("name");
  const [lsUser, setLsUser, clearLsUser] = useLocalStorage<{ name: string }>(
    "user",
    true
  );

  const [posts, isLoading, error] = useRequest<
    unknown,
    { title: string; body: string }[]
  >("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  console.log(posts, "posts");

  const [users, isUsersLoading, usersError] = useRequest(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "GET",
    }
  );

  console.log(users, "users", isUsersLoading, usersError);

  // Завдання:

  // 1. Використати хук useLocalStorage у файлі Settings.tsx для параметру theme
  // 2. Зробити запит (useRequest) у App.tsx (або ваш компонент) на посилання
  // https://jsonplaceholder.typicode.com/users
  // відслідкувати error та loading

  return (
    <div>
      <h1>Posts</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        posts?.map(({ title, body }) => (
          <div>
            <h3>{title}</h3>
            <h4>{body}</h4>
          </div>
        ))
      )}

      <h1>Name from LS: {lsName}</h1>
      <input value={lsName || ""} onChange={(e) => setLsName(e.target.value)} />
      <button onClick={clearLsName}>Clear name from LS</button>

      <h1>User from LS: {lsUser?.name}</h1>
      <input
        value={lsUser?.name || ""}
        onChange={(e) => setLsUser({ name: e.target.value })}
      />
      <button onClick={clearLsUser}>Clear user from LS</button>

      <h1>{sum}</h1>
      <h1>
        Count1: {count1}{" "}
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </h1>
      <h1>
        Count2: {count2}{" "}
        <button onClick={() => setCount2(count2 + 1)}>+</button>
      </h1>

      <h1>{sampleDataRef.current.value}</h1>
      <h1 ref={h1Ref}>Welcome to the APP!</h1>

      <h2>
        Go to <Link to="/login">Login page</Link>
      </h2>
    </div>
  );
}

export default App;
