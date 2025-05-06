import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import "./App.css";

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


  // Завдання:
  // 1. Створити компонент Counter /components -> counter
  // 2. Підключити Counter до роутеру (routes.tsx)
  // 3. Використати useRef з типом <number> для реалізації лічильника
  // 4. Створити кнопки (+) (-) - які змінюють counter
  // 5. Вивести counter у JSX (верстку)
  // 6. Оскільки counter не буде перемальовувати компонент - 
  // сповіщати про зміну counter через alert
  // 7. alert(`Counter: ${counter}`); (useEffect)


  return (
    <div>
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
