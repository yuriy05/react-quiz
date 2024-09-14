import React from "react";

export default function Progress({
  index,
  numOfQuestions,
  maxPoints,
  points,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      />
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
