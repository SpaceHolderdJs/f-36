import { useState } from "react";
import "./Counter.css";


export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    return <div>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>Increase (+)</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease (-)</button>
        <button onClick={() => setCounter(0)}>Reset (0)</button>
    </div>
}