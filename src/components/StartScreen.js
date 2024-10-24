import React from "react";
import { useQuiz } from "../contexts/quizContext";

export default function StartScreen() {
  const { numOfQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>React quiz</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
