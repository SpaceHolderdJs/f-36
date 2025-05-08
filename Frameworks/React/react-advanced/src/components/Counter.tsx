import { useRef } from "react";

export const Counter = () => {
  const counterRef = useRef<number>(0);
  const counterElementRef = useRef<HTMLSpanElement>(null);

  const changeCounter = (changeValue: number) => {
    counterRef.current = counterRef.current + changeValue;

    if (counterElementRef.current) {
      console.log(counterElementRef.current.id, "id from the ref");
      counterElementRef.current.innerHTML = counterRef.current.toString();
    }

    console.log(`Counter: ${counterRef.current}`);
  };

  return (
    <div>
      <h1>
        Counter{" "}
        <span id="counter-1" ref={counterElementRef}>
          {counterRef.current}
        </span>
      </h1>
      <button onClick={() => changeCounter(1)}>+</button>
      <button onClick={() => changeCounter(-1)}>-</button>
    </div>
  );
};
