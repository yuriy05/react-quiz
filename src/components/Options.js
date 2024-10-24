import React from "react";
import { useQuiz } from "../contexts/quizContext";

export default function Options() {
  const { questions: question, index, answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question[index].options?.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${hasAnswered ? (i === question[index].correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
