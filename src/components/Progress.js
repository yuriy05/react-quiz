import React from "react";

export default function Progress({
  index,
  numOfQuestions,
  maxPoints,
  points,
}) {
  return (
    <header className="progress">
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
