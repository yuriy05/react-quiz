import React from "react";
import { useQuiz } from "../contexts/quizContext";

export default function NextButton() {
  const { dispatch, answer, index, numOfQuestions } = useQuiz();
  if (answer === null) return null;

  if (index + 1 < numOfQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index + 1 === numOfQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}
