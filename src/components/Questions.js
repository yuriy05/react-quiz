import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/quizContext";

export default function Questions() {
  const { questions: question, index } = useQuiz();
  return (
    <div>
      <h4>{question[index].question}</h4>
      <Options />
    </div>
  );
}
