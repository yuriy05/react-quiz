import { createContext, useReducer, useContext } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const SECONDS_PER_QUESTION = 30;

  const initialState = {
    questions: [],

    //? loading, ready, active, finished, error
    status: "loading",

    index: 0,

    answer: null,

    points: 0,

    highscore: 0,

    secondsRemaining: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "start":
        return {
          ...state,
          status: "active",
          secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
        };
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points:
            action.payload === question.correctOption
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };
      case "finish":
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      case "restart":
        return {
          ...initialState,
          questions: state.questions,
          status: "ready",
        };
      case "tick":
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: state.secondsRemaining === 0 ? "finished" : state.status,
        };
      case "dataFailed":
        return {
          ...state,
          status: "error",
        };
      default:
        throw new Error("Unknown action");
    }
  }

  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        numOfQuestions,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("You are using context outside of the provider");

  return context;
}

export { QuizProvider, useQuiz };
