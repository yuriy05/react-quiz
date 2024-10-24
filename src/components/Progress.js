import React from "react";
import { useQuiz } from "../contexts/quizContext";

export default function Progress() {
  const { numOfQuestions, index, answer, points, maxPoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numOfQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}
