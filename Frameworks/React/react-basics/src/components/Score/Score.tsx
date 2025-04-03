import { useState } from "react";
import "./Score.css"

export const Score = () => {
  const [score1, setScore1] = useState<number>(0);
  const [score2, setScore2] = useState<number>(0);
  const [score3, setScore3] = useState<number>(0);

  return (
    <div>
      <h1>Score</h1>
      <div className="score-wrapper">
        <div className="col">
            <p>{score1}</p>
            <button onClick={() => setScore1(score1 + 5)}>Score 1 (+5)</button>
        </div>
        <div className="col">
            <p>{score2}</p>
            <button onClick={() => setScore2(score2 + 5)}>Score 2 (+5)</button>
        </div>
        <div className="col">
            <p>{score3}</p>
            <button onClick={() => setScore3(score3 + 5)}>Score 3 (+5)</button>
        </div>
      </div>
    </div>
  );
};
